import { brand } from "@/lib/data";

export function NoteStackReviews() {
  return (
    <section className="relative mx-auto max-w-2xl px-5 py-20">
      <div className="hairline mb-10" />
      <p className="text-center text-[10px] uppercase tracking-[0.45em] text-ash">Letters from clients</p>
      <div className="mt-10 space-y-6">
        {brand.reviews.map(([name, , quote], i) => (
          <figure
            key={name}
            className="relative border border-gold/15 bg-panel/80 p-6"
            style={{ transform: `rotate(${i === 0 ? -1.5 : i === 1 ? 0.8 : -0.4}deg)`, marginLeft: i * 12 }}
          >
            <p className="font-display text-2xl leading-snug text-ivory">&ldquo;{quote}&rdquo;</p>
            <figcaption className="mt-4 font-body text-xs uppercase tracking-[0.3em] text-gold">{name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
