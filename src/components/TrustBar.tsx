import { trustItems } from "@/data/siteData";

export function TrustBar() {
  return (
    <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur md:grid-cols-4">
      {trustItems.map((item) => (
        <div key={item} className="text-center text-xs font-semibold tracking-[0.2em] text-hdm-muted">
          {item}
        </div>
      ))}
    </div>
  );
}
