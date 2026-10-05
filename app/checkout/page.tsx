"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { brand, formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const router = useRouter();
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState(false);
  const discount = applied && code.toUpperCase() === brand.offer.code ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  if (!items.length) {
    return (
      <div className="py-20 text-center">
        <Link href="/shop" className="text-gold underline">
          Shop collection
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-12 px-5 py-14 lg:grid-cols-2">
      <div>
        <h1 className="font-display text-4xl">Checkout</h1>
        <p className="mt-2 text-sm text-ash">{brand.checkoutNote}</p>
        <form
          className="mt-10 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            clear();
            router.push("/success");
          }}
        >
          <input required placeholder="Name" className="w-full border-b border-gold/25 bg-transparent py-2 text-sm outline-none" />
          <input required type="email" placeholder="Email" className="w-full border-b border-gold/25 bg-transparent py-2 text-sm outline-none" />
          <input required placeholder="Shipping address" className="w-full border-b border-gold/25 bg-transparent py-2 text-sm outline-none" />
          <div className="border border-gold/20 bg-panel p-4">
            <p className="text-[10px] uppercase tracking-[0.35em] text-gold">Card</p>
            <input placeholder="4242 4242 4242 4242" className="mt-2 w-full bg-transparent py-2 text-sm outline-none" />
            <div className="mt-2 grid grid-cols-2 gap-4">
              <input placeholder="MM / YY" className="border-b border-gold/20 bg-transparent py-1 text-sm" />
              <input placeholder="CVC" className="border-b border-gold/20 bg-transparent py-1 text-sm" />
            </div>
            <p className="mt-2 text-[10px] text-ash">Stripe-style demo — no real charge.</p>
          </div>
          <button type="submit" className="w-full border border-gold py-3 text-xs uppercase tracking-[0.4em] text-gold">
            Pay {formatPrice(total)}
          </button>
        </form>
      </div>
      <aside>
        <p className="text-[10px] uppercase tracking-[0.35em] text-ash">Summary</p>
        <ul className="mt-4 space-y-2 text-sm">
          {items.map((i) => (
            <li key={i.id} className="flex justify-between">
              <span>
                {i.name} × {i.qty}
              </span>
              <span>{formatPrice(i.price * i.qty)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-2 border-b border-gold/20 pb-2">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="GLOW10"
            className="flex-1 bg-transparent text-sm uppercase outline-none"
          />
          <button type="button" onClick={() => setApplied(true)} className="text-xs uppercase tracking-widest text-gold">
            Apply
          </button>
        </div>
        {applied && code.toUpperCase() === brand.offer.code && (
          <p className="mt-2 text-xs text-gold">10% applied</p>
        )}
        {applied && code.toUpperCase() !== brand.offer.code && <p className="mt-2 text-xs text-red-400">Invalid code</p>}
        <div className="mt-6 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-gold">
              <span>Discount</span>
              <span>-{formatPrice(discount)}</span>
            </div>
          )}
          <div className="flex justify-between font-display text-xl">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
