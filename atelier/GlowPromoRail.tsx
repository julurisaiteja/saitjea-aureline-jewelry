import { brand } from "@/lib/data";

export function GlowPromoRail() {
  return (
    <p className="bg-panel py-2 text-center text-[10px] uppercase tracking-[0.4em] text-ash">
      {brand.offer.label} · <span className="text-gold">{brand.offer.code}</span> · {brand.offer.ends}
    </p>
  );
}
