"use client";
import { useState } from "react";
import { brand } from "@/lib/data";

export function AtelierFooter() {
  const [sent, setSent] = useState(false);
  return (
    <footer className="border-t border-gold/15 bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-display text-3xl text-ivory">Private list</p>
            <p className="mt-2 text-sm text-ash">Trunk show invites and polish reminders.</p>
            {sent ? (
              <p className="mt-4 text-sm text-gold">Welcome — your letter is on its way.</p>
            ) : (
              <form
                className="mt-6 flex border-b border-gold/30"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-ash"
                />
                <button type="submit" className="text-xs uppercase tracking-[0.35em] text-gold">
                  Join
                </button>
              </form>
            )}
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-ash">Ateliers</p>
            <ul className="mt-3 space-y-2 text-sm text-ivory/90">
              {brand.stores.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-ash">{brand.loyalty}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
