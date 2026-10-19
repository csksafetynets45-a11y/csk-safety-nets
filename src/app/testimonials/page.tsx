import { Metadata } from "next";
import { generateBreadcrumbSchema, generateAggregateRatingSchema } from "@/utils/schema";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | CSK Safety Nets & Invisible Grills",
  description:
    "Read 150+ verified reviews for CSK Safety Nets & Invisible Grills across Chennai, including Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, and Tambaram. Rated 4.9/5 for safety netting and invisible grills.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Customer Reviews & Testimonials | CSK Safety Nets & Invisible Grills",
    description:
      "Read 150+ verified reviews for CSK Safety Nets & Invisible Grills across Chennai, including Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, and Tambaram.",
    url: "https://csksafetynets.in/testimonials",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "CSK Safety Nets & Invisible Grills Testimonials & Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews & Testimonials | CSK Safety Nets & Invisible Grills",
    description:
      "Read 150+ verified reviews for CSK Safety Nets & Invisible Grills across Chennai serving Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, and Tambaram.",
    images: ["/images/og-image.webp"],
  },
};

export default function TestimonialsPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Testimonials", item: "/testimonials" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAggregateRatingSchema()) }}
      />
      <TestimonialsClient />
    </>
  );
}
