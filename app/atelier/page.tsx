import { CraftStory } from "@/atelier/CraftStory";
import Link from "next/link";

export default function AtelierPage() {
  return (
    <div className="pb-16">
      <div className="mx-auto max-w-6xl px-5 pt-14 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#c9a45c]">Victorian atelier</p>
        <h1 className="victorian-ornament mt-2 font-display text-4xl text-[#f3ebe0] md:text-5xl">Craft, not turntables</h1>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[#a89880]">
          Film stills, metal temperature, and heirloom mood — a boutique story without WebGL product pedestals.
        </p>
        <Link href="/shop" className="mt-6 inline-block border border-[#c9a45c] px-8 py-3 text-xs uppercase tracking-[0.35em] text-[#c9a45c]">
          Shop collection
        </Link>
      </div>
      <div className="mt-10">
        <CraftStory compact />
      </div>
    </div>
  );
}
