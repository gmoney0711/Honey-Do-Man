import { whyCards } from "@/data/siteData";

export function WhyHDM() {
  return (
    <section className="section-shell">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="section-title">WHY HDM?</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {whyCards.map((card) => (
            <article key={card.title} className="glass-card">
              <h3 className="text-xl font-black text-hdm-accent">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-hdm-muted">{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
