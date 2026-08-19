import { CheckoutButton } from "@/components/CheckoutButton";
import { plans } from "@/data/siteData";

export function MembershipPricing() {
  return (
    <section id="memberships" className="section-shell">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="section-title">
          PUT YOUR HOME
          <br />
          ON AUTOPILOT.
        </h2>
        <p className="section-copy max-w-3xl">
          Recurring maintenance for homeowners who want the work handled before it becomes a problem.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-6 shadow-xl backdrop-blur ${
                plan.featured
                  ? "border-hdm-accent/70 bg-gradient-to-b from-hdm-accent/20 to-hdm-card ring-1 ring-hdm-accent/60"
                  : "border-white/15 bg-hdm-card/85"
              }`}
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <h3 className="text-2xl font-black text-hdm-text">{plan.name}</h3>
                {plan.featured ? (
                  <span className="rounded-full border border-hdm-gold/80 bg-hdm-gold/15 px-3 py-1 text-xs font-black tracking-[0.08em] text-hdm-gold">
                    MOST POPULAR
                  </span>
                ) : null}
              </div>

              <p className="mb-6 flex items-end gap-2">
                <span className="text-5xl font-black text-hdm-text">{plan.price}</span>
                <span className="pb-1 text-sm font-semibold text-hdm-muted">{plan.period}</span>
              </p>

              <ul className="mb-7 space-y-2 text-sm text-hdm-muted">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-hdm-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <CheckoutButton href={plan.href} plan={plan.plan} label={plan.cta} className="cta-primary w-full text-center" />
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-5xl text-xs leading-relaxed text-hdm-muted">
          Recurring plans cover the services and service limits defined in your membership agreement. Larger
          repairs, materials, specialty work and projects outside the plan are quoted separately.
        </p>
      </div>
    </section>
  );
}
