import { NextResponse } from "next/server";
import Stripe from "stripe";

const PLAN_PRICE_ENV: Record<string, string> = {
  care: "STRIPE_PRICE_CARE",
  home: "STRIPE_PRICE_HOME",
  total: "STRIPE_PRICE_TOTAL",
};

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

    const priceId = process.env[PLAN_PRICE_ENV[plan]];
    if (!priceId) {
      return NextResponse.json({ error: `Missing Stripe price for plan: ${plan}` }, { status: 500 });
    }

    const stripe = new Stripe(secretKey);
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
