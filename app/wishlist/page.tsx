"use client";
import Link from "next/link";
import Image from "next/image";
import { getProduct, formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart";

export default function WishlistPage() {
  const { wish, toggleWish, add } = useCart();
  const items = wish.map(getProduct).filter(Boolean);
  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <h1 className="font-display text-5xl text-center">Wishlist</h1>
      <div className="hairline mx-auto mt-4 max-w-xs" />
      {!items.length ? (
        <p className="mt-10 text-center text-ash">No saved pieces.</p>
      ) : (
        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {items.map((p) =>
            p ? (
              <li key={p.id} className="border border-gold/15 p-4">
                <Link href={`/product/${p.id}`}>
                  <div className="relative aspect-[3/4]">
                    <Image src={p.image} alt={p.name} fill className="object-cover" sizes="280px" />
                  </div>
                </Link>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="font-display text-xl">{p.name}</p>
                    <p className="text-gold">{formatPrice(p.price)}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-[10px] uppercase tracking-widest">
                    <button type="button" onClick={() => add(p)} className="text-gold">
                      Add
                    </button>
                    <button type="button" onClick={() => toggleWish(p.id)} className="text-ash">
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ) : null
          )}
        </ul>
      )}
    </div>
  );
}
