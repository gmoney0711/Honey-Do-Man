import Link from "next/link";

import { CheckoutButton } from "@/components/CheckoutButton";

export default function TotalCheckoutPage() {
  return (
    <main className="min-h-screen bg-hdm-bg px-4 py-20 text-hdm-text">
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-hdm-card p-8">
        <p className="text-xs font-bold tracking-[0.2em] text-hdm-muted">STRIPE CHECKOUT</p>
        <h1 className="mt-3 text-4xl font-black">HDM TOTAL PLAN</h1>
        <p className="mt-4 text-hdm-muted">
          Start your HDM TOTAL membership here. This page sends customers into secure Stripe checkout for the $299 per month plan.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-hdm-muted">
          <li>Everything in HDM CARE and HDM HOME</li>
          <li>Complete HDM Home Health Check</li>
          <li>Seasonal maintenance and follow-up</li>
          <li>Up to 60 minutes of approved Honey-Do time</li>
        </ul>
        <div className="mt-8 space-y-3">
          <CheckoutButton href="/" plan="total" label="PAY $299 / MONTH" className="cta-primary w-full justify-center text-center" />
          <Link href="/" className="cta-secondary inline-flex w-full justify-center">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
