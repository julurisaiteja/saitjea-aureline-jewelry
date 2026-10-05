"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brand, products } from "@/lib/data";

const metals = [
  { id: "yellow", label: "Yellow", wash: "from-[#d4af37]/35 via-transparent to-[#8a6a1a]/40" },
  { id: "rose", label: "Rose", wash: "from-[#e8b4a0]/40 via-transparent to-[#8a4a3a]/35" },
  { id: "white", label: "White", wash: "from-[#e8e4dc]/30 via-transparent to-[#9a9a9a]/35" },
] as const;

const frames = [
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=80",
];

export function CraftStory({ compact = false }: { compact?: boolean }) {
  const [metal, setMetal] = useState<(typeof metals)[number]>(metals[0]);
  const [frame, setFrame] = useState(0);
  const [piece, setPiece] = useState(products[0]);
  const wash = metals.find((m) => m.id === metal.id)?.wash || metals[0].wash;

  return (
    <section className={compact ? "" : "border-y border-gold/20 bg-ink py-14"}>
      <div className={`mx-auto max-w-6xl px-5 ${compact ? "grid gap-10 lg:grid-cols-2" : "grid gap-10 lg:grid-cols-2"}`}>
        <div className="relative min-h-[380px] overflow-hidden border border-gold/25">
          <Image
            key={frames[frame]}
            src={frames[frame]}
            alt=""
            fill
            className="object-cover transition duration-700"
            sizes="640px"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${wash}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{metal.label} gold · film still</p>
            <p className="mt-2 font-display text-3xl text-ivory">{piece.name}</p>
          </div>
          <div className="absolute right-4 top-4 flex gap-2">
            {frames.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Craft frame ${i + 1}`}
                onClick={() => setFrame(i)}
                className={`h-2 w-2 rounded-full ${frame === i ? "bg-gold" : "bg-ivory/40"}`}
              />
            ))}
          </div>
        </div>
        <div className={compact ? "" : "flex flex-col justify-center"}>
          <p className="text-center text-[10px] uppercase tracking-[0.45em] text-gold lg:text-left">Atelier story</p>
          <h2 className="mt-3 text-center font-display text-3xl text-ivory md:text-4xl lg:text-left">
            Light, metal, and the bench
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-sm text-ash lg:mx-0 lg:text-left">
            A cinema of craft — not a spinning mesh. Choose metal temperature, step through atelier stills, then open the piece.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 border border-gold/20 bg-panel/30 py-3 lg:justify-start">
            {metals.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMetal(m)}
                className={`text-[10px] uppercase tracking-[0.35em] ${metal.id === m.id ? "text-gold" : "text-ash"}`}
              >
                {m.label} gold
              </button>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {products.slice(0, 6).map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPiece(p)}
                className={`relative aspect-square border ${piece.id === p.id ? "border-gold" : "border-gold/15"}`}
              >
                <Image src={p.image} alt={p.name} fill className="object-cover" sizes="100px" />
              </button>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/product/${piece.id}`}
              className="border border-gold bg-gold/10 px-6 py-3 text-xs uppercase tracking-[0.3em] text-gold transition hover:bg-gold hover:text-ink"
            >
              View {piece.name}
            </Link>
            <Link href="/atelier" className="border border-gold/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-ivory">
              Enter atelier
            </Link>
          </div>
          {!compact && (
            <p className="mt-8 text-xs text-ash/80">{brand.checkoutNote}</p>
          )}
        </div>
      </div>
    </section>
  );
}
