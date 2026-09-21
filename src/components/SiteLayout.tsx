import { CalendarDays, ChevronRight, Clock3, MapPin, Menu, MessageCircle, Phone, TextCursorInput } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { clinic, services } from "../data/clinic";
import { useI18n, type Language } from "../i18n";
import { formatPhone } from "../lib/utils";
import { Logo } from "./Brand";
import { Button, Sheet } from "./ui";

const navItems = [
  ["home", "/"], ["services", "/services"], ["conditions", "/services/spine-care"], ["about", "/about"], ["contact", "/contact"],
] as const;
function istParts(now = new Date()) { const formatted = new Intl.DateTimeFormat("en-GB", { timeZone: clinic.timezone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(now); const value = (type: string) => formatted.find((part) => part.type === type)?.value || ""; return { day: value("weekday"), minutes: Number(value("hour")) * 60 + Number(value("minute")) }; }
function liveStatus() { const { day, minutes } = istParts(); const ranges = day === "Sun" ? clinic.hours.Sun : clinic.hours["Mon-Sat"]; const toMinutes = (time: string) => { const [hour, minute] = time.split(":").map(Number); return hour * 60 + minute; }; const display = (time: string) => { const [hour, minute] = time.split(":").map(Number); const am = hour < 12; return `${hour % 12 || 12}:${String(minute).padStart(2, "0")} ${am ? "AM" : "PM"}`; }; for (const [open, close] of ranges) if (minutes >= toMinutes(open) && minutes < toMinutes(close)) return { open: true, text: `Open now · closes ${display(close)}` }; const next = ranges.find(([open]) => minutes < toMinutes(open)); return { open: false, text: next ? `Closed · opens ${display(next[0])}` : "Closed · opens tomorrow" }; }

function LanguageSwitch() { const { language, setLanguage } = useI18n(); const labels: [Language, string][] = [["en", "EN"], ["mr", "मराठी"], ["hi", "हिन्दी"]]; return <div aria-label="Language" className="flex items-center gap-1 text-xs font-semibold">{labels.map(([id, label]) => <button key={id} onClick={() => setLanguage(id)} className={`min-h-8 px-1.5 ${language === id ? "text-gold-700 underline underline-offset-4" : "text-muted"}`} lang={id}>{label}</button>)}</div>; }
function TextSizeControl() { const [scale, setScale] = useState(() => Number(localStorage.getItem("rachana-text-size") || 100)); useEffect(() => { document.documentElement.style.fontSize = `${scale}%`; localStorage.setItem("rachana-text-size", String(scale)); }, [scale]); return <div aria-label="Text size" className="flex items-center gap-1 border-l border-line pl-3 text-xs"><TextCursorInput size={14}/>{[88, 100, 112].map((item, index) => <button key={item} onClick={() => setScale(item)} aria-label={`Set text size to ${index === 0 ? "small" : index === 1 ? "medium" : "large"}`} className={`min-h-8 min-w-7 font-semibold ${scale === item ? "text-gold-700 underline underline-offset-4" : "text-muted"}`}>{index === 0 ? "A−" : index === 1 ? "A" : "A+"}</button>)}</div>; }
function ConversionLink({ children, href, className, label }: { children: ReactNode; href: string; className?: string; label: "call" | "whatsapp" | "directions" | "book" }) { return <a data-track={label} href={href} className={className}>{children}</a>; }

export function Header() {
  const { t } = useI18n(); const [menuOpen, setMenuOpen] = useState(false); const status = useMemo(liveStatus, []); const location = useLocation();
  useEffect(() => setMenuOpen(false), [location.pathname]);
  return <><a href="#main-content" className="skip-link">Skip to main content</a><div className="hidden border-b border-line bg-sand text-[13px] text-muted md:block"><div className="container-site flex min-h-9 items-center justify-between gap-4"><span className="flex items-center gap-2"><span aria-hidden className={`h-2 w-2 rounded-full ${status.open ? "bg-whatsapp" : "bg-muted"}`}/><Clock3 size={14}/>{status.text} <span className="sr-only">India Standard Time</span></span><div className="flex items-center gap-4"><a href={`tel:${formatPhone(clinic.phones[0])}`} className="inline-flex min-h-8 items-center gap-1 hover:text-gold-700"><Phone size={13}/>{clinic.phones[0]}</a><LanguageSwitch/><TextSizeControl/></div></div></div><header className="sticky top-0 z-50 border-b border-line bg-ivory/95 backdrop-blur"><div className="container-site flex h-[72px] items-center justify-between gap-3"><Logo/><nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">{navItems.map(([key, path]) => <NavLink key={path} to={path} end={path === "/"} className={({ isActive }) => `min-h-12 content-center text-sm font-medium transition-colors hover:text-gold-700 ${isActive ? "text-gold-700" : "text-navy-900"}`}>{t(key)}</NavLink>)}</nav><div className="hidden items-center gap-2 md:flex"><ConversionLink label="call" href={`tel:${formatPhone(clinic.phones[0])}`} className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-gold-500 px-4 text-sm font-semibold text-navy-900 hover:bg-sand"><Phone size={16}/><span>Call</span></ConversionLink><Link data-track="book" to="/contact#booking" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-navy-900 px-4 text-sm font-semibold text-white hover:bg-navy-800"><CalendarDays size={16}/>{t("book")}</Link></div><div className="flex items-center gap-1 md:hidden"><a href={`tel:${formatPhone(clinic.phones[0])}`} data-track="call" aria-label="Call the clinic" className="grid h-12 w-12 place-items-center text-navy-900"><Phone size={20}/></a><button className="grid h-12 w-12 place-items-center text-navy-900" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu size={23}/></button></div></div></header><Sheet open={menuOpen} onClose={() => setMenuOpen(false)}><div className="mt-5"><Logo/><nav aria-label="Mobile navigation" className="mt-9 flex flex-col border-y border-line">{navItems.map(([key, path]) => <NavLink key={path} to={path} end={path === "/"} className="flex min-h-14 items-center justify-between border-b border-line text-base font-medium text-navy-900 last:border-0">{t(key)}<ChevronRight size={18}/></NavLink>)}</nav><div className="mt-6"><LanguageSwitch/></div><Link data-track="book" to="/contact#booking" className="mt-6 flex min-h-12 items-center justify-center rounded-lg bg-navy-900 px-4 text-sm font-semibold text-white">{t("book")}</Link></div></Sheet></>;
}

export function MobileActionBar() { const { t } = useI18n(); const maps = encodeURIComponent(clinic.address.mapsQuery); return <nav aria-label="Quick actions" className="fixed bottom-0 left-0 z-50 grid w-full grid-cols-4 border-t border-line bg-white shadow-[0_-6px_22px_rgba(14,28,56,.1)] md:hidden"><ConversionLink label="call" href={`tel:${formatPhone(clinic.phones[0])}`} className="flex min-h-12 flex-col items-center justify-center gap-0.5 text-[10px] font-semibold text-navy-900"><Phone size={16}/>{t("call")}</ConversionLink><ConversionLink label="whatsapp" href={`https://wa.me/${clinic.whatsappNumber}`} className="flex min-h-12 flex-col items-center justify-center gap-0.5 text-[10px] font-semibold text-whatsapp"><MessageCircle size={16}/>{t("whatsapp")}</ConversionLink><ConversionLink label="directions" href={`https://www.google.com/maps/dir/?api=1&destination=${maps}`} className="flex min-h-12 flex-col items-center justify-center gap-0.5 text-[10px] font-semibold text-navy-900"><MapPin size={16}/>{t("directions")}</ConversionLink><Link data-track="book" to="/contact#booking" className="flex min-h-12 flex-col items-center justify-center gap-0.5 bg-navy-900 text-[10px] font-semibold text-white"><CalendarDays size={16}/>{t("book")}</Link></nav>; }

export function Footer() {
  const { t } = useI18n();
  const maps = encodeURIComponent(clinic.address.mapsQuery);
  return (
    <footer className="border-t border-navy-800 bg-navy-900 pb-24 text-white md:pb-0">
      <div className="container-site grid gap-10 sm:gap-12 lg:gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.4fr_1fr]">
        <div>
          <Logo inverse />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/80">
            {t("footer")}
          </p>
        </div>
        <div>
          <h2 className="text-[13px] font-bold uppercase tracking-[.15em] text-gold-400">
            Quick links
          </h2>
          <div className="mt-5 flex flex-col gap-3 text-[15px] text-white/85">
            <Link to="/about" className="transition-colors hover:text-gold-300">About</Link>
            <Link to="/services" className="transition-colors hover:text-gold-300">Services</Link>
            <Link to="/services/spine-care" className="transition-colors hover:text-gold-300">Conditions</Link>
            <Link to="/contact" className="transition-colors hover:text-gold-300">Contact</Link>
          </div>
        </div>
        <div>
          <h2 className="text-[13px] font-bold uppercase tracking-[.15em] text-gold-400">
            Services
          </h2>
          <div className="mt-5 flex flex-col gap-3 text-[15px] text-white/85">
            {services.slice(0, 5).map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`} className="transition-colors hover:text-gold-300">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-[13px] font-bold uppercase tracking-[.15em] text-gold-400">
            Contact
          </h2>
          <address className="mt-5 not-italic text-[15px] leading-relaxed text-white/85">
            {clinic.address.line}
          </address>
          <div className="mt-5 flex flex-col gap-2.5 text-[15px] text-white/85">
            {clinic.phones.map((phone) => (
              <a key={phone} href={`tel:${formatPhone(phone)}`} className="font-medium text-white hover:text-gold-300 transition-colors">
                {phone}
              </a>
            ))}
            <a
              data-track="directions"
              href={`https://www.google.com/maps/dir/?api=1&destination=${maps}`}
              className="mt-1 font-semibold text-gold-400 hover:text-gold-300 underline underline-offset-4 decoration-gold-400/50 hover:decoration-gold-300 transition-colors"
            >
              Get directions →
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-[13px] font-bold uppercase tracking-[.15em] text-gold-400">
            Hours
          </h2>
          <div className="mt-5 space-y-3 text-[15px] text-white/85">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/60 block mb-0.5">Mon–Sat</span>
              <span className="font-medium text-white leading-snug block">
                8:00 AM–1:00 PM<br />4:30 PM–9:00 PM
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/60 block mb-0.5">Sunday</span>
              <span className="font-medium text-white leading-snug block">
                8:30 AM–1:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/12 bg-navy-950/70">
        <div className="container-site py-6 sm:py-7 flex flex-col gap-3.5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between text-[14px] sm:text-[15px] text-white/90">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</span>
              <span className="hidden text-white/35 sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-white/80">Designed & Developed by</span>
                <a
                  href="https://bizleap.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[15px] sm:text-[16px] text-white underline underline-offset-4 decoration-white/60 transition-colors hover:text-gold-400 hover:decoration-gold-400"
                >
                  BizLeap
                </a>
              </span>
            </div>
            <div className="shrink-0">
              <Link to="/privacy" className="font-medium text-white/80 underline-offset-4 hover:underline hover:text-gold-400 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="border-t border-white/8 pt-3 text-xs sm:text-[13px] text-white/60 leading-relaxed">
            Information on this site is for general awareness and does not replace a professional medical assessment.
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) { return <><Header/><main id="main-content">{children}</main><Footer/><MobileActionBar/></>; }
