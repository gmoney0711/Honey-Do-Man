import { areaCities } from "@/data/siteData";

export function ServiceArea() {
  return (
    <section id="service-area" className="section-shell">
      <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-white/10 bg-hdm-secondary/70 p-6 md:p-10">
        <h2 className="section-title">PROUDLY SERVING THE 409.</h2>
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-hdm-card p-5">
          <div className="area-map absolute inset-0 opacity-50" />
          <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areaCities.map((city) => (
              <div key={city} className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-semibold text-hdm-text">
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
