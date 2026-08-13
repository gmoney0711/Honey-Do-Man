import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./hdm-theme.css";

const displayFont = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Honey Do Man | Premium Home Services in the 409",
  description:
    "Honey Do Man (HDM) delivers lawn care, handyman help, pressure washing, cleanup, and recurring home maintenance across the 409 / Golden Triangle Texas area.",
  keywords: [
    "Honey Do Man",
    "HDM",
    "home maintenance 409",
    "handyman 409",
    "lawn care 409",
    "pressure washing 409",
    "property cleanup 409",
    "Golden Triangle home services",
  ],
  icons: {
    icon: "/assets/hdm-favicon.svg",
    shortcut: "/assets/hdm-favicon.svg",
    apple: "/assets/hdm-favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
