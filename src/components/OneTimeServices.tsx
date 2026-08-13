import { oneTimeServices } from "@/data/siteData";

export function OneTimeServices() {
  return (
    <section className="section-shell">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="section-title">
          NEED IT DONE ONCE?
          <br />
          NO PROBLEM.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {oneTimeServices.map((item) => (
            <article key={item.title} className="glass-card">
              <h3 className="text-xl font-bold text-hdm-text">{item.title}</h3>
              <p className="mt-2 text-lg font-semibold text-hdm-gold">{item.price}</p>
              <a href="#estimate" className="mt-5 inline-flex text-sm font-bold text-hdm-accent">
                GET AN ESTIMATE →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
