import Image from "next/image";

export function FinalCTA() {
  return (
    <section className="section-shell">
      <div className="mx-auto grid w-full max-w-7xl gap-6 rounded-[2rem] border border-hdm-accent/40 bg-gradient-to-r from-hdm-secondary to-hdm-bg p-6 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h2 className="section-title text-left">
            STOP ADDING IT
            <br />
            TO THE LIST.
          </h2>
          <p className="section-copy mt-4 text-left">Tell HDM what needs to get done.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#estimate" className="cta-primary">
              GET MY FREE ESTIMATE
            </a>
            <a href="tel:+1-346-360-7235" className="cta-secondary">
              CALL HDM
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-[260px]">
          <Image
            src="/assets/hdm-mascot.png"
            alt="Honey Do Man mascot"
            width={1132}
            height={1390}
            className="h-auto w-full drop-shadow-[0_24px_35px_rgba(0,0,0,.55)]"
          />
        </div>
      </div>
    </section>
  );
}
