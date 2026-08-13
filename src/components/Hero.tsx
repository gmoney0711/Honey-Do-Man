import Image from "next/image";
import { TrustBar } from "@/components/TrustBar";
import { StatsRow } from "@/components/StatsRow";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-14 md:px-8 md:pt-20">
      <div className="hero-gradient absolute inset-0 -z-10" />
      <div className="noise absolute inset-0 -z-10 opacity-30" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-7">
          <p className="text-xs font-bold tracking-[0.28em] text-hdm-muted">SERVING THE 409</p>
          <h1 className="text-5xl font-black uppercase leading-[0.95] text-hdm-text sm:text-6xl md:text-7xl xl:text-8xl">
            YOUR
            <br />
            HONEY-DO LIST
            <br />
            JUST MET ITS <span className="text-hdm-accent">MATCH.</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-hdm-muted md:text-lg">
            Lawn care. Pressure washing. Property cleanup. Handyman work. Home maintenance. One local
            team that handles the jobs you don&apos;t have time for.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#estimate" className="cta-primary">
              GET MY FREE ESTIMATE →
            </a>
            <a href="#memberships" className="cta-secondary">
              VIEW MEMBERSHIPS
            </a>
          </div>

          <TrustBar />
          <StatsRow />
        </div>

        <div className="relative">
          <div className="mascot-spotlight absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full" />
          <div className="mascot-frame float-card relative mx-auto max-w-md rounded-[2rem] border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-4 shadow-2xl backdrop-blur">
            <div className="particle particle-1" />
            <div className="particle particle-2" />
            <div className="particle particle-3" />
            <Image
              src="/assets/hdm-mascot.png"
              alt="Honey Do Man mascot"
              width={1132}
              height={1390}
              priority
              className="h-auto w-full mascot-parallax drop-shadow-[0_35px_40px_rgba(0,0,0,.55)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
