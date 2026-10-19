import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import BlogFilterClient from "./BlogFilterClient";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { fetchContent } from "@/sanity/client";

export const metadata: Metadata = {
  title: "Safety & Childproofing Blog | CSK Safety Nets & Invisible Grills",
  description:
    "Expert guides on safety nets, invisible grills, and bird exclusion across Chennai: Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, and Tambaram.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Safety & Childproofing Blog | CSK Safety Nets & Invisible Grills",
    description:
      "Expert guides on safety nets, invisible grills, and bird exclusion across Chennai: Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, and Tambaram.",
    url: "https://csksafetynets.in/blog",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "CSK Safety Nets & Invisible Grills Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety & Childproofing Blog | CSK Safety Nets & Invisible Grills",
    description:
      "Expert guides on safety nets, invisible grills, and bird exclusion across Chennai serving Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, and Tambaram.",
    images: ["/images/og-image.webp"],
  },
};

export default async function BlogPage() {
  // Fetch all articles dynamically (supports Sanity live API and fallback registry)
  const posts = await fetchContent("blogs");

  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Safety and Home Childproofing Blog | CSK Safety Nets & Invisible Grills",
    "url": "https://csksafetynets.in/blog",
    "description": "Resources on balcony netting, invisible grills, and safety advice across Chennai.",
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#D4AF37] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Blog</span>
        </nav>

        {/* Title Header */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#FDF8F5] px-3.5 py-1.5 rounded-full inline-block self-start">
            Safety Resources
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Safety Guides & Home Tips
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Read guides on apartment toddler protection, bird netting setups, invisible grill rust-proofing, and utility laundry organization.
          </p>
        </div>

        {/* Dynamic client filter page */}
        <BlogFilterClient initialPosts={posts || []} />
      </div>
    </div>
  );
}
