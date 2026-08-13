const placeholders = [
  "Customer testimonial coming soon.",
  "Customer testimonial coming soon.",
  "Customer testimonial coming soon.",
];

export function Testimonials() {
  return (
    <section className="section-shell">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="section-title">HOMEOWNER FEEDBACK</h2>
        <p className="section-copy">Placeholder reviews below should be replaced with verified customer testimonials.</p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {placeholders.map((copy, index) => (
            <article key={`${copy}-${index}`} className="glass-card">
              <p className="text-lg font-semibold leading-relaxed text-hdm-text">&quot;{copy}&quot;</p>
              <p className="mt-4 text-xs font-bold tracking-[0.12em] text-hdm-muted">PLACEHOLDER - REPLACE WITH REAL REVIEW</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
