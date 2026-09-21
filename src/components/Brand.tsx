import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

interface LogoProps {
  inverse?: boolean;
  compact?: boolean;
  className?: string;
}

export function Logo({ inverse = false, compact = false, className }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Rachana Physiotherapy Clinic home"
      className={cn("group inline-flex items-center gap-3 select-none", className)}
    >
      <picture className="shrink-0 flex items-center justify-center">
        <source srcSet="/logo.webp" type="image/webp" />
        <img
          src="/logo.png"
          alt="Rachana Physiotherapy Clinic Logo"
          width="52"
          height="53"
          decoding="async"
          className="h-10 w-auto sm:h-11 md:h-12 max-h-12 object-contain aspect-[1162/1190] transition-transform duration-200 group-hover:scale-[1.02]"
        />
      </picture>
      <span className={cn("leading-none", inverse ? "text-white" : "text-navy-900")}>
        <span className="block font-display text-[22px] sm:text-[24px] font-semibold tracking-tight">
          Rachana
        </span>
        {!compact && (
          <span
            className={cn(
              "mt-1 block text-[8px] sm:text-[8.5px] font-semibold tracking-[.2em]",
              inverse ? "text-gold-400" : "text-gold-700"
            )}
          >
            PHYSIOTHERAPY CLINIC
          </span>
        )}
      </span>
    </Link>
  );
}

