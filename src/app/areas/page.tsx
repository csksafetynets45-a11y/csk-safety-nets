import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schema";
import AreasClient from "./AreasClient";

export const metadata: Metadata = {
  title: "Safety Nets & Invisible Grills Service Areas Across Chennai | CSK",
  description:
    "Explore 120+ Chennai service areas covered by CSK Safety Nets & Invisible Grills. Free doorstep inspection, certified installation, and same-day service across Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, Tambaram, and all zones.",
  alternates: {
    canonical: "/areas",
  },
  openGraph: {
    title: "Safety Nets & Invisible Grills Service Areas Across Chennai | CSK",
    description:
      "Explore 120+ Chennai service areas covered by CSK Safety Nets & Invisible Grills. Free doorstep inspection across all Chennai localities.",
    url: "https://csksafetynets.in/areas",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "CSK Safety Nets & Invisible Grills Chennai Service Areas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety Nets & Invisible Grills Service Areas Across Chennai | CSK",
    description:
      "Explore 120+ Chennai service areas covered by CSK Safety Nets & Invisible Grills. Free doorstep inspection across all Chennai localities.",
    images: ["/images/og-image.webp"],
  },
};

export default function AreasPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Service Areas", item: "/areas" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)),
        }}
      />
      <AreasClient />
    </>
  );
}
