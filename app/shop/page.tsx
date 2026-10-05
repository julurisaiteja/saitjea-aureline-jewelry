"use client";
import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { brand, products, formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart";

type Sort = "featured" | "price-asc" | "price-desc";

function ShopInner() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState<Sort>("featured");
  const { toggleWish, wish } = useCart();

  const list = useMemo(() => {
    let rows = [...products];
    if (cat !== "All") rows = rows.filter((p) => p.category === cat);
    if (q.trim()) {
      const s = q.toLowerCase();
      rows = rows.filter((p) => p.name.toLowerCase().includes(s) || p.category.toLowerCase().includes(s));
    }
    if (sort === "price-asc") rows.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") rows.sort((a, b) => b.price - a.price);
    return rows;
  }, [q, cat, sort]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="font-display text-5xl text-center">Collection</h1>
      <div className="hairline mx-auto mt-6 max-w-xs" />
      <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-between">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search pieces"
          className="border-b border-gold/30 bg-transparent py-2 text-sm outline-none md:w-64"
        />
        <div className="flex gap-4 text-xs uppercase tracking-[0.3em]">
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="bg-ink text-ivory outline-none"
          >
            <option>All</option>
            {brand.categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="bg-ink text-ivory outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
          </select>
        </div>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <article key={p.id} className="group">
            <Link href={`/product/${p.id}`} className="block overflow-hidden border border-gold/10">
              <div className="relative aspect-[3/4]">
                <Image src={p.image} alt={p.name} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="360px" />
              </div>
            </Link>
            <div className="mt-3 flex justify-between text-sm">
              <div>
                <Link href={`/product/${p.id}`} className="font-display text-xl hover:text-gold">
                  {p.name}
                </Link>
                <p className="text-xs uppercase tracking-widest text-ash">{p.category}</p>
              </div>
              <div className="text-right">
                <p className="text-gold">{formatPrice(p.price)}</p>
                <button
                  type="button"
                  onClick={() => toggleWish(p.id)}
                  className="text-[10px] uppercase tracking-widest text-ash hover:text-gold"
                >
                  {wish.includes(p.id) ? "Saved" : "Save"}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-ash">Loading…</div>}>
      <ShopInner />
    </Suspense>
  );
}
