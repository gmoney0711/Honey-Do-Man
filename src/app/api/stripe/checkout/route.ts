import { NextResponse } from "next/server";
import Stripe from "stripe";

const PLAN_PRICE_ENV: Record<string, string> = {
  care: "STRIPE_PRICE_CARE",
  home: "STRIPE_PRICE_HOME",
  total: "STRIPE_PRICE_TOTAL",
};

async function resolvePriceId(stripe: Stripe, value: string): Promise<string> {
  if (value.startsWith("price_")) {
    return value;
  }

  if (!value.startsWith("prod_")) {
    throw new Error("Configured Stripe plan value must start with price_ or prod_.");
  }

  // Prefer an active monthly recurring price for the configured product.
  const prices = await stripe.prices.list({
    product: value,
    active: true,
    type: "recurring",
    limit: 100,
  });

  const monthly = prices.data.find(
    (p) => p.recurring?.interval === "month" && p.recurring.interval_count === 1,
  );

  if (!monthly?.id) {
    throw new Error(`No active monthly recurring price found for product ${value}.`);
  }

  return monthly.id;
}

function getBaseUrl(): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl) return siteUrl;

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`;

  return "http://localhost:3000";
}

export async function POST(request: Request) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json({ error: "Stripe is not configured." }, { status: 500 });
    }

    const { plan } = (await request.json()) as { plan?: string };
    if (!plan || !(plan in PLAN_PRICE_ENV)) {
      return NextResponse.json({ error: "Invalid plan." }, { status: 400 });
    }

    const configuredValue = process.env[PLAN_PRICE_ENV[plan]];
    if (!configuredValue) {
      return NextResponse.json({ error: `Missing Stripe price for plan: ${plan}` }, { status: 500 });
    }

    const stripe = new Stripe(secretKey);
    const priceId = await resolvePriceId(stripe, configuredValue);
    const baseUrl = getBaseUrl();

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${baseUrl}/index.html?checkout=success`,
      cancel_url: `${baseUrl}/index.html?checkout=cancel`,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      metadata: { plan },
    });

    if (!session.url) {
      return NextResponse.json({ error: "Failed to create Stripe session." }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected Stripe error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
