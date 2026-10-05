import Link from "next/link";
import { brand } from "@/lib/data";

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-lg px-5 py-24 text-center">
      <p className="text-[10px] uppercase tracking-[0.45em] text-gold">Confirmed</p>
      <h1 className="mt-6 font-display text-5xl">Your piece is in the queue</h1>
      <p className="mt-4 text-sm text-ash">{brand.checkoutNote}</p>
      <Link href="/shop" className="mt-10 inline-block border-b border-gold pb-1 text-xs uppercase tracking-[0.4em] text-gold">
        Return to collection
      </Link>
    </div>
  );
}
