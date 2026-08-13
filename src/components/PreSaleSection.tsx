const prepServices = [
  "Yard cleanup",
  "Pressure washing",
  "Trash removal",
  "Minor repairs",
  "Touch-up work",
  "Gutter cleaning",
  "Exterior cleanup",
  "Move-out cleanup",
];

const timeline = ["BEFORE", "CLEAN", "REPAIR", "REFRESH", "READY TO SHOW"];

export function PreSaleSection() {
  return (
    <section className="section-shell">
      <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-white/10 bg-hdm-card/80 p-6 md:p-10">
        <h2 className="section-title">SELLING YOUR HOUSE?</h2>
        <p className="section-copy max-w-3xl">
          Before the realtor comes through the door, make the property look its best.
        </p>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {timeline.map((step, index) => (
            <div key={step} className="flex items-center gap-4 md:flex-1">
              <span className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-black tracking-[0.08em] text-hdm-text">
                {step}
              </span>
              {index < timeline.length - 1 ? <span className="text-hdm-accent">↓</span> : null}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {prepServices.map((service) => (
            <div key={service} className="rounded-xl border border-white/10 bg-hdm-secondary/70 px-4 py-3 text-sm font-medium text-hdm-text">
              {service}
            </div>
          ))}
        </div>

        <a href="#estimate" className="cta-primary mt-8 inline-flex">
          GET MY PRE-SALE ESTIMATE →
        </a>
      </div>
    </section>
  );
}
