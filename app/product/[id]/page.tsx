"use client";
import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { formatPrice, getProduct, relatedProducts } from "@/lib/data";
import { useCart } from "@/lib/cart";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProduct(id);
  const [img, setImg] = useState(0);
  const [variant, setVariant] = useState<string | undefined>();
  const [faqOpen, setFaqOpen] = useState(0);
  const { add, toggleWish, wish } = useCart();
  if (!product) notFound();
  const related = relatedProducts(product);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-3">
          <div className="relative aspect-[4/5] border border-gold/15">
            <Image src={product.images[img]} alt={product.name} fill className="object-cover" sizes="560px" priority />
          </div>
          <div className="flex gap-2">
            {product.images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setImg(i)}
                className={`relative h-14 w-14 border ${i === img ? "border-gold" : "border-gold/20"}`}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="56px" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{product.category}</p>
          <h1 className="font-display text-5xl">{product.name}</h1>
          <p className="mt-3 text-ash">
            {product.rating} · {product.reviewCount} letters · {formatPrice(product.price)}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-ivory/90">{product.description}</p>
          <div className="mt-8">
            <p className="text-[10px] uppercase tracking-[0.35em] text-ash">Metal</p>
            <div className="mt-2 flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={`border-b pb-1 text-xs uppercase tracking-widest ${variant === v ? "border-gold text-gold" : "border-transparent text-ash"}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            <button
              type="button"
              onClick={() => add(product, 1, variant)}
              className="border-b border-gold pb-1 text-xs uppercase tracking-[0.4em] text-gold"
            >
              Add to bag
            </button>
            <button type="button" onClick={() => toggleWish(product.id)} className="text-xs uppercase tracking-widest text-ash">
              {wish.includes(product.id) ? "On wishlist" : "Wishlist"}
            </button>
            <Link href="/atelier" className="text-xs uppercase tracking-widest text-ash hover:text-gold">
              Try-on
            </Link>
          </div>
          <dl className="mt-12 space-y-2 border-t border-gold/15 pt-8 text-sm">
            {Object.entries(product.specs).map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4">
                <dt className="text-ash">{k}</dt>
                <dd className="text-ivory">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <section className="mt-20">
        <h2 className="font-display text-3xl">Questions</h2>
        {product.faq.map(([q, a], i) => (
          <div key={q} className="border-b border-gold/10">
            <button
              type="button"
              className="flex w-full py-4 text-left text-sm"
              onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
            >
              {q}
            </button>
            {faqOpen === i && <p className="pb-4 text-sm text-ash">{a}</p>}
          </div>
        ))}
      </section>
      <section className="mt-16">
        <h2 className="font-display text-3xl">Pairs well with</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {related.map((r) => (
            <Link key={r.id} href={`/product/${r.id}`} className="border border-gold/10 p-3">
              <div className="relative aspect-square">
                <Image src={r.image} alt={r.name} fill className="object-cover" sizes="200px" />
              </div>
              <p className="mt-2 font-display text-lg">{r.name}</p>
              <p className="text-xs text-gold">{formatPrice(r.price)}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
