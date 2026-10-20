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
    default: "CSK Safety Nets & Invisible Grills | Chennai, Tamil Nadu",
    template: "%s",
  },
  description:
    "CSK Safety Nets & Invisible Grills delivers premium balcony safety nets, child fall protection, SS316 invisible wire grills, and anti-pigeon solutions across Chennai — Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, Tambaram, Medavakkam & 120+ localities. Same-day inspection. Written warranty.",
  keywords: [
    "Safety Nets Chennai",
    "Invisible Grills Chennai",
    "Balcony Safety Nets Chennai",
    "Child Safety Nets Chennai",
    "Pigeon Safety Nets Chennai",
    "CSK Safety Nets",
    "Safety Nets OMR",
    "Safety Nets Velachery",
    "Safety Nets Anna Nagar",
    "Safety Nets Porur",
    "Safety Nets Tambaram",
    "Invisible Grills T Nagar",
    "Invisible Grills Adyar",
    "Window Invisible Grills Chennai",
    "Ceiling Cloth Hangers Chennai",
  ],
  metadataBase: new URL("https://csksafetynets.in"),
  verification: {
    google: "-53cDEjGSkBFlzQ5wBfqVF95SDKgWKSaMf49jBAa2rQ",
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
    title: "CSK Safety Nets & Invisible Grills | Chennai, Tamil Nadu",
    description:
      "Premium safety nets and marine-grade SS316 invisible grill installation across Chennai — Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, Tambaram & 120+ localities. Fast turnaround. Written warranty.",
    url: "https://csksafetynets.in",
    siteName: "CSK Safety Nets & Invisible Grills",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "CSK Safety Nets & Invisible Grills — Chennai, Tamil Nadu",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSK Safety Nets & Invisible Grills | Chennai",
    description:
      "Trusted safety nets and invisible grills across Chennai — fast installation, marine SS316 materials, written warranty. Call 7981910891.",
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
        {/* Google Search Console Verification Meta Tag */}
        <meta name="google-site-verification" content="-53cDEjGSkBFlzQ5wBfqVF95SDKgWKSaMf49jBAa2rQ" />
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

        {/* Google tag (gtag.js) - Google Ads: AW-18526075119 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18526075119"
        />
        <Script
          id="google-ads-gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18526075119');
            `,
          }}
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
