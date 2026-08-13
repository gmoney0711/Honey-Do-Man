import Link from "next/link";

export default function TotalCheckoutPage() {
  return (
    <main className="min-h-screen bg-hdm-bg px-4 py-20 text-hdm-text">
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-hdm-card p-8">
        <p className="text-xs font-bold tracking-[0.2em] text-hdm-muted">CHECKOUT PLACEHOLDER</p>
        <h1 className="mt-3 text-4xl font-black">HDM TOTAL PLAN</h1>
        <p className="mt-4 text-hdm-muted">
          Stripe Checkout will be connected here later. No payment information is collected on this placeholder page.
        </p>
        <Link href="/" className="cta-primary mt-8 inline-flex">
          BACK TO HOME
        </Link>
      </div>
    </main>
  );
}
