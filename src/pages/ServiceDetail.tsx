import { AlertTriangle, ArrowRight, CheckCircle2, ChevronRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { clinic, services } from "../data/clinic";
import { CTA } from "../components/CTA";
import { SEO } from "../components/SEO";
import { ServiceIcon, ServiceIconBadge } from "../components/ServiceIcon";
import { Accordion, Badge } from "../components/ui";

const serviceHeroMedia: Record<
  string,
  { src: string; alt: string; width: number; height: number; aspectClass: string; maxWidthClass: string; imgPositionClass?: string }
> = {
  "spine-care": {
    src: "/images/services/spine-care-hero.jpg",
    alt: "Clinical spine care visualization illustrating relief for neck pain, back pain, disc health support, and mobility improvement at Rachana Physiotherapy Clinic",
    width: 1024,
    height: 1024,
    aspectClass: "aspect-[11/10]",
    maxWidthClass: "max-w-[490px]",
    imgPositionClass: "object-[center_48%]",
  },
  "osteopathy-mrt": {
    src: "/images/services/osteopathy-mrt-hero.jpg",
    alt: "Osteopathy and Matrix Rhythm Therapy hands-on manual technique easing tight muscles, promoting natural rhythm, and supporting comfortable movement at Rachana Physiotherapy Clinic",
    width: 1024,
    height: 768,
    aspectClass: "aspect-[4/3]",
    maxWidthClass: "max-w-[535px]",
    imgPositionClass: "object-center",
  },
  "dry-needling": {
    src: "/images/services/dry-needling-hero.jpg",
    alt: "Dry needling physiotherapy session targeting myofascial trigger points to release tight muscle knots and relieve pain at Rachana Physiotherapy Clinic",
    width: 1024,
    height: 768,
    aspectClass: "aspect-[4/3]",
    maxWidthClass: "max-w-[535px]",
    imgPositionClass: "object-center",
  },
  "cupping-hijama": {
    src: "/images/services/cupping-hijama-hero.jpg",
    alt: "Hijama cupping therapy session with clinical suction cups placed along the back to ease muscle tightness and support myofascial decompression at Rachana Physiotherapy Clinic",
    width: 1024,
    height: 682,
    aspectClass: "aspect-[3/2]",
    maxWidthClass: "max-w-[555px]",
    imgPositionClass: "object-center",
  },
  "tecar-laser": {
    src: "/images/services/tecar-laser-hero.jpg",
    alt: "Tecar and laser physiotherapy session providing targeted electro-physical therapy and deep-tissue support to a patient's knee at Rachana Physiotherapy Clinic",
    width: 1024,
    height: 682,
    aspectClass: "aspect-[3/2]",
    maxWidthClass: "max-w-[555px]",
    imgPositionClass: "object-center",
  },
};

const serviceHighlights: Record<string, readonly [string, string, string, string]> = {
  "spine-care": [
    "Relieves Neck & Cervical Pain",
    "Eases Low-Back Discomfort",
    "Supports Disc & PIVD Health",
    "Improves Everyday Mobility",
  ],
  "osteopathy-mrt": [
    "Skilled Hands-On Technique",
    "Promotes Natural Rhythm",
    "Relaxes Tight Soft Tissue",
    "Supports Comfortable Motion",
  ],
  "dry-needling": [
    "Targeted Trigger-Point Care",
    "Eases Painful Muscle Knots",
    "Reduces Myofascial Tension",
    "Assessment-Guided Precision",
  ],
  "cupping-hijama": [
    "Gentle Myofascial Decompression",
    "Eases Deep Muscle Tightness",
    "Supports Local Circulation",
    "Tailored Clinical Placement",
  ],
  "tecar-laser": [
    "Deep-Tissue Thermal Support",
    "Targeted Pain Management",
    "Soft-Tissue Recovery Aid",
    "Combined With Guided Movement",
  ],
  "sports-rehab": [
    "Biomechanical Assessment",
    "Graduated Strength & Control",
    "Joint & Tendon Recovery",
    "Return-to-Activity Planning",
  ],
  "pilates": [
    "Controlled Core Alignment",
    "Postural Strength & Balance",
    "Individually Paced Guidance",
    "Confidence in Daily Movement",
  ],
};

function MrtVisualSlot() {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#DED4C3] bg-[#F7F4EE] shadow-[0_12px_30px_-14px_rgba(14,28,56,0.1)]">
      <div
        className={`flex h-full w-full flex-col items-center justify-center p-6 text-center transition-opacity duration-300 ${
          loaded && !hasError ? "pointer-events-none absolute inset-0 opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E2D8C6] bg-white/80 shadow-sm">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-7 w-7 text-navy-900"
          >
            <circle cx="32" cy="32" r="14" fill="#C39A6B" fillOpacity="0.14" />
            <path
              d="M12 32C15.5 32 17 24.5 20.5 24.5C24 24.5 25.5 39.5 29 39.5C32.5 39.5 34 22 37.5 22C41 22 42.5 37 46 37C49 37 50.5 32 53 32"
              stroke="#A87A45"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="20.5" cy="24.5" r="2" fill="#A87A45" />
            <circle cx="37.5" cy="22" r="2" fill="#A87A45" />
            <circle cx="46" cy="37" r="2" fill="#A87A45" />
          </svg>
        </div>
        <p className="mt-4 font-display text-lg font-semibold text-navy-900 sm:text-xl">
          Matrix Rhythm Therapy
        </p>
        <p className="mt-1 text-xs text-muted">
          Rhythmic Physiological Micro-Oscillation
        </p>
        <span className="mt-3.5 inline-flex items-center rounded-full border border-[#E4DBC8] bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-700">
          Technique Visual Slot
        </span>
      </div>

      {!hasError && (
        <img
          src="/images/services/mrt-technique.jpg"
          alt="Matrix Rhythm Therapy application delivering gentle physiological micro-oscillations along taut soft tissue"
          width={1024}
          height={768}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ${
            loaded ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
      )}
    </figure>
  );
}

function OsteopathyMrtArticleContent({ service }: { service: (typeof services)[number] }) {
  return (
    <div className="space-y-12 sm:space-y-14">
      {/* What it is */}
      <section id="what-it-is">
        <h2 className="display text-3xl">What it is</h2>
        <div className="mt-4 space-y-4">
          <p className="prose-copy text-justify">
            Osteopathy is an attentive manual therapy approach centered on the direct relationship between your body&apos;s physical structure and the way you move. By evaluating the musculoskeletal framework—including joints, deep muscular layers, and connective fascia—it works to relieve localized restriction, address areas of stiffness, and encourage functional balance throughout everyday activities.
          </p>
          <p className="prose-copy text-justify">
            Matrix Rhythm Therapy (MRT) complements this hands-on treatment by introducing gentle, rhythmic micro-oscillations directly into the targeted soft tissue. These measured frequencies help ease tight muscle fibers, soothe tissue tension, and assist your body in restoring comfortable, unrestricted movement.
          </p>
        </div>
      </section>

      {/* Techniques Used: Two-Image Editorial Composition */}
      <section aria-labelledby="techniques-heading" className="space-y-10 border-y border-line py-10 sm:py-12">
        <div>
          <p className="eyebrow">TECHNIQUES USED</p>
          <h3 id="techniques-heading" className="display mt-2 text-2xl sm:text-3xl">
            Hands-on structure, <em>rhythmic release.</em>
          </h3>
        </div>

        {/* Technique 1: Osteopathy (Primary Visual) */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#DED4C3] bg-[#FAF7F1] shadow-[0_14px_34px_-14px_rgba(14,28,56,0.12)]">
            <img
              src="/images/services/osteopathy-mrt-hero.jpg"
              alt="Hands-on osteopathic manual therapy assessing and mobilizing spinal soft tissue and muscle layers"
              width={1024}
              height={768}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <div className="space-y-3">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-700">
              HANDS-ON APPROACH · OSTEOPATHY
            </span>
            <h4 className="font-display text-2xl font-semibold text-navy-900">
              Structural & Manual Alignment
            </h4>
            <p className="prose-copy text-justify text-[15px] sm:text-[16px]">
              Attentive hands-on evaluation of joint dynamics, muscle tone, and myofascial restrictions. Rather than treating an isolated spot, osteopathic techniques assess how movement in one area influences posture, spinal mechanics, and overall functional ease.
            </p>
          </div>
        </div>

        {/* Technique 2: Matrix Rhythm Therapy (Secondary Visual / Dedicated Slot) */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="order-2 space-y-3 lg:order-1">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-700">
              RHYTHMIC TECHNIQUE · MATRIX RHYTHM THERAPY
            </span>
            <h4 className="font-display text-2xl font-semibold text-navy-900">
              Targeted Tissue Oscillations
            </h4>
            <p className="prose-copy text-justify text-[15px] sm:text-[16px]">
              Matrix Rhythm Therapy introduces gentle, mechanical micro-oscillations synchronized with the body’s physiological frequencies. Applied along taut muscle bands and connective tissue, these rhythmic pulses help alleviate deep tension and encourage soft-tissue flexibility.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="mx-auto w-full max-w-[460px] lg:max-w-none">
              <MrtVisualSlot />
            </div>
          </div>
        </div>
      </section>

      {/* Who it can help */}
      <section id="who-it-can-help">
        <h2 className="display text-3xl">Who it can help</h2>
        <div className="mt-4 space-y-3">
          <p className="prose-copy text-justify">
            This integrated manual approach may benefit individuals experiencing ongoing muscle tightness, postural neck and back stiffness, soft-tissue tension, or restricted movement during daily activities.
          </p>
          <p className="prose-copy text-justify">
            Whether discomfort stems from desk posture, athletic training, or repetitive strain, suitability is always established through an individual clinical assessment to ensure it matches your specific recovery goals.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section id="what-to-expect">
        <h2 className="display text-3xl">What to expect</h2>
        <div className="mt-4 space-y-3">
          <p className="prose-copy text-justify">
            Your consultation begins with a focused clinical evaluation where your physiotherapist assesses functional movement patterns and clearly explains the planned techniques before treatment commences.
          </p>
          <p className="prose-copy text-justify">
            During the session, gentle osteopathic mobilizations and rhythmic oscillations are continually adjusted based on your comfort, ongoing feedback, and physical response to provide a calm, supportive experience.
          </p>
        </div>
      </section>

      {/* Safety & suitability */}
      <section id="safety-suitability">
        <h2 className="display text-3xl">Safety & suitability</h2>
        <div className="mt-4 space-y-3">
          <p className="prose-copy text-justify">
            Treatment is thoughtfully tailored to your individual health background, physical needs, and clinical assessment findings. Hands-on mobilizations and rhythmic therapy are applied only after evaluating your medical history.
          </p>
          <p className="prose-copy text-justify">
            Your physiotherapist will determine whether Osteopathy, Matrix Rhythm Therapy, guided exercise, or an alternative physiotherapy approach is most appropriate and safe for your specific condition.
          </p>
        </div>
      </section>

      {/* Questions people ask */}
      <section>
        <h2 className="display text-3xl">Questions people ask</h2>
        <div className="mt-4">
          <Accordion items={service.faqs} />
        </div>
      </section>
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  if (!service) return <Navigate to="/not-found" replace />;

  const related = services
    .filter((item) => item.slug !== service.slug && item.category === service.category)
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rachana-physiotherapy.example/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://rachana-physiotherapy.example/services" },
      { "@type": "ListItem", position: 3, name: service.title },
    ],
  };

  const heroMedia = serviceHeroMedia[service.slug];
  const highlights = serviceHighlights[service.slug] ?? serviceHighlights["spine-care"];

  return (
    <>
      <SEO
        title={`${service.title} in Nagpur | Rachana Physiotherapy, Manish Nagar`}
        description={`${service.summary} Learn about ${service.title.toLowerCase()} at Rachana Physiotherapy Clinic in Manish Nagar, Nagpur.`}
        jsonLd={schema}
      />

      <section className="relative overflow-hidden border-b border-line">
        <div className="container-site py-6 sm:py-8 lg:py-9">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
            <Link to="/" className="transition-colors hover:text-gold-700">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link to="/services" className="transition-colors hover:text-gold-700">
              Services
            </Link>
            <ChevronRight size={14} />
            <span aria-current="page" className="font-medium text-navy-900">
              {service.title}
            </span>
          </nav>

          <div className="mt-5 grid items-center gap-8 lg:mt-6 lg:grid-cols-[1.03fr_0.97fr] lg:gap-12">
            {/* Left Visual Column — Enlarged for clear legibility while preserving hero height */}
            {heroMedia ? (
              <div className={`relative mx-auto w-full ${heroMedia.maxWidthClass} lg:mx-0`}>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2 -z-10 rounded-[1.85rem] bg-gradient-to-tr from-[#E8DEC9]/50 via-transparent to-[#C39A6B]/20 blur-lg"
                />
                <figure className="group relative overflow-hidden rounded-[1.5rem] border border-[#DED4C3] bg-gradient-to-br from-white via-[#FAF7F1] to-[#EFE7D8] p-2 shadow-[0_18px_42px_-15px_rgba(14,28,56,0.14)] sm:p-2.5">
                  <div className={`relative ${heroMedia.aspectClass} w-full overflow-hidden rounded-[1.15rem] border border-[#E5DCCB] bg-[#F7F3EB]`}>
                    <img
                      src={heroMedia.src}
                      alt={heroMedia.alt}
                      width={heroMedia.width}
                      height={heroMedia.height}
                      fetchPriority="high"
                      loading="eager"
                      decoding="async"
                      className={`h-full w-full object-cover ${heroMedia.imgPositionClass ?? "object-center"} transition-transform duration-500 ease-out group-hover:scale-[1.015]`}
                    />
                  </div>
                </figure>
              </div>
            ) : (
              <div className="relative mx-auto flex min-h-[380px] w-full max-w-[520px] flex-col items-center justify-center overflow-hidden rounded-[1.65rem] border border-[#DED4C3] bg-gradient-to-br from-white via-[#FAF7F1] to-[#EDE4D3] p-9 text-center shadow-[0_18px_42px_-15px_rgba(14,28,56,0.12)] sm:p-11 lg:mx-0">
                <ServiceIconBadge name={service.icon} className="h-28 w-28" />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">
                  {service.category} Physiotherapy
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
                  {service.title}
                </p>
                <span className="mt-4 h-[2px] w-12 bg-gold-500" />
                <p className="mt-4 max-w-sm text-center text-sm leading-relaxed text-muted">
                  {service.blurb}
                </p>
              </div>
            )}

            {/* Right Editorial Content Column — Proportionally matched to the left visual */}
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E2D7C5] bg-gradient-to-br from-[#FAF7F1] to-[#EBE1D0] shadow-sm">
                  <ServiceIcon name={service.icon} className="h-7 w-7 text-navy-900" />
                </div>
                <Badge className="border-[#DFD4C0] bg-[#F6F1E7] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold-700">
                  {service.category}
                </Badge>
              </div>

              <h1 className="display mt-4 text-[clamp(2.15rem,3.6vw,3.35rem)] leading-[1.12] tracking-[-0.015em]">
                {service.title}
              </h1>

              <div className="mt-4 h-[2px] w-14 bg-gold-500" />

              <p className="mt-4 max-w-xl text-justify text-[16.5px] leading-[1.65] text-muted sm:text-[17px]">
                {service.summary}
              </p>

              <div className="mt-5 grid grid-cols-1 gap-x-5 gap-y-2 border-y border-[#E6DEC8] py-3.5 text-[13.5px] font-medium text-navy-900 sm:grid-cols-2">
                {highlights.map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 size={15} className="shrink-0 text-gold-700" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  data-track="book"
                  to="/contact#booking"
                  className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-navy-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                >
                  Book an assessment <ArrowRight size={17} />
                </Link>
                <a
                  data-track="whatsapp"
                  href={`https://wa.me/${clinic.whatsappNumber}`}
                  className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-whatsapp px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0a6333]"
                >
                  <MessageCircle size={17} />
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="section">
        <div className="container-site grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">UNDERSTANDING THIS SERVICE</p>
            <div className="mt-5 border-l-2 border-gold-500 pl-4 text-left text-sm leading-relaxed text-muted">
              This page provides general information. Your assessment guides the right next step for you.
            </div>
          </aside>
          {service.slug === "osteopathy-mrt" ? (
            <OsteopathyMrtArticleContent service={service} />
          ) : (
            <div className="space-y-11">
              <section>
                <h2 className="display text-3xl">What it is</h2>
                <p className="prose-copy mt-4 text-justify">{service.what}</p>
              </section>
              <section>
                <h2 className="display text-3xl">Who it can help</h2>
                <p className="prose-copy mt-4 text-justify">{service.who}</p>
              </section>
              <section>
                <h2 className="display text-3xl">What to expect</h2>
                <p className="prose-copy mt-4 text-justify">{service.expect}</p>
              </section>
              <section>
                <h2 className="display text-3xl">Safety & suitability</h2>
                <p className="prose-copy mt-4 text-justify">{service.safety}</p>
              </section>
              {service.slug === "spine-care" && (
                <section
                  className="rounded-2xl border-2 border-gold-500 bg-sand p-6"
                  aria-label="Urgent medical-care warning"
                >
                  <div className="flex gap-3">
                    <AlertTriangle className="mt-1 shrink-0 text-gold-700" />
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-navy-900">
                        Seek urgent medical care if…
                      </h2>
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-muted">
                        <li>you lose bladder or bowel control</li>
                        <li>you have numbness around the groin or inner thighs</li>
                        <li>you notice sudden leg weakness</li>
                        <li>back pain comes with fever or follows a serious fall</li>
                      </ul>
                      <p className="mt-4 text-sm font-medium text-navy-900">
                        This page is general information, not a diagnosis.
                      </p>
                    </div>
                  </div>
                </section>
              )}
              <section>
                <h2 className="display text-3xl">Questions people ask</h2>
                <div className="mt-4">
                  <Accordion items={service.faqs} />
                </div>
              </section>
            </div>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="section bg-sand">
          <div className="container-site">
            <p className="eyebrow">RELATED CARE</p>
            <h2 className="display mt-3 text-3xl">You may also want to explore</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="rounded-2xl border border-line bg-white p-5 transition hover:border-gold-500"
                >
                  <ServiceIcon name={item.icon} className="h-6 w-6" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-justify text-sm text-muted">{item.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
