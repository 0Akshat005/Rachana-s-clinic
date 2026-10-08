import { Clock, ExternalLink, FileText, MapPin, MessageCircle, Phone } from "lucide-react";
import { clinic } from "../data/clinic";
import { BookingForm } from "../components/BookingForm";
import { SEO } from "../components/SEO";
import { formatPhone } from "../lib/utils";

function Hours() {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Clock size={19} className="text-gold-700" />
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-navy-900">Clinic hours</h2>
        </div>
        <span className="rounded-full border border-[#E2D8C6] bg-[#FAF7F1] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-gold-700">
          Open 7 Days
        </span>
      </div>
      <dl className="mt-5 divide-y divide-line">
        <div className="flex flex-col gap-2 py-3.5 text-sm sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <dt className="font-semibold text-navy-900">Monday – Saturday</dt>
          <dd className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end sm:gap-0.5 sm:text-right">
            <span className="inline-flex items-center rounded-lg border border-[#E7DFCE] bg-[#FAF7F1] px-2.5 py-1 text-[13px] font-medium text-navy-900 whitespace-nowrap sm:border-0 sm:bg-transparent sm:p-0 sm:text-sm">
              8:00 AM – 1:00 PM
            </span>
            <span className="inline-flex items-center rounded-lg border border-[#E7DFCE] bg-[#FAF7F1] px-2.5 py-1 text-[13px] font-medium text-navy-900 whitespace-nowrap sm:border-0 sm:bg-transparent sm:p-0 sm:text-sm">
              4:30 PM – 9:00 PM
            </span>
          </dd>
        </div>
        <div className="flex flex-col gap-2 py-3.5 text-sm sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div>
            <dt className="font-semibold text-navy-900">Sunday</dt>
            <span className="text-[12px] text-muted">Morning session only</span>
          </div>
          <dd className="sm:text-right">
            <span className="inline-flex items-center rounded-lg border border-[#E7DFCE] bg-[#FAF7F1] px-2.5 py-1 text-[13px] font-medium text-navy-900 whitespace-nowrap sm:border-0 sm:bg-transparent sm:p-0 sm:text-sm">
              8:30 AM – 1:00 PM
            </span>
          </dd>
        </div>
      </dl>
      <p className="mt-3.5 border-t border-line pt-3 text-justify text-xs text-muted">
        Prior appointment or message is recommended before your visit.
      </p>
    </div>
  );
}

export default function Contact() {
  const maps = encodeURIComponent(clinic.address.mapsQuery);
  return (
    <>
      <SEO
        title="Contact Rachana Physiotherapy Clinic | Manish Nagar, Nagpur"
        description="Call, WhatsApp or get directions to Rachana Physiotherapy Clinic in Manish Nagar, Nagpur. Request an appointment online."
      />

      {/* Hero Header — Balanced editorial spacing without the empty 200px gap */}
      <section className="border-b border-line/80 pt-8 pb-7 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-10">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">CONTACT & APPOINTMENTS</p>
            <h1 className="display mt-2.5 text-[clamp(2.2rem,4.2vw,3.75rem)] leading-[1.12]">
              Let’s talk about <em>what feels difficult.</em>
            </h1>
            <p className="mt-3.5 max-w-2xl text-justify text-base leading-relaxed text-muted sm:text-[17px]">
              Call, message or request an appointment. We’ll help you find a suitable next step.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pt-7 pb-16 sm:pt-9 sm:pb-20 lg:pt-10 lg:pb-24">
        <div className="container-site grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-11 lg:items-start">
          {/* Left Column — Direct Channels, Hours, Location & Map */}
          <div className="space-y-5">
            {/* Direct Clinical Access Card */}
            <div className="rounded-2xl border border-navy-800 bg-navy-900 p-5 sm:p-7 text-white shadow-[0_14px_36px_-12px_rgba(14,28,56,0.2)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-500">
                SPEAK WITH THE CLINIC
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-white">
                Direct Clinical Access
              </h2>
              <p className="mt-2 text-justify text-sm leading-relaxed text-white/75">
                Prefer an immediate response? Reach our physiotherapy team directly via phone or WhatsApp during clinic hours.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                <a
                  data-track="call"
                  href={`tel:${formatPhone(clinic.phones[0])}`}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-3.5 text-sm font-semibold text-navy-900 shadow-sm transition hover:bg-[#FAF7F2]"
                >
                  <Phone size={16} />
                  <span>Call</span>
                </a>
                <a
                  data-track="whatsapp"
                  href={`https://wa.me/${clinic.whatsappNumber}`}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp px-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0a6333]"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
                <a
                  data-track="directions"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${maps}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  <MapPin size={16} />
                  <span>Directions</span>
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-white/15 pt-4 text-xs text-white/75 sm:text-[13px]">
                <span className="font-medium text-white/60">Direct lines:</span>
                <div className="flex flex-wrap items-center gap-3 font-semibold text-white">
                  <a href={`tel:${formatPhone(clinic.phones[0])}`} className="whitespace-nowrap transition hover:text-gold-400">
                    {clinic.phones[0]}
                  </a>
                  <span className="text-white/35">·</span>
                  <a href={`tel:${formatPhone(clinic.phones[1])}`} className="whitespace-nowrap transition hover:text-gold-400">
                    {clinic.phones[1]}
                  </a>
                </div>
              </div>
            </div>

            {/* Clinic Hours */}
            <Hours />

            {/* Find Us / Landmark Card */}
            <div className="rounded-2xl border border-line bg-[#FAF7F1] p-5 shadow-sm sm:p-7">
              <div className="flex items-center gap-2.5">
                <MapPin size={19} className="text-gold-700" />
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-navy-900">
                  Find the clinic
                </h2>
              </div>
              <address className="mt-3.5 not-italic text-justify text-[15px] leading-relaxed text-muted">
                {clinic.address.line}
              </address>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#EAE3D6] pt-3 text-sm">
                <p className="text-justify text-muted">
                  <span className="font-semibold text-navy-900">Landmark:</span> {clinic.address.landmark}
                </p>
                <a
                  data-track="directions"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${maps}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 transition hover:text-navy-900"
                >
                  Open in Maps <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Map Preview */}
            <div className="relative overflow-hidden rounded-2xl border border-[#DFD6C5] shadow-sm">
              <iframe
                title="Map to Rachana Physiotherapy Clinic"
                src={`https://www.google.com/maps?q=${maps}&output=embed`}
                loading="lazy"
                className="h-[260px] w-full border-0 sm:h-[280px]"
              />
            </div>
          </div>

          {/* Right Column — Booking Form & What to Bring */}
          <div>
            <BookingForm />

            <aside className="mt-6 rounded-2xl border border-line bg-[#FAF7F1] p-5 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2.5">
                <FileText size={19} className="text-gold-700" />
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-navy-900">
                  What to bring for your visit
                </h2>
              </div>
              <ul className="mt-4 space-y-2.5 text-[15px] text-muted">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600" />
                  <span className="text-justify">Previous prescriptions, doctor consultations, or discharge notes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600" />
                  <span className="text-justify">Recent X-ray, MRI, or ultrasound imaging reports (if available)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600" />
                  <span className="text-justify">Comfortable clothing that allows you to move easily during physical assessment</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
