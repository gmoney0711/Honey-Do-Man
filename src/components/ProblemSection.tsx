import { problemCards } from "@/data/siteData";

export function ProblemSection() {
  return (
    <section className="section-shell">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="section-title max-w-4xl">
          YOUR HOUSE DOESN&apos;T NEED
          <br />
          ANOTHER TO-DO LIST.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {problemCards.map((card, index) => (
            <article key={card} className="glass-card float-card" style={{ animationDelay: `${index * 90}ms` }}>
              <p className="text-lg font-semibold leading-snug text-hdm-text">{card}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-3xl font-black uppercase tracking-wide text-hdm-accent md:text-4xl">
          ONE CALL. ONE TEAM. LESS STRESS.
        </p>
      </div>
    </section>
  );
}
