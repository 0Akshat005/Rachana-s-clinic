import { Activity, CircleDot, HandHeart, HeartPulse, PersonStanding, Radio, Sparkles, Spline, type LucideProps } from "lucide-react";
import type { Service } from "../data/clinic";
const iconMap = { Spine: Spline, HandHeart, Sparkles, CircleDot, Radio, Activity, PersonStanding };
export function ServiceIcon({ name, ...props }: { name: Service["icon"] } & LucideProps) { const Icon = iconMap[name as keyof typeof iconMap] || HeartPulse; return <Icon strokeWidth={1.5} {...props}/>; }
