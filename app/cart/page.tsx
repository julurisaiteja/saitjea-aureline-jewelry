"use client";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart";

export default function CartPage() {
  const { items, setQty, remove, subtotal } = useCart();
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-display text-5xl text-center">Bag</h1>
      <div className="hairline mx-auto mt-4 max-w-xs" />
      {items.length === 0 ? (
        <p className="mt-10 text-center text-ash">
          Empty —{" "}
          <Link href="/shop" className="text-gold underline">
            collection
          </Link>
          .
        </p>
      ) : (
        <>
          <ul className="mt-10 divide-y divide-gold/10">
            {items.map((item) => (
              <li key={`${item.id}-${item.variant}`} className="flex gap-4 py-6">
                <div className="relative h-28 w-24 shrink-0 border border-gold/15">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
                </div>
                <div className="flex-1">
                  <p className="font-display text-xl">{item.name}</p>
                  {item.variant && <p className="text-xs text-ash">{item.variant}</p>}
                  <p className="text-gold">{formatPrice(item.price)}</p>
                  <div className="mt-2 flex gap-4 text-xs uppercase tracking-widest">
                    <label>
                      Qty
                      <input
                        type="number"
                        min={1}
                        value={item.qty}
                        onChange={(e) => setQty(item.id, Number(e.target.value))}
                        className="ml-2 w-12 border-b border-gold/30 bg-transparent"
                      />
                    </label>
                    <button type="button" onClick={() => remove(item.id)} className="text-ash">
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex items-center justify-between border-t border-gold/15 pt-6">
            <p className="font-display text-2xl">{formatPrice(subtotal)}</p>
            <Link
              href="/checkout"
              className="border-b border-gold pb-1 text-xs uppercase tracking-[0.4em] text-gold"
            >
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
