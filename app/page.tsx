import Link from "next/link";
import Image from "next/image";
import { brand, products, formatPrice } from "@/lib/data";
import { HeroCinema } from "@/components/HeroCinema";
import { CraftStory } from "@/atelier/CraftStory";
import { LookbookMasonry } from "@/atelier/LookbookMasonry";
import { NoteStackReviews } from "@/atelier/NoteStackReviews";
import { AtelierFooter } from "@/atelier/AtelierFooter";

const featured = products.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center justify-center px-5 py-24">
        <HeroCinema video={brand.heroVideo} image={brand.heroImage} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a08]/40 via-[#0c0a08]/75 to-[#0c0a08]" />
        <div className="relative z-10 w-full max-w-3xl victorian-frame bg-[#0c0a08]/80 px-8 py-14 text-center md:px-16 md:py-20 anim-rise">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#c9a45c] anim-rise-d1">Est. atelier · Champagne & ink</p>
          <h1 className="victorian-ornament mt-6 font-display text-[clamp(3.5rem,12vw,6.5rem)] leading-none tracking-tight text-[#f3ebe0] anim-rise-d1">
            Aureline
          </h1>
          <div className="hairline mx-auto my-8 w-40" />
          <p className="font-display text-xl italic text-[#d8c4a0] md:text-2xl anim-rise-d2">{brand.tagline}</p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#a89880] anim-rise-d2">{brand.description}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 anim-rise-d2">
            <Link href="/shop" className="soft-scale border border-[#c9a45c] bg-[#c9a45c]/15 px-8 py-3 text-xs uppercase tracking-[0.35em] text-[#c9a45c] transition hover:bg-[#c9a45c] hover:text-[#0c0a08]">
              Collection
            </Link>
            <Link href="/atelier" className="soft-scale border border-[#f3ebe0]/35 px-8 py-3 text-xs uppercase tracking-[0.35em] text-[#f3ebe0] transition hover:border-[#c9a45c]">
              Enter atelier
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="hairline mb-8" />
        <p className="text-center text-[10px] uppercase tracking-[0.4em] text-[#c9a45c]">Vitrine</p>
        <h2 className="mt-3 text-center font-display text-3xl text-[#f3ebe0] md:text-4xl">Featured plates</h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-[#a89880]">
          Everyday gold and quiet stones — catalog first, then the atelier bench.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link key={p.id} href={`/product/${p.id}`} className="group soft-scale border border-[#c9a45c]/25 bg-[#0c0a08]/60">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" sizes="320px" />
              </div>
              <div className="flex items-baseline justify-between gap-3 border-t border-[#c9a45c]/20 px-4 py-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#c9a45c]">{p.category}</p>
                  <p className="mt-1 font-display text-xl text-[#f3ebe0]">{p.name}</p>
                </div>
                <p className="text-sm text-[#a89880]">{formatPrice(p.price)}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/shop" className="text-[10px] uppercase tracking-[0.35em] text-[#c9a45c] hover:text-[#f3ebe0]">
            Full collection →
          </Link>
        </div>
      </section>

      <CraftStory />

      <section className="border-y border-[#c9a45c]/20 bg-[#0c0a08]/80 py-16">
        <div className="mx-auto max-w-6xl px-5 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#c9a45c]">Signature tool</p>
          <h2 className="mt-3 font-display text-3xl text-[#f3ebe0] md:text-4xl">Atelier craft cinema</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#a89880]">
            Metal temperature, craft stills, and piece selection — a bench walk through film, not a spinning mesh.
          </p>
          <Link href="/atelier" className="mt-6 inline-block border border-[#c9a45c] px-6 py-3 text-[10px] uppercase tracking-[0.35em] text-[#c9a45c] transition hover:bg-[#c9a45c] hover:text-[#0c0a08]">
            Open atelier
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="hairline mb-8" />
        <p className="text-center text-[10px] uppercase tracking-[0.4em] text-[#c9a45c]">Lookbook plates</p>
        <LookbookMasonry limit={8} />
      </section>
      <NoteStackReviews />
      <AtelierFooter />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#c9a45c]/30 bg-[#0c0a08]/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-lg gap-3">
          <Link href="/shop" className="flex-1 border border-[#c9a45c] bg-[#c9a45c]/20 py-3 text-center text-[10px] uppercase tracking-[0.28em] text-[#c9a45c]">
            Collection
          </Link>
          <Link href="/atelier" className="flex-1 border border-[#f3ebe0]/30 py-3 text-center text-[10px] uppercase tracking-[0.28em] text-[#f3ebe0]">
            Atelier
          </Link>
        </div>
      </div>
    </>
  );
}
