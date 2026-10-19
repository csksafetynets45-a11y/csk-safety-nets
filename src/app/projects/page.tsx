import { Metadata } from "next";
import Link from "next/link";
import ProjectsFilterClient from "./ProjectsFilterClient";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Completed Projects | CSK Safety Nets & Invisible Grills",
  description:
    "View completed safety net and invisible grill installation projects by CSK Safety Nets & Invisible Grills across Chennai: Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, and Tambaram.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Completed Projects | CSK Safety Nets & Invisible Grills",
    description:
      "View completed safety net and invisible grill installation projects by CSK Safety Nets & Invisible Grills across Chennai: Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, and Tambaram.",
    url: "https://csksafetynets.in/projects",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "CSK Safety Nets & Invisible Grills Installation Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Completed Projects | CSK Safety Nets & Invisible Grills",
    description:
      "View completed safety net and invisible grill installation projects by CSK Safety Nets & Invisible Grills across Chennai serving Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, and Tambaram.",
    images: ["/images/og-image.webp"],
  },
};

export default function ProjectsPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Projects", item: "/projects" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#D4AF37] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Projects</span>
        </nav>

        {/* Title Header */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#FDF8F5] px-3.5 py-1.5 rounded-full inline-block self-start">
            Visual Proof
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Our Installation Portfolio
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Review case profiles of completed safety netting systems and invisible grills installed by CSK Safety Nets & Invisible Grills in residential blocks and factories across Chennai.
          </p>
        </div>

        {/* Client filter and search panel */}
        <ProjectsFilterClient />
      </div>
    </div>
  );
}
