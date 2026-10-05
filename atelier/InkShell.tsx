"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart";
import { GlowPromoRail } from "./GlowPromoRail";
import { AtelierFooter } from "./AtelierFooter";

const nav = [
  { href: "/shop", label: "Collection" },
  { href: "/atelier", label: "Atelier" },
  { href: "/about", label: "Craft" },
  { href: "/about#house", label: "About" },
];

export function InkShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const { count } = useCart();
  const cover = path === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <GlowPromoRail />
      <header className={`z-30 ${cover ? "absolute inset-x-0 top-10" : "border-b border-gold/20 bg-ink"}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <nav className="flex gap-6 text-[11px] uppercase tracking-[0.35em] text-ivory/80">
            {nav.slice(0, 2).map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-gold">
                {n.label}
              </Link>
            ))}
          </nav>
          {!cover && (
            <Link href="/" className="font-display text-2xl tracking-wide text-ivory">
              Aureline
            </Link>
          )}
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.35em]">
            {nav.slice(2).map((n) => (
              <Link key={n.href} href={n.href} className="hidden text-ivory/80 hover:text-gold sm:inline">
                {n.label}
              </Link>
            ))}
            <Link href="/cart" className="text-gold tabular-nums">
              Bag ({count})
            </Link>
          </div>
        </div>
        {cover && <div className="hairline mx-auto max-w-xs mt-2" />}
      </header>
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      {!cover && <AtelierFooter />}
    </div>
  );
}
