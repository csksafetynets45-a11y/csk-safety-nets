import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schema";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies | CSK Safety Nets & Invisible Grills",
  description:
    "Explore case studies & real installation projects by CSK Safety Nets & Invisible Grills across Chennai, including Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, and Tambaram.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | CSK Safety Nets & Invisible Grills",
    description:
      "Explore case studies & real installation projects by CSK Safety Nets & Invisible Grills across Chennai, including Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, and Tambaram.",
    url: "https://csksafetynets.in/case-studies",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "CSK Safety Nets & Invisible Grills Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | CSK Safety Nets & Invisible Grills",
    description:
      "Explore case studies & real installation projects by CSK Safety Nets & Invisible Grills across Chennai serving Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, and Tambaram.",
    images: ["/images/og-image.webp"],
  },
};

export default function CaseStudiesPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Case Studies", item: "/case-studies" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <CaseStudiesClient />
    </>
  );
}
