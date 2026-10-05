import Link from "next/link";
import Image from "next/image";
import { products, formatPrice } from "@/lib/data";

const spans = [
  "col-span-3 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-2",
  "col-span-2 row-span-1",
  "col-span-2 row-span-1",
  "col-span-3 row-span-1",
  "col-span-1 row-span-1",
];

export function LookbookMasonry({ limit }: { limit?: number }) {
  const slice = limit ? products.slice(0, limit) : products;
  return (
    <div className="masonry-lookbook">
      {slice.map((p, i) => (
        <Link
          key={p.id}
          href={`/product/${p.id}`}
          className={`group relative overflow-hidden bg-panel ${spans[i % spans.length]}`}
        >
          <div className="relative min-h-[180px] h-full w-full">
            <Image
              src={p.image}
              alt={p.name}
              fill
              className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
              sizes="400px"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4">
            <p className="font-display text-xl text-ivory">{p.name}</p>
            <p className="text-xs text-gold">{formatPrice(p.price)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
