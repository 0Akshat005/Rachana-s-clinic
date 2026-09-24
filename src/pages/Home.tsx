import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, CircleHelp, Dumbbell, HeartPulse, MapPin, MessageCircle, MoveRight, ShieldCheck, Stethoscope } from "lucide-react";
import HealthAndSafetySharpIcon from '@mui/icons-material/HealthAndSafetySharp';
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { advancedTherapies, clinic, homeFaqs, services, testimonials } from "../data/clinic";
import { useI18n } from "../i18n";
import { CTA } from "../components/CTA";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import { SEO } from "../components/SEO";
import { ServiceIconBadge } from "../components/ServiceIcon";
import { Accordion, Badge, Card, TooltipText } from "../components/ui";

const concerns = [
  ["Back Pain", "Low-back support and movement guidance", "spine-care", HeartPulse], ["Neck & Cervical", "Care for neck stiffness and cervical concerns", "spine-care", Stethoscope], ["Disc / PIVD", "Assessment for disc-related symptoms", "spine-care", ShieldCheck], ["Sports Injuries", "Build toward your activity goals", "sports-rehab", Dumbbell], ["Wellness & Pilates", "Move with more control and confidence", "pilates", HealthAndSafetySharpIcon],
] as const;
const steps = [["01", "Assessment", "We listen, assess movement and understand your goals."], ["02", "Personal plan", "A clear, practical plan is shaped around your needs."], ["03", "Treatment", "Suitable hands-on care and guided movement are explained."], ["04", "Recovery & prevention", "Build habits and confidence for everyday movement."]] as const; // [CONFIRM process]

function localBusinessSchema() { return { "@context": "https://schema.org", "@type": ["Physiotherapy", "LocalBusiness"], name: clinic.name, image: "https://rachana-physiotherapy.example/images/clinic-exterior.jpg", logo: "https://rachana-physiotherapy.example/logo.svg", telephone: clinic.phones, address: { "@type": "PostalAddress", streetAddress: clinic.address.line, addressLocality: "Nagpur", addressRegion: "Maharashtra", postalCode: "440015", addressCountry: "IN" }, openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "13:00" }, { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "16:30", closes: "21:00" }, { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "08:30", closes: "13:00" }] }; }
function ServiceGrid() {
  const reduced = useReducedMotion();
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((service, index) => (
        <motion.div
          key={service.slug}
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.46, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="h-full"
        >
          <Link
            to={`/services/${service.slug}`}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E4DDD2] bg-white p-7 shadow-[0_10px_28px_-14px_rgba(14,28,56,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold-500/80 hover:shadow-[0_22px_42px_-16px_rgba(14,28,56,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <ServiceIconBadge name={service.icon} />
                <span className="mt-1 inline-flex items-center rounded-full border border-[#E7DEC9] bg-[#F9F6F0] px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.13em] text-gold-700">
                  {service.category}
                </span>
              </div>
              <h3 className="mt-6 font-display text-[22px] font-semibold leading-[1.24] tracking-[-0.01em] text-navy-900 transition-colors duration-200 group-hover:text-[#172D56]">
                {service.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-[15px] leading-[1.62] text-muted">
                {service.blurb}
              </p>
            </div>
            <div className="mt-7 flex items-center justify-between border-t border-[#EFEAE1] pt-4">
              <span className="text-[13.5px] font-semibold tracking-[0.01em] text-gold-700 transition-colors duration-200 group-hover:text-navy-900">
                Learn more
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F3EB] text-navy-900 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:bg-navy-900 group-hover:text-white">
                <ArrowRight size={14} />
              </span>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-7 right-7 h-[2px] origin-left scale-x-0 bg-gold-500 transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
function Testimonials() { const [current, setCurrent] = useState(0); const previous = () => setCurrent((current + testimonials.length - 1) % testimonials.length); const next = () => setCurrent((current + 1) % testimonials.length); const review = testimonials[current]; return <div className="mx-auto max-w-3xl"><div className="relative rounded-2xl border border-line bg-white p-7 shadow-card sm:p-10"><Badge className="border-gold-500 text-gold-700">Sample — replace before launch</Badge><blockquote className="mt-6 font-display text-2xl leading-relaxed text-navy-900 sm:text-3xl">“{review.text.replace("Sample — ", "")}”</blockquote><div className="mt-7 flex items-end justify-between gap-4"><div><p className="font-semibold text-navy-900">{review.name}</p><p className="text-sm text-muted">{review.concern}</p><span className="mt-2 inline-block text-xs text-muted">Google review · sample only</span></div><div className="flex gap-2"><button onClick={previous} aria-label="Previous sample testimonial" className="grid h-12 w-12 place-items-center rounded-lg border border-line text-navy-900 hover:bg-sand"><ChevronLeft/></button><button onClick={next} aria-label="Next sample testimonial" className="grid h-12 w-12 place-items-center rounded-lg border border-line text-navy-900 hover:bg-sand"><ChevronRight/></button></div></div></div><p className="mt-3 text-center text-xs text-muted">{current + 1} of {testimonials.length} · Manual controls only</p></div>; }

export default function Home() { const { t, language } = useI18n(); return <><SEO title="Rachana Physiotherapy Clinic | Manish Nagar, Nagpur" description="Osteopathy, Matrix Rhythm Therapy, dry needling, cupping, Tecar & laser, sports rehab and Pilates in Manish Nagar, Nagpur. Call or WhatsApp to book." jsonLd={localBusinessSchema()}/><section className="overflow-hidden"><div className="container-site grid min-h-[560px] items-stretch gap-8 py-7 lg:grid-cols-[1.02fr_.98fr] lg:py-10"><div className="flex flex-col justify-center py-8 lg:pr-5" lang={language === "en" ? undefined : language}><p className="eyebrow">{t("heroEyebrow")}</p><h1 className="display mt-5 max-w-2xl text-[clamp(2.25rem,4.1vw,3.75rem)] leading-[1.12]"><span className="block">{t("heroStart")}</span> <em>{t("heroEm")}</em></h1><div className="gold-rule"/><p className="max-w-xl text-[17px] leading-[1.65] text-muted">{t("heroCopy")}</p><div className="mt-8 flex flex-wrap gap-3"><Link data-track="book" to="/contact#booking" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-navy-900 px-5 text-sm font-semibold text-white hover:bg-navy-800">{t("book")}<ArrowRight size={17}/></Link><a data-track="whatsapp" href={`https://wa.me/${clinic.whatsappNumber}`} className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-whatsapp px-5 text-sm font-semibold text-white hover:bg-[#0a6333]"><MessageCircle size={17}/>{t("whatsapp")}</a></div>            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-muted">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-gold-700"/>{t("openDays")}</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-gold-700"/>Osteopathy · MRT · Pilates</span>
              <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-gold-700"/>Beside Allahabad Bank</span>
            </div>
          </div>
          <div className="relative isolate min-h-[360px] w-full overflow-hidden rounded-[2rem] border border-line bg-sand/40 shadow-card lg:min-h-full lg:rounded-l-[4rem]">
            <img
              src="/images/hero-treatment.jpg"
              alt="Dr. Priyanka assessing and guiding shoulder movement for a patient at Rachana Physiotherapy Clinic"
              width={1024}
              height={1024}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover object-[50%_32%]"
            />
            <div className="absolute bottom-5 left-5 border-l-2 border-gold-500 bg-white/90 px-4 py-3 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[.13em] text-navy-900">A considered approach</p>
              <p className="mt-1 text-sm text-muted">Listen · assess · guide</p>
            </div>
          </div>
        </div>
      </section><section aria-labelledby="concerns-heading" className="relative z-10 -mt-3 px-5 sm:-mt-10 sm:px-8"><div className="mx-auto max-w-[1176px] overflow-x-auto rounded-2xl border border-line bg-white shadow-card"><h2 id="concerns-heading" className="sr-only">{t("concerns")}</h2><div className="flex min-w-max divide-x divide-line lg:min-w-0">{concerns.map(([title, copy, slug, Icon]) => <Link key={title} to={`/services/${slug}`} className="group w-[210px] shrink-0 p-5 sm:w-[225px] lg:w-1/5"><Icon className="h-7 w-7 text-navy-900" strokeWidth={1.5}/><h3 className="mt-4 text-sm font-semibold text-navy-900">{title}</h3><p className="mt-1 text-xs leading-relaxed text-muted">{copy}</p><span className="mt-3 block h-px w-6 bg-gold-500 transition-all group-hover:w-12"/></Link>)}</div></div></section><section className="section"><div className="container-site"><div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">WHAT WE OFFER</p><h2 className="display mt-3 text-[clamp(2rem,3.5vw,2.75rem)]">Hands-on care, <em>thoughtfully planned.</em></h2></div><Link to="/services" className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-gold-700 underline decoration-gold-500 underline-offset-4">Explore all services <MoveRight size={17}/></Link></div><ServiceGrid/></div></section><section className="border-y border-line bg-sand py-5"><div className="container-site"><p className="mb-3 text-xs font-semibold uppercase tracking-[.14em] text-muted">Advanced therapies available</p><div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-navy-900">{advancedTherapies.map(([term, explanation]) => <TooltipText key={term} label={explanation}>{term}</TooltipText>)}</div></div></section><section className="section overflow-hidden"><div className="container-site grid items-center gap-0 lg:grid-cols-2"><div className="relative isolate h-full min-h-[360px] w-full overflow-hidden rounded-t-2xl border border-line bg-sand/40 shadow-card sm:min-h-[420px] lg:min-h-[500px] lg:rounded-l-2xl lg:rounded-r-none"><img src="/images/about.png" alt="Dr. Priyanka reviewing clinical notes in the bright treatment room at Rachana Physiotherapy Clinic" width={1264} height={848} loading="lazy" decoding="async" className="h-full w-full object-cover object-[36%_center]"/></div><div className="relative bg-white p-7 shadow-card sm:p-10 lg:-ml-10 lg:my-10 lg:rounded-2xl"><p className="eyebrow">ABOUT THE DOCTOR</p><h2 className="display mt-3 text-[clamp(2rem,3.5vw,2.75rem)]">Committed to your <em>recovery</em> and well-being.</h2><p className="mt-5 text-[15px] leading-relaxed text-muted">{clinic.doctor.bio.slice(0, 290)}…</p><div className="mt-7 grid grid-cols-2 gap-4 border-y border-line py-5 text-sm"><span className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 text-gold-700"/>Open 7 days</span><span className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 text-gold-700"/>Osteopathy + MRT</span><span className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 text-gold-700"/>Tecar & Laser</span><span className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 text-gold-700"/>Certified Pilates</span></div><Link to="/about" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-lg border border-navy-900 px-5 text-sm font-semibold text-navy-900 hover:bg-sand">Read full profile <ArrowRight size={16}/></Link></div></div></section><section className="section bg-sand"><div className="container-site"><div className="max-w-xl"><p className="eyebrow">YOUR VISIT, STEP BY STEP</p><h2 className="display mt-3 text-[clamp(2rem,3.5vw,2.75rem)]">A clear plan, <em>at your pace.</em></h2></div><div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number, title, copy]) => <div key={number} className="border-t-2 border-gold-500 pt-5"><span className="font-display text-3xl text-gold-700">{number}</span><h3 className="mt-4 font-display text-xl font-semibold text-navy-900">{title}</h3><p className="mt-2 text-[15px] text-muted">{copy}</p></div>)}</div></div></section><section className="section"><div className="container-site"><div className="mb-10 text-center"><p className="eyebrow">PATIENT VOICES</p><h2 className="display mt-3 text-[clamp(2rem,3.5vw,2.75rem)]">Care should feel <em>understood.</em></h2><p className="mt-3 text-sm text-muted">These sample testimonials are clearly marked until real, consented reviews are provided.</p></div><Testimonials/></div></section>{clinic.showPricing && <section className="section bg-sand"><div className="container-site"><p className="eyebrow">FEES</p><h2 className="display mt-3 text-4xl">Simple, clear <em>information.</em></h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{clinic.pricing.map((fee) => <Card key={fee.label} className="p-6"><p className="font-semibold text-navy-900">{fee.label}</p><p className="mt-2 font-display text-2xl text-gold-700">{fee.price}</p></Card>)}</div><p className="mt-4 text-sm text-muted">Fees may vary by treatment plan — call or WhatsApp to confirm.</p></div></section>}<section className="section"><div className="container-site grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">COMMON QUESTIONS</p><h2 className="display mt-3 text-[clamp(2rem,3.5vw,2.75rem)]">Helpful answers, <em>before you visit.</em></h2><p className="mt-4 prose-copy">If something is not covered here, message the clinic. A short question is always welcome.</p></div><Accordion items={homeFaqs}/></div></section><CTA/></>; }

