import { AlertTriangle, ArrowRight, ChevronRight, MessageCircle } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { clinic, services } from "../data/clinic";
import { CTA } from "../components/CTA";
import { SEO } from "../components/SEO";
import { ServiceIcon, ServiceIconBadge } from "../components/ServiceIcon";
import { Accordion, Badge } from "../components/ui";

const serviceHeroMedia: Record<
  string,
  { src: string; alt: string; width: number; height: number; aspectClass: string; maxWidthClass: string }
> = {
  "spine-care": {
    src: "/images/services/spine-care-hero.jpg",
    alt: "Clinical spine care visualization illustrating relief for neck pain, back pain, disc health support, and mobility improvement at Rachana Physiotherapy Clinic",
    width: 1024,
    height: 1024,
    aspectClass: "aspect-square",
    maxWidthClass: "max-w-[305px]",
  },
  "osteopathy-mrt": {
    src: "/images/services/osteopathy-mrt-hero.jpg",
    alt: "Osteopathy and Matrix Rhythm Therapy hands-on manual technique easing tight muscles, promoting natural rhythm, and supporting comfortable movement at Rachana Physiotherapy Clinic",
    width: 1024,
    height: 768,
    aspectClass: "aspect-[4/3]",
    maxWidthClass: "max-w-[395px]",
  },
  "dry-needling": {
    src: "/images/services/dry-needling-hero.jpg",
    alt: "Dry needling physiotherapy session targeting myofascial trigger points to release tight muscle knots and relieve pain at Rachana Physiotherapy Clinic",
    width: 1024,
    height: 768,
    aspectClass: "aspect-[4/3]",
    maxWidthClass: "max-w-[395px]",
  },
};

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

  return (
    <>
      <SEO
        title={`${service.title} in Nagpur | Rachana Physiotherapy, Manish Nagar`}
        description={`${service.summary} Learn about ${service.title.toLowerCase()} at Rachana Physiotherapy Clinic in Manish Nagar, Nagpur.`}
        jsonLd={schema}
      />

      <section className="relative overflow-hidden border-b border-line">
        <div className="container-site py-8 sm:py-12 lg:py-14">
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

          <div className="mt-8 grid items-center gap-10 lg:mt-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
            {/* Left Visual Column */}
            {heroMedia ? (
              <div className={`relative mx-auto w-full ${heroMedia.maxWidthClass}`}>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2 -z-10 rounded-[1.85rem] bg-gradient-to-tr from-[#E8DEC9]/50 via-transparent to-[#C39A6B]/20 blur-lg"
                />
                <figure className="group relative overflow-hidden rounded-[1.5rem] border border-[#DED4C3] bg-gradient-to-br from-white via-[#FAF7F1] to-[#EFE7D8] p-1.5 shadow-[0_18px_40px_-16px_rgba(14,28,56,0.14)] sm:p-2">
                  <div className={`relative ${heroMedia.aspectClass} w-full overflow-hidden rounded-[1.15rem] border border-[#E5DCCB] bg-[#F7F3EB]`}>
                    <img
                      src={heroMedia.src}
                      alt={heroMedia.alt}
                      width={heroMedia.width}
                      height={heroMedia.height}
                      fetchPriority="high"
                      loading="eager"
                      decoding="async"
                      className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />
                  </div>
                </figure>
              </div>
            ) : (
              <div className="relative mx-auto flex w-full max-w-[460px] flex-col items-center justify-center overflow-hidden rounded-[1.85rem] border border-[#E2D8C7] bg-gradient-to-br from-white via-[#FAF7F1] to-[#EDE4D3] p-10 text-center shadow-[0_20px_44px_-16px_rgba(14,28,56,0.1)] sm:p-12 lg:max-w-none">
                <ServiceIconBadge name={service.icon} className="h-28 w-28" />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">
                  {service.category} Physiotherapy
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-navy-900">
                  {service.title}
                </p>
                <span className="mt-4 h-[2px] w-12 bg-gold-500" />
              </div>
            )}

            {/* Right Editorial Content Column */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E2D7C5] bg-gradient-to-br from-[#FAF7F1] to-[#EBE1D0] shadow-sm">
                  <ServiceIcon name={service.icon} className="h-7 w-7 text-navy-900" />
                </div>
                <Badge className="border-[#DFD4C0] bg-[#F6F1E7] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold-700">
                  {service.category}
                </Badge>
              </div>

              <h1 className="display mt-5 text-[clamp(2.5rem,4.8vw,4.15rem)] leading-[1.08]">
                {service.title}
              </h1>

              <div className="mt-5 h-[2px] w-14 bg-gold-500" />

              <p className="mt-5 max-w-2xl text-justify text-lg leading-relaxed text-muted">
                {service.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
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
