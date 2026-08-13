import { faqs } from "@/data/siteData";

export function FAQ() {
  return (
    <section id="faq" className="section-shell">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((question) => (
            <details key={question} className="group rounded-2xl border border-white/10 bg-hdm-card/70 p-5">
              <summary className="cursor-pointer list-none text-base font-bold text-hdm-text md:text-lg">{question}</summary>
              <p className="mt-3 text-sm leading-relaxed text-hdm-muted">
                We&apos;ll provide specifics during your estimate. HDM will explain scope, schedule, and pricing in
                plain language before work begins.
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
