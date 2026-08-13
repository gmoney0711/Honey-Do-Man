"use client";

import { useState } from "react";

type CheckoutButtonProps = {
  href: string;
  label: string;
  className?: string;
};

export function CheckoutButton({ href, label, className }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        setLoading(true);
        window.setTimeout(() => {
          window.location.href = href;
        }, 450);
      }}
      disabled={loading}
      className={className}
      aria-live="polite"
    >
      {loading ? "Redirecting..." : label}
    </button>
  );
}
