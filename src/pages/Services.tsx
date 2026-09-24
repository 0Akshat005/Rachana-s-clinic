import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { alsoAvailable, services, type ServiceCategory } from "../data/clinic";
import { CTA } from "../components/CTA";
import { SEO } from "../components/SEO";
import { ServiceIconBadge } from "../components/ServiceIcon";
import { Badge } from "../components/ui";

const filters: ("All" | ServiceCategory)[] = ["All", "Spine", "Hands-on", "Technology", "Movement"];
export default function Services() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const reduced = useReducedMotion();
  const visible = filter === "All" ? services : services.filter((service) => service.category === filter);
  return (
    <>
      <SEO
        title="Physiotherapy Services in Manish Nagar, Nagpur | Rachana"
        description="Explore physiotherapy services including spine care, osteopathy, dry needling, cupping, Tecar and laser therapy, sports rehabilitation and Pilates in Nagpur."
      />
      <section className="section border-b border-line">
        <div className="container-site max-w-[1240px]">
          <p className="eyebrow">SERVICES</p>
          <h1 className="display mt-3 max-w-3xl text-[clamp(2.5rem,5vw,4.25rem)]">
            Care that starts with <em>what you need.</em>
          </h1>
          <p className="mt-5 max-w-2xl text-justify text-[17px] leading-relaxed text-muted">
            Every plan begins with an assessment and a conversation. Browse the approaches available at this physiotherapy clinic in Manish Nagar, Nagpur.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-site">
          <div aria-label="Filter services" className="mb-9 flex flex-wrap gap-2" role="group">
            {filters.map((item) => (
              <button
                key={item}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
                className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition-colors ${
                  filter === item
                    ? "border-navy-900 bg-navy-900 text-white"
                    : "border-line bg-white text-navy-900 hover:bg-sand"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="mb-5 text-sm text-muted">
            <span className="font-semibold text-navy-900">{visible.length}</span> ways we may support your movement.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.46, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative flex h-full min-h-[296px] flex-col justify-between overflow-hidden rounded-2xl border border-[#E4DDD2] bg-white p-7 shadow-[0_10px_28px_-14px_rgba(14,28,56,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold-500/80 hover:shadow-[0_22px_42px_-16px_rgba(14,28,56,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                >
                  <div className="flex flex-col items-center">
                    <ServiceIconBadge name={service.icon} />
                    <h2 className="mt-6 text-center font-display text-[22px] font-bold leading-[1.24] tracking-[-0.01em] text-[#0E1C38] transition-colors duration-200 group-hover:text-[#172D56]">
                      {service.title}
                    </h2>
                    <p className="mt-3 w-full line-clamp-3 text-justify [text-align-last:center] text-[15px] leading-[1.62] text-muted">
                      {service.blurb}
                    </p>
                  </div>
                  <div className="mt-7 flex w-full items-center justify-between border-t border-[#EFEAE1] pt-4">
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
            <Link
              to="/contact#booking"
              data-track="book"
              className="group flex min-h-[296px] flex-col justify-between rounded-2xl border border-dashed border-gold-500 bg-sand p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#EAE2D3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
            >
              <div className="flex flex-col items-center">
                <CircleQuestion />
                <h2 className="mt-6 text-center font-display text-[22px] font-bold leading-[1.24] text-[#0E1C38]">
                  Not sure which therapy you need?
                </h2>
                <p className="mt-3 w-full text-justify [text-align-last:center] text-[15px] leading-[1.62] text-muted">
                  Start with an assessment. We can talk through what is bothering you.
                </p>
              </div>
              <div className="mt-7 flex w-full items-center justify-between border-t border-gold-500/30 pt-4">
                <span className="text-[13.5px] font-semibold text-gold-700 group-hover:text-navy-900">
                  Book an assessment
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-navy-900 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:bg-navy-900 group-hover:text-white">
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="border-y border-line bg-sand py-14">
        <div className="container-site grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">ALSO AVAILABLE</p>
            <h2 className="display mt-3 text-3xl">
              More ways to support <em>your goals.</em>
            </h2>
          </div>
          <div className="flex flex-wrap content-center gap-2">
            {alsoAvailable.map((item) => (
              <Badge key={item} className="gap-2 bg-white px-3 py-2 text-sm font-medium">
                <CheckCircle2 size={15} className="text-gold-700" />
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </section>
      <CTA compact />
    </>
  );
}
function CircleQuestion() {
  return (
    <div className="mx-auto grid h-[86px] w-[86px] place-items-center rounded-full border border-gold-500/60 bg-white/80 font-display text-2xl font-semibold text-gold-700 shadow-sm">
      ?
    </div>
  );
}
