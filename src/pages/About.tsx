import { CheckCircle2, Quote } from "lucide-react";
import { clinic } from "../data/clinic";
import { CTA } from "../components/CTA";
import { SEO } from "../components/SEO";

const approach = [["Listen first", "Your concerns, routines and goals shape the conversation from the beginning."], ["Explain clearly", "Clinical words are put into plain language so you know what the plan involves."], ["Build practical confidence", "Care can include steps you can use in daily life, at a pace that feels manageable."]] as const;
const clinicPhotos = [
  {
    title: "Clinic entrance and reception",
    src: "/images/clinic/reception.jpg",
    alt: "Warm wooden reception desk and welcoming entrance at Rachana Physiotherapy Clinic in Nagpur, Maharashtra",
    span: "md:col-span-2",
  },
  {
    title: "A treatment room",
    src: "/images/clinic/treatment-room.jpg",
    alt: "Private physiotherapy treatment room with examination plinth and clinical modalities",
    span: "",
  },
  {
    title: "Movement equipment",
    src: "/images/clinic/movement-equipment.jpg",
    alt: "Active movement rehabilitation equipment including stall bars, therapy balls and resistance loops",
    span: "",
  },
  {
    title: "Pilates area",
    src: "/images/clinic/pilates-studio.jpg",
    alt: "Dedicated clinical Pilates reformer studio at Rachana Physiotherapy Clinic, Nagpur",
    span: "md:col-span-2",
  },
  {
    title: "Comfortable consultation corner",
    src: "/images/clinic/consultation-corner.jpg",
    alt: "Empathetic doctor consultation corner with spinal model and patient seating in Nagpur",
    span: "",
  },
  {
    title: "A bright waiting area",
    src: "/images/clinic/waiting-area.jpg",
    alt: "Bright, peaceful patient waiting lounge with natural daylight at Rachana Physiotherapy Clinic, Maharashtra",
    span: "",
  },
] as const;

export default function About() { const personSchema = { "@context": "https://schema.org", "@type": "Person", name: clinic.doctor.name, jobTitle: clinic.doctor.title, worksFor: { "@type": "MedicalBusiness", name: clinic.name } }; return <><SEO title="About Dr. Priyanka | Rachana Physiotherapy Clinic, Nagpur" description="Meet Dr. Priyanka Chaitanya Helwatkkar, physiotherapist at Rachana Physiotherapy Clinic in Manish Nagar, Nagpur." jsonLd={personSchema}/><section className="section border-b border-line"><div className="container-site grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]"><div className="relative isolate h-full min-h-[430px] w-full overflow-hidden rounded-2xl border border-line bg-sand/40 shadow-card"><img src="/images/dr-priyanka-portrait.jpg" alt="Professional portrait of Dr. Priyanka Chaitanya Helwatkkar in the clinic" width={1024} height={1024} fetchPriority="high" loading="eager" decoding="async" className="h-full w-full object-cover object-[center_20%]"/></div><div><p className="eyebrow">ABOUT THE DOCTOR</p><h1 className="display mt-3 text-[clamp(2.5rem,5vw,4.25rem)]">Dr. Priyanka Chaitanya <em>Helwatkkar.</em></h1><p className="mt-4 text-lg text-muted">{clinic.doctor.title}</p><div className="mt-6 space-y-2 text-sm"><p><span className="font-semibold text-navy-900">Qualifications:</span> {clinic.doctor.qualifications}</p>{!clinic.doctor.registrationNo.startsWith("[CONFIRM") && <p><span className="font-semibold text-navy-900">Registration number:</span> {clinic.doctor.registrationNo}</p>}</div></div></div></section><section className="section"><div className="container-site grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div className="rounded-2xl bg-navy-900 p-8 text-white sm:p-10"><Quote className="h-8 w-8 text-gold-500"/><blockquote className="mt-6 font-display text-3xl leading-tight">“Good care begins when you feel heard.”</blockquote><p className="mt-5 text-sm text-white/65">[CONFIRM: doctor-approved philosophy quote]</p></div><div><p className="eyebrow">A CALM, PERSONAL APPROACH</p><h2 className="display mt-3 text-4xl">Care that makes room for <em>your story.</em></h2><p className="prose-copy mt-5">{clinic.doctor.bio}</p><h3 className="mt-8 font-display text-2xl font-semibold text-navy-900">Training & certifications</h3><ul className="mt-4 grid gap-3 sm:grid-cols-2">{clinic.doctor.certifications.map((item) => <li key={item} className="flex gap-2 text-[15px] text-muted"><CheckCircle2 className="mt-0.5 h-5 shrink-0 text-gold-700"/>{item} <span className="text-xs text-gold-700">[CONFIRM]</span></li>)}</ul></div></div></section><section className="section bg-sand"><div className="container-site"><p className="eyebrow">THE RACHA NA WAY</p><h2 className="display mt-3 text-4xl">Three principles, <em>one clear focus.</em></h2><div className="mt-10 grid gap-5 md:grid-cols-3">{approach.map(([title, copy], index) => <div key={title} className="border-t-2 border-gold-500 pt-5"><p className="font-display text-2xl text-gold-700">0{index + 1}</p><h3 className="mt-4 font-display text-2xl font-semibold text-navy-900">{title}</h3><p className="mt-3 text-[15px] text-muted">{copy}</p></div>)}</div></div></section><section className="section"><div className="container-site"><div className="max-w-xl"><p className="eyebrow">THE CLINIC</p><h2 className="display mt-3 text-4xl">A place to focus on <em>moving well.</em></h2></div><div className="mt-9 grid auto-rows-[190px] sm:auto-rows-[210px] grid-cols-2 gap-3.5 md:grid-cols-4">{clinicPhotos.map((photo) => <figure key={photo.title} className={`group relative isolate h-full min-h-[190px] w-full overflow-hidden rounded-2xl border border-line bg-sand/40 shadow-card ${photo.span}`}><img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-900/30 to-transparent" /><figcaption className="absolute bottom-3.5 left-3.5 right-3.5 text-left"><p className="text-[11px] font-semibold uppercase tracking-[.12em] text-gold-400">Rachana Clinic</p><p className="mt-0.5 text-xs font-semibold text-white sm:text-sm drop-shadow">{photo.title}</p></figcaption></figure>)}</div></div></section><CTA/></>; }
