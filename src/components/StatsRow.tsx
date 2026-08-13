"use client";

import { useEffect, useState } from "react";

function CountUp({ end }: { end: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const frames = 30;
    const timer = window.setInterval(() => {
      frame += 1;
      setValue(Math.round((end * frame) / frames));
      if (frame >= frames) {
        window.clearInterval(timer);
      }
    }, 26);

    return () => window.clearInterval(timer);
  }, [end]);

  return <span>{value}</span>;
}

const stats = [
  { label: "Services", value: 10 },
  { label: "Membership Plans", value: 3 },
  { label: "Core 409 Cities", value: 14 },
];

export function StatsRow() {
  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center">
          <p className="text-2xl font-black text-hdm-text">
            <CountUp end={stat.value} />+
          </p>
          <p className="text-xs font-semibold tracking-[0.14em] text-hdm-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
