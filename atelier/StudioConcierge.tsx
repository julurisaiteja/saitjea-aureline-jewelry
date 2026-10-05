"use client";
import { useState } from "react";
import { brand } from "@/lib/data";

export function StudioConcierge() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="border border-gold/40 bg-ink/90 px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-gold backdrop-blur-sm"
      >
        Atelier guide
      </button>
      {open && (
        <div className="mt-2 w-[min(100vw-2.5rem,20rem)] border border-gold/25 bg-panel p-4 animate-rise shadow-[0_0_40px_rgba(201,162,39,0.08)]">
          <ul className="space-y-2 border-b border-gold/15 pb-3">
            {brand.ai.map(([q], i) => (
              <li key={q}>
                <button
                  type="button"
                  onClick={() => setIdx(i)}
                  className={`text-left text-xs ${idx === i ? "text-gold" : "text-ash hover:text-ivory"}`}
                >
                  {q}
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-ivory/90">{brand.ai[idx][1]}</p>
        </div>
      )}
    </div>
  );
}
