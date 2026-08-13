export const checkoutRoutes = {
  care: "/checkout/care",
  home: "/checkout/home",
  total: "/checkout/total",
} as const;

export type CheckoutPlan = keyof typeof checkoutRoutes;

export function getCheckoutPath(plan: CheckoutPlan): string {
  return checkoutRoutes[plan];
}
