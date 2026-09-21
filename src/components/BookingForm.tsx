import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, Check, Copy, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { clinic, services } from "../data/clinic";
import { useI18n } from "../i18n";
import { dateToLocalInput } from "../lib/utils";
import { Button } from "./ui";

const schema = z.object({ name: z.string().trim().min(2, "Please enter your full name."), mobile: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit mobile number."), service: z.string().min(1, "Please select a service."), date: z.string().min(1, "Please choose a preferred date."), time: z.enum(["Morning", "Evening"], { message: "Please choose a time window." }), note: z.string().max(500, "Please keep your note under 500 characters.").optional(), consent: z.boolean().refine((value) => value, "Please confirm your consent to continue.") });
type BookingValues = z.infer<typeof schema>;
function isSunday(date: string) { return date ? new Date(`${date}T12:00:00`).getDay() === 0 : false; }

export function BookingForm() {
  const { t, language } = useI18n(); const [sentMessage, setSentMessage] = useState("");
  const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm<BookingValues>({ resolver: zodResolver(schema), defaultValues: { service: "", date: "", time: "Morning", note: "", consent: false } });
  const selectedDate = watch("date"); const sunday = isSunday(selectedDate); const today = useMemo(dateToLocalInput, []);
  const dateRegistration = register("date");
  const onSubmit = async (data: BookingValues) => {
    const lines = [
      "Hello Rachana Physiotherapy Clinic,",
      "",
      "I would like to request an appointment.",
      "",
      `Name: ${data.name.trim()}`,
      `Mobile: +91 ${data.mobile}`,
      `Service: ${data.service}`,
      `Preferred date: ${data.date}`,
      `Time window: ${data.time}`,
      `Note: ${data.note?.trim() || "—"}`,
      "",
      "I agree to be contacted about this appointment.",
    ];
    const plainMessage = lines.join("\n");
    const encoded = encodeURIComponent(plainMessage);
    setSentMessage(plainMessage);
    window.open(`https://wa.me/${clinic.whatsappNumber}?text=${encoded}`, "_blank", "noopener,noreferrer");
    toast.success("Your WhatsApp appointment message is ready to send.");
  };
  const copyMessage = async () => { try { await navigator.clipboard.writeText(sentMessage); toast.success("Message copied."); } catch { toast.error("Could not copy the message. Please select and copy it manually."); } };
  const field = "mt-1 min-h-12 w-full rounded-lg border border-line bg-white px-3 text-[15px] text-navy-900 shadow-sm outline-none transition focus:border-gold-700 focus:ring-2 focus:ring-gold-600/20";
  return <section id="booking" aria-labelledby="booking-heading" className="scroll-mt-24"><div className="mb-6"><p className="eyebrow">APPOINTMENT REQUEST</p><h2 id="booking-heading" className="mt-2 font-display text-3xl font-semibold leading-tight text-navy-900">Start with a conversation.</h2><p className="mt-2 text-sm text-muted">Choose a preferred time. The clinic will confirm your slot shortly.</p></div><form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-4" lang={language === "en" ? undefined : language}><div><label htmlFor="full-name" className="text-sm font-semibold text-navy-900">{t("fullName")}</label><input id="full-name" autoComplete="name" aria-describedby={errors.name ? "name-error" : undefined} className={field} {...register("name")}/>{errors.name && <p id="name-error" role="alert" className="mt-1 text-sm text-red-700">{errors.name.message}</p>}</div><div><label htmlFor="mobile" className="text-sm font-semibold text-navy-900">{t("mobile")}</label><div className="mt-1 flex"><span className="flex min-h-12 items-center rounded-l-lg border border-r-0 border-line bg-sand px-3 text-[15px] text-navy-900">+91</span><input id="mobile" inputMode="tel" autoComplete="tel-national" maxLength={10} aria-describedby={errors.mobile ? "mobile-error" : undefined} className="min-h-12 w-full rounded-r-lg border border-line bg-white px-3 text-[15px] text-navy-900 shadow-sm outline-none focus:border-gold-700 focus:ring-2 focus:ring-gold-600/20" {...register("mobile", { onChange: (event) => { event.target.value = event.target.value.replace(/\D/g, "").slice(0, 10); } })}/></div>{errors.mobile && <p id="mobile-error" role="alert" className="mt-1 text-sm text-red-700">{errors.mobile.message}</p>}</div><div><label htmlFor="service" className="text-sm font-semibold text-navy-900">{t("service")}</label><select id="service" autoComplete="off" aria-describedby={errors.service ? "service-error" : undefined} className={field} {...register("service")}><option value="">Choose a service</option>{services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}<option value="Not sure">Not sure which therapy I need</option></select>{errors.service && <p id="service-error" role="alert" className="mt-1 text-sm text-red-700">{errors.service.message}</p>}</div><div><label htmlFor="preferred-date" className="text-sm font-semibold text-navy-900">{t("date")}</label><div className="relative"><CalendarDays aria-hidden size={18} className="pointer-events-none absolute left-3 top-[17px] text-gold-700"/><input id="preferred-date" type="date" min={today} aria-describedby={errors.date ? "date-error" : undefined} className={`${field} pl-10`} {...dateRegistration} onChange={(event) => { dateRegistration.onChange(event); if (isSunday(event.target.value)) setValue("time", "Morning"); }}/></div><p className="mt-1 text-xs text-muted">Past dates are unavailable. The date picker opens from this field.</p>{errors.date && <p id="date-error" role="alert" className="mt-1 text-sm text-red-700">{errors.date.message}</p>}</div><fieldset><legend className="text-sm font-semibold text-navy-900">{t("time")}</legend><div className="mt-2 grid grid-cols-2 gap-2"><label className="cursor-pointer"><input className="peer sr-only" type="radio" value="Morning" {...register("time")}/><span className="flex min-h-12 items-center justify-center rounded-lg border border-line bg-white px-3 text-sm font-semibold text-navy-900 peer-checked:border-navy-900 peer-checked:bg-navy-900 peer-checked:text-white">Morning</span></label><label className={`cursor-pointer ${sunday ? "cursor-not-allowed opacity-45" : ""}`}><input className="peer sr-only" type="radio" value="Evening" disabled={sunday} {...register("time")}/><span className="flex min-h-12 items-center justify-center rounded-lg border border-line bg-white px-3 text-sm font-semibold text-navy-900 peer-checked:border-navy-900 peer-checked:bg-navy-900 peer-checked:text-white">Evening</span></label></div>{sunday && <p className="mt-2 text-xs text-gold-700">Sunday appointments are available in the morning only.</p>}{errors.time && <p role="alert" className="mt-1 text-sm text-red-700">{errors.time.message}</p>}</fieldset><div><label htmlFor="note" className="text-sm font-semibold text-navy-900">{t("note")} <span className="font-normal text-muted">(optional)</span></label><textarea id="note" autoComplete="off" rows={3} className={`${field} min-h-24 py-3`} {...register("note")}/>{errors.note && <p role="alert" className="mt-1 text-sm text-red-700">{errors.note.message}</p>}</div><div><label className="flex cursor-pointer items-start gap-3"><input type="checkbox" className="mt-1 h-5 w-5 rounded border-line accent-navy-900" aria-describedby={errors.consent ? "consent-error" : undefined} {...register("consent")}/><span className="text-sm leading-snug text-muted">{t("consent")}</span></label>{errors.consent && <p id="consent-error" role="alert" className="mt-1 text-sm text-red-700">{errors.consent.message}</p>}</div><Button type="submit" disabled={isSubmitting} className="w-full" data-track="book">{t("submit")}<ExternalLink size={16}/></Button></form>{sentMessage && <div role="status" aria-live="polite" className="mt-5 rounded-xl border border-gold-500 bg-sand p-4"><div className="flex items-start gap-3"><Check className="mt-0.5 text-gold-700"/><div><p className="font-semibold text-navy-900">Thanks — we’ll confirm your slot shortly.</p><p className="mt-1 text-sm text-muted">If WhatsApp did not open, use the copy option below.</p><button onClick={copyMessage} className="mt-3 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-gold-700 underline underline-offset-4"><Copy size={15}/>Copy message</button></div></div></div>}</section>;
}
// A backend (for example, Google Sheets or Formspree) can replace WhatsApp delivery later.
