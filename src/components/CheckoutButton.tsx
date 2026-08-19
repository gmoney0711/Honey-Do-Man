"use client";

import { useState } from "react";
import type { CheckoutPlan } from "@/lib/checkout";

type CheckoutButtonProps = {
  href: string;
  label: string;
  className?: string;
  plan?: CheckoutPlan;
};

export function CheckoutButton({ href, label, className, plan }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);

    if (!plan) {
      window.setTimeout(() => {
        window.location.href = href;
      }, 450);
      return;
    }

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });

      const data = (await response.json()) as { error?: string; url?: string };
      if (!response.ok || !data.url) {
        throw new Error(data.error || "Unable to start Stripe checkout.");
      }

      window.location.href = data.url;
    } catch (cause) {
      const message = cause instanceof Error ? cause.message : "Unable to start Stripe checkout.";
      setError(message);
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={className}
        aria-live="polite"
      >
        {loading ? "Redirecting..." : label}
      </button>
      {error ? <p className="text-sm text-red-300">{error}</p> : null}
    </div>
  );
}
