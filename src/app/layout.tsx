import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import CookieConsent from "@/components/ui/CookieConsent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

import { generateLocalBusinessSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: {
    default: "CSK Safety Nets & Invisible Grills | Bangalore, Karnataka",
    template: "%s",
  },
  description:
    "CSK Safety Nets & Invisible Grills delivers premium balcony safety nets, child fall protection, invisible wire grills, and anti-pigeon solutions across Bangalore — Sarjapur Road, Bellandur, Hennur, Rajajinagar, Malleshwaram, Basavanagudi, Koramangala & more. Same-week installation. Written warranty.",
  keywords: [
    "Safety Nets Bangalore",
    "Invisible Grills Bangalore",
    "Balcony Safety Nets Bangalore",
    "Child Safety Nets Bangalore",
    "Pigeon Safety Nets Bangalore",
    "CSK Safety Nets",
    "Safety Nets Sarjapur Road",
    "Safety Nets Bellandur",
    "Safety Nets Hennur",
    "Safety Nets Rajajinagar",
    "Safety Nets Malleshwaram",
    "Invisible Grills Koramangala",
    "Invisible Grills Basavanagudi",
    "Window Invisible Grills Bangalore",
    "Ceiling Cloth Hangers Bangalore",
  ],
  metadataBase: new URL("https://csksafetynets.in"),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "PENDING_GSC_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "CSK Safety Nets & Invisible Grills | Bangalore, Karnataka",
    description:
      "Premium safety nets and invisible grill installation across Bangalore — Sarjapur Road, Bellandur, Hennur, Malleshwaram, Rajajinagar, Basavanagudi & 90+ localities. Fast turnaround. Written warranty.",
    url: "https://csksafetynets.in",
    siteName: "CSK Safety Nets & Invisible Grills",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "CSK Safety Nets & Invisible Grills — Bangalore, Karnataka",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSK Safety Nets & Invisible Grills | Bangalore",
    description:
      "Trusted safety nets and invisible grills across Bangalore — fast installation, premium materials, written warranty. Call 7981910891.",
    images: ["/images/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon fallback tags for all browsers & search engines */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* LCP Hero Image Preload for fastest FCP/LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/main-images/Balcony-Grills.webp"
          fetchPriority="high"
          type="image/webp"
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-white text-slate-900 flex flex-col min-h-screen selection:bg-[#A61E22] selection:text-white`}
      >
        {/* Skip to Main Content Accessibility Landmark (WCAG 2.1 AA) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#A61E22] focus:text-white focus:rounded-xl focus:shadow-2xl font-bold transition-all"
        >
          Skip to main content
        </a>

        {/* LocalBusiness JSON-LD Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <Navbar />
        <main id="main-content" className="flex-grow pt-[84px] sm:pt-[92px]">{children}</main>
        <Footer />
        <FloatingCTA />
        <CookieConsent />
      </body>
    </html>
  );
}
