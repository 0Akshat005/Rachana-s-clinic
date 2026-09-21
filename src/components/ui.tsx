import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown, X } from "lucide-react";
import { useEffect, useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/utils";

const buttonVariants = cva("inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { primary: "bg-navy-900 text-white hover:bg-navy-800", secondary: "border border-navy-900 bg-white text-navy-900 hover:bg-sand", white: "bg-white text-navy-900 hover:bg-sand", whatsapp: "bg-whatsapp text-white hover:bg-[#0a6333]", outlineGold: "border border-gold-500 bg-transparent text-navy-900 hover:bg-sand", ghost: "text-navy-900 hover:bg-sand" } }, defaultVariants: { variant: "primary" } });
export function Button({ className, variant, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) { return <button className={cn(buttonVariants({ variant }), className)} {...props} />; }
export function Card({ className, children }: { className?: string; children: ReactNode }) { return <div className={cn("card-base", className)}>{children}</div>; }
export function Badge({ children, className }: { children: ReactNode; className?: string }) { return <span className={cn("inline-flex items-center rounded-full border border-line bg-sand px-2.5 py-1 text-xs font-semibold text-navy-900", className)}>{children}</span>; }
export function Accordion({ items }: { items: readonly (readonly [string, string])[] | { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="divide-y divide-line border-y border-line">{items.map((item, index) => { const isObject = "question" in item; const q = isObject ? item.question : item[0]; const a = isObject ? item.answer : item[1]; const isOpen = open === index; return <div key={q}><button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : index)} className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left font-semibold text-navy-900"><span>{q}</span><ChevronDown aria-hidden className={cn("shrink-0 transition-transform", isOpen && "rotate-180")} /></button>{isOpen && <div className="max-w-3xl pb-5 text-[15px] text-muted">{a}</div>}</div>; })}</div>;
}
export function Sheet({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;
  return <div className="fixed inset-0 z-[70] md:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu"><button aria-label="Close navigation overlay" className="absolute inset-0 bg-navy-900/50" onClick={onClose}/><div className="absolute right-0 top-0 flex h-full w-[min(88vw,380px)] flex-col bg-ivory p-6 shadow-2xl"><button onClick={onClose} className="ml-auto grid h-12 w-12 place-items-center" aria-label="Close navigation"><X /></button>{children}</div></div>;
}
export function TooltipText({ label, children }: { label: string; children: ReactNode }) { return <span className="group relative inline-flex"><span tabIndex={0} className="cursor-help underline decoration-gold-500 decoration-dotted underline-offset-4">{children}</span><span role="tooltip" className="pointer-events-none absolute bottom-[calc(100%+10px)] left-0 z-30 hidden w-56 rounded-lg bg-navy-900 p-3 text-left text-xs leading-relaxed text-white shadow-lg group-hover:block group-focus-within:block sm:left-1/2 sm:-translate-x-1/2 sm:text-center">{label}</span></span>; }
