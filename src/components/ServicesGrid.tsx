import { serviceItems } from "@/data/siteData";

function IconBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-hdm-accent/40 bg-hdm-accent/10 text-base font-black text-hdm-accent">
      {label.slice(0, 1)}
    </span>
  );
}

export function ServicesGrid() {
  return (
    <section id="services" className="section-shell">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="section-title">SERVICES BUILT FOR REAL-WORLD HOMEOWNERSHIP.</h2>
        <p className="section-copy max-w-3xl">
          One local team for the maintenance, cleanup, and prep work that keeps your property moving in the
          right direction.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((service) => (
            <article key={service.title} className="service-card">
              <div className="mb-5 flex items-center justify-between">
                <IconBadge label={service.icon} />
                <span className="text-xs font-bold tracking-[0.2em] text-hdm-muted">HDM</span>
              </div>
              <h3 className="text-xl font-bold text-hdm-text">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-hdm-muted">{service.description}</p>
              <a href="#estimate" className="mt-5 inline-flex text-sm font-bold text-hdm-accent">
                Learn More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
