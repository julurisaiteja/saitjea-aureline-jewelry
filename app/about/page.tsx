import { brand } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="font-display text-6xl text-center" id="house">
        The house
      </h1>
      <div className="hairline mx-auto mt-6 max-w-xs" />
      <p className="mt-10 text-center text-sm leading-relaxed text-ash">{brand.description}</p>
      <section className="mt-16">
        <h2 className="font-display text-3xl">Craft journal</h2>
        <ul className="mt-6 space-y-4">
          {brand.blog.map(([title, tag]) => (
            <li key={title} className="flex justify-between border-b border-gold/10 pb-3 text-sm">
              <span className="text-ivory">{title}</span>
              <span className="text-ash">{tag}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-16">
        <h2 className="font-display text-3xl">Numbers</h2>
        <dl className="mt-6 grid grid-cols-2 gap-6 text-center">
          {brand.stats.map(([a, b]) => (
            <div key={b}>
              <dt className="font-display text-3xl text-gold">{a}</dt>
              <dd className="text-xs uppercase tracking-widest text-ash">{b}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
