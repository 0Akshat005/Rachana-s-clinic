import type { SVGProps } from "react";
import type { Service } from "../data/clinic";

export interface ServiceIconProps extends SVGProps<SVGSVGElement> {
  name: Service["icon"];
}

/**
 * Custom clinical vector illustration system crafted for Rachana Physiotherapy Clinic.
 * Uses unified 64x64 geometry, consistent 1.75px anatomical line weights in deep navy (`currentColor`),
 * and warm bronze (`#A87A45` / `#C39A6B`) therapeutic accent layers.
 */
export function ServiceIcon({ name, className = "h-10 w-10 text-navy-900", ...props }: ServiceIconProps) {
  switch (name) {
    case "Spine":
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={className}
          {...props}
        >
          {/* Soft postural alignment corridor */}
          <path
            d="M21 12C17.5 23 17.5 41 21 52M43 12C46.5 23 46.5 41 43 52"
            stroke="#C39A6B"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="2.5 3.5"
          />
          {/* Central spinal axis */}
          <path
            d="M32 8V56"
            stroke="#A87A45"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.65"
          />
          {/* Intervertebral disc cushions (warm bronze accents) */}
          <ellipse cx="32" cy="18.5" rx="6.5" ry="2" fill="#C39A6B" fillOpacity="0.28" stroke="#A87A45" strokeWidth="1.3" />
          <ellipse cx="32" cy="29.5" rx="7.5" ry="2.2" fill="#C39A6B" fillOpacity="0.28" stroke="#A87A45" strokeWidth="1.3" />
          <ellipse cx="32" cy="40.5" rx="8" ry="2.2" fill="#C39A6B" fillOpacity="0.28" stroke="#A87A45" strokeWidth="1.3" />
          {/* Articulated Vertebrae (C-T-L segments) */}
          {/* Segment 1 */}
          <rect x="24.5" y="10.5" width="15" height="5.5" rx="2.75" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.75" />
          <path d="M21 13.2H24.5M39.5 13.2H43" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          {/* Segment 2 */}
          <rect x="23.5" y="21.2" width="17" height="6" rx="3" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.75" />
          <path d="M19.5 24.2H23.5M40.5 24.2H44.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          {/* Segment 3 */}
          <rect x="22.5" y="32.2" width="19" height="6" rx="3" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.75" />
          <path d="M18.5 35.2H22.5M41.5 35.2H45.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          {/* Segment 4 (Lumbar base) */}
          <rect x="23" y="43.2" width="18" height="6.5" rx="3.2" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.75" />
          <path d="M19.5 46.4H23M41 46.4H44.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          {/* Sacral base cradle */}
          <path
            d="M26 52.5C28 55.2 36 55.2 38 52.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );

    case "HandHeart":
      // Osteopathy & Matrix Rhythm Therapy: Skilled manual therapy hands + physiological oscillation wave
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={className}
          {...props}
        >
          {/* Soft cellular resonance halo */}
          <circle cx="32" cy="29" r="14" fill="#C39A6B" fillOpacity="0.14" />
          {/* Matrix Rhythm sinusoidal oscillation wave (8-12Hz physiological rhythm motif) */}
          <path
            d="M12 29C15.5 29 17 21.5 20.5 21.5C24 21.5 25.5 36.5 29 36.5C32.5 36.5 34 19 37.5 19C41 19 42.5 34 46 34C49 34 50.5 29 53 29"
            stroke="#A87A45"
            strokeWidth="1.85"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20.5" cy="21.5" r="2" fill="#A87A45" />
          <circle cx="37.5" cy="19" r="2" fill="#A87A45" />
          <circle cx="46" cy="34" r="2" fill="#A87A45" />
          {/* Upper practitioner osteopathic guiding hand */}
          <path
            d="M15 20.5C18.5 15.5 24.8 13 32 13C38.8 13 44.5 15.2 48.5 19.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M44.5 14.5L49 19.8L43.2 21.2"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Lower cradling manual-therapy hands */}
          <path
            d="M11.5 38.5C14.5 45.5 21.8 50.5 32 50.5C42.2 50.5 49.5 45.5 52.5 38.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Sculpted palm & thumb contours */}
          <path
            d="M16.5 36.5C19.5 41.2 25 44.2 32 44.2C39 44.2 44.5 41.2 47.5 36.5"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
          />
          <path
            d="M25 50.5V54M39 50.5V54"
            stroke="#A87A45"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "Sparkles":
      // Dry Needling: Precision filament needle + myofascial trigger-point release ripples
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={className}
          {...props}
        >
          {/* Target trigger-point release concentric circles */}
          <circle cx="29" cy="41" r="11" fill="#C39A6B" fillOpacity="0.16" />
          <circle
            cx="29"
            cy="41"
            r="6.5"
            stroke="#A87A45"
            strokeWidth="1.5"
            strokeDasharray="2.5 2.5"
          />
          <circle cx="29" cy="41" r="2.6" fill="#A87A45" />
          {/* Anatomical skin & taut myofascial band contours */}
          <path
            d="M10 38.5C17.5 35.5 23.5 37.5 29 41C34.5 44.5 42.5 45.5 54 41.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M12 46.5C20 44 25.5 45.2 31 47.5C37.5 50 44.5 50 52 47"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
          {/* Fine filament needle shaft entering trigger point */}
          <path
            d="M47.5 13.5L29 41"
            stroke="currentColor"
            strokeWidth="1.85"
            strokeLinecap="round"
          />
          {/* Copper/Bronze coiled needle handle grip */}
          <path
            d="M44.8 17.5L51.2 8.2"
            stroke="#A87A45"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
          <path
            d="M44.8 17.5L51.2 8.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Guide tube collar */}
          <path
            d="M39.5 20.5L44.5 23.8"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
          />
          {/* Neuromuscular release micro-sparks */}
          <path
            d="M19 29.5L22 32M38.5 34.5L42 33"
            stroke="#A87A45"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "CircleDot":
      // Hijama / Cupping Therapy: Sculpted suction therapy dome + myofascial tissue decompression lift
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={className}
          {...props}
        >
          {/* Decompressed tissue dome inside the cup */}
          <path
            d="M20 43.5C23.5 36.5 27.5 34 32 34C36.5 34 40.5 36.5 44 43.5"
            fill="#C39A6B"
            fillOpacity="0.22"
          />
          <path
            d="M20 43.5C23.5 36.5 27.5 34 32 34C36.5 34 40.5 36.5 44 43.5"
            stroke="#A87A45"
            strokeWidth="1.65"
            strokeLinecap="round"
          />
          {/* Suction vacuum valve stem at top of cup */}
          <rect
            x="29"
            y="11"
            width="6"
            height="5"
            rx="2"
            fill="#C39A6B"
            fillOpacity="0.28"
            stroke="currentColor"
            strokeWidth="1.65"
          />
          {/* Bell-shaped clinical cupping vessel */}
          <path
            d="M23 16H41C44.5 16 46.5 19.5 46.5 25.5C46.5 32 47.5 38.5 48.5 43.5H15.5C16.5 38.5 17.5 32 17.5 25.5C17.5 19.5 19.5 16 23 16Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Flanged silicone/glass rim */}
          <rect
            x="13.5"
            y="43.5"
            width="37"
            height="3.5"
            rx="1.75"
            fill="#FFFFFF"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          {/* Upward myofascial lift & circulation arrows */}
          <path
            d="M27 30V22M27 22L24.5 24.5M27 22L29.5 24.5"
            stroke="#A87A45"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37 30V22M37 22L34.5 24.5M37 22L39.5 24.5"
            stroke="#A87A45"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Subdermal circulation wave */}
          <path
            d="M10 51.5C18 51.5 24 49.5 32 49.5C40 49.5 46 51.5 54 51.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.75"
          />
        </svg>
      );

    case "Radio":
      // Tecar & Laser Therapy: Electro-thermal applicator wand + deep-tissue RF & photobiomodulation waves
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={className}
          {...props}
        >
          {/* Deep tissue radiofrequency thermal zone */}
          <ellipse cx="30" cy="44" rx="14" ry="7.5" fill="#C39A6B" fillOpacity="0.18" />
          {/* Concentric RF energy waves */}
          <path
            d="M22 40.5C24.5 43.5 35.5 43.5 38 40.5"
            stroke="#A87A45"
            strokeWidth="1.65"
            strokeLinecap="round"
          />
          <path
            d="M18 45.5C22 49.5 38 49.5 42 45.5"
            stroke="#A87A45"
            strokeWidth="1.65"
            strokeLinecap="round"
          />
          <path
            d="M14.5 50.5C20 55.2 40 55.2 45.5 50.5"
            stroke="#A87A45"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2.5 3"
          />
          {/* Precision Laser beam core */}
          <path
            d="M33.5 27.5L30 42"
            stroke="#A87A45"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="30" cy="42" r="2.4" fill="#A87A45" />
          {/* Ergonomic Tecar / Class-IV Laser handpiece */}
          <path
            d="M43.5 10.5L51.5 14.5L39.5 29.5L29.5 25L43.5 10.5Z"
            fill="#FFFFFF"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Capacitive electrode contact disc */}
          <ellipse
            cx="34.2"
            cy="27.2"
            rx="5.8"
            ry="2.3"
            transform="rotate(24 34.2 27.2)"
            fill="#C39A6B"
            fillOpacity="0.3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          {/* Skin contour line */}
          <path
            d="M11 36.5C20 35 40 35 53 36.5"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
          />
        </svg>
      );

    case "Activity":
      // Sports Injury Rehabilitation: Dynamic joint biomechanics + goniometric range-of-motion arc
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={className}
          {...props}
        >
          {/* Goniometric kinetic recovery arc */}
          <path
            d="M15 44C13.5 31 22.5 18.5 36.5 16.5C44.5 15.3 51 19 53.5 25"
            stroke="#A87A45"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeDasharray="3 3"
          />
          <path
            d="M50 24.5L54 25.5L54.8 21.5"
            stroke="#A87A45"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Joint articulation halo (knee/shoulder pivot) */}
          <circle cx="33" cy="31" r="8.5" fill="#C39A6B" fillOpacity="0.18" />
          <circle cx="33" cy="31" r="3.2" fill="#FFFFFF" stroke="#A87A45" strokeWidth="1.75" />
          {/* Athlete / Patient dynamic movement silhouette */}
          <circle cx="37" cy="13.5" r="4.2" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.75" />
          {/* Torso & reaching arm */}
          <path
            d="M23 22.5L34.5 20.5L46.5 16"
            stroke="currentColor"
            strokeWidth="1.85"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Core to knee drive */}
          <path
            d="M34.5 20.5L28.5 33.5L41.5 36.5L46.5 48.5"
            stroke="currentColor"
            strokeWidth="1.85"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Trailing stability leg */}
          <path
            d="M28.5 33.5L18.5 49.5"
            stroke="currentColor"
            strokeWidth="1.85"
            strokeLinecap="round"
          />
          {/* Ground force baseline */}
          <path
            d="M13 53H51"
            stroke="#A87A45"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      );

    case "PersonStanding":
    default:
      // Pilates Training: Controlled core alignment, posture halo ring & plumb-line balance
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={className}
          {...props}
        >
          {/* Pilates Reformer / Halo control ring */}
          <circle
            cx="32"
            cy="33"
            r="19.5"
            stroke="#C39A6B"
            strokeWidth="1.5"
          />
          <circle cx="32" cy="33" r="13.5" fill="#C39A6B" fillOpacity="0.14" />
          {/* Vertical postural plumb line */}
          <path
            d="M32 9V56"
            stroke="#A87A45"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeDasharray="2.5 3"
          />
          {/* Head in neutral cervical alignment */}
          <circle cx="32" cy="15.5" r="4" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.75" />
          {/* Graceful overhead/lateral Reformer strap arms */}
          <path
            d="M17.5 25.5C22.5 22.5 27 21.5 32 21.5C37 21.5 41.5 22.5 46.5 25.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Core powerhouse (rib-to-pelvis alignment) */}
          <path
            d="M32 20V37"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          {/* Pelvic stability bar in bronze */}
          <path
            d="M26.5 34.5H37.5"
            stroke="#A87A45"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Lengthened lower limbs in balanced stance */}
          <path
            d="M32 37L25.5 51.5M32 37L38.5 51.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

/**
 * Circular clinical emblem container used across Service Cards on Home and Services pages.
 * Pairs a warm ivory-sand medallion with subtle bronze framing and hover micro-elevation.
 */
export function ServiceIconBadge({
  name,
  className = "",
}: {
  name: Service["icon"];
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-full border border-[#E3D8C6] bg-gradient-to-br from-[#FAF7F1] via-[#F3EDE2] to-[#EAE0D0] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_6px_16px_-6px_rgba(14,28,56,0.08)] transition-all duration-300 ease-out group-hover:scale-[1.04] group-hover:border-gold-500/70 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_10px_22px_-6px_rgba(168,122,69,0.2)] ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[4px] rounded-full border border-gold-500/20 transition-colors duration-300 group-hover:border-gold-500/40"
      />
      <ServiceIcon
        name={name}
        className="relative z-10 h-[42px] w-[42px] text-navy-900 transition-transform duration-300 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}
