import Image from "next/image";

export function EstateSection() {
  return (
    <section className="section-shell">
      <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-hdm-secondary/70 p-6 md:p-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="section-title text-left">
            INHERITED A HOUSE?
            <br />
            YOU DON&apos;T HAVE TO FIGURE IT OUT ALONE.
          </h2>
          <p className="section-copy mt-4 max-w-xl text-left">
            Whether you&apos;re handling a parent&apos;s home, an estate, a property from out of town, or a house
            that&apos;s been sitting untouched, HDM can help get the property cleaned up, maintained and ready
            for whatever comes next.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#estimate" className="cta-primary">
              GET PROPERTY HELP →
            </a>
            <a href="#estimate" className="cta-secondary">
              REQUEST AN ESTIMATE →
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-hdm-card to-black p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(200,255,50,.18),transparent_45%)]" />
          <div className="relative grid min-h-[360px] place-items-center">
            <Image
              src="/assets/hdm-mascot.png"
              alt="Honey Do Man mascot helping with estate property support"
              width={1132}
              height={1390}
              className="h-auto w-[72%] max-w-xs drop-shadow-[0_30px_35px_rgba(0,0,0,.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
