const steps = [
  {
    id: "01",
    title: "TELL US WHAT YOU NEED",
    copy: "Fill out the quick estimate form.",
  },
  {
    id: "02",
    title: "WE BUILD THE PLAN",
    copy: "We'll contact you and figure out exactly what the property needs.",
  },
  {
    id: "03",
    title: "WE HANDLE IT",
    copy: "Schedule the work and let HDM take care of the rest.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-shell">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="section-title">HOW IT WORKS</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.id} className="glass-card">
              <p className="text-4xl font-black text-hdm-accent">{step.id}</p>
              <h3 className="mt-3 text-2xl font-black text-hdm-text">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-hdm-muted">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
