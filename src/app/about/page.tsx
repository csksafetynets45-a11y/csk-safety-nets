import { Metadata } from "next";
import Link from "next/link";
import { Home, ShieldCheck, HardHat, Sparkles, CheckCircle2, Building2 } from "lucide-react";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/utils/schema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "About CSK Safety Nets & Invisible Grills — Family Safety Specialists Chennai",
  description:
    "CSK Safety Nets & Invisible Grills is a Chennai-based specialist in premium balcony safety nets, child fall protection, pet safety, and SS316 invisible wire grills. Craftsmanship-first approach, written warranty, same-week installation.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About CSK Safety Nets & Invisible Grills — Family Safety Specialists Chennai",
    description:
      "Built on a commitment to family safety and genuine craftsmanship — CSK Safety Nets delivers premium materials, fast turnaround, and written warranties across Chennai.",
    url: "https://csksafetynets.in/about",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "About CSK Safety Nets & Invisible Grills — Chennai, Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CSK Safety Nets & Invisible Grills — Chennai",
    description:
      "Premium safety nets and invisible grills in Chennai — family-first focus, craftsmanship-grade materials, same-week installation. Call 7981910891.",
    images: ["/images/og-image.webp"],
  },
};

export default function AboutPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      {/* Inject Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#A61E22] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">About Us</span>
        </nav>

        {/* Hero Section */}
        <div className="text-left max-w-3xl mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#A61E22] bg-[#FBF8F8] px-3.5 py-1.5 rounded-full inline-block self-start border border-[#EDD5D5]">
            Our Craft & Commitment
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Safety That Holds. Quality You Can Feel.
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            CSK Safety Nets &amp; Invisible Grills is a Chennai-based family safety specialist. We built our reputation on one principle: every installation must be something a technician is personally proud to hand over. That means premium-grade materials, thorough workmanship, and a written warranty — not vague verbal promises.
          </p>
        </div>

        {/* Split Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Story & Mission (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs flex flex-col gap-5">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#A61E22] shrink-0" />
                <span>Why We Do What We Do</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Chennai&apos;s apartment culture has accelerated dramatically — wide open balconies, generous French windows, and multi-floor stairwells are now the norm across Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, Tambaram, and dozens of other localities. These are beautiful features. They are also genuine risks for toddlers and pets who don&apos;t understand height.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We started CSK Safety Nets specifically because we saw families settle for flimsy, poorly anchored nets just to cut costs — nets that sag within months, corrode in the first monsoon, or simply weren&apos;t tensioned correctly from day one. We decided there was a better way: use only 100% virgin HDPE mesh and genuine SS316 marine-grade stainless cables, anchor every point with diamond-core drilled stainless expansion bolts, tension-verify before handover, and back it all with a written replacement warranty. That&apos;s the CSK standard.
              </p>
            </div>

            {/* Core Values — different 3-column structure from CSK */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#FBF8F8] rounded-xl text-[#A61E22] self-start border border-[#EDD5D5]/40">
                  <HardHat className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Premium Materials Only</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  We stock and install exclusively 100% virgin HDPE copolymer netting and genuine SS316 marine stainless cables — no recycled or reprocessed substitutes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#FBF8F8] rounded-xl text-[#A61E22] self-start border border-[#EDD5D5]/40">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Fast, Reliable Turnaround</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  We book site visits within 24 hours and complete most residential installations within the same week — no weeks-long waits, no broken promises.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#FBF8F8] rounded-xl text-[#A61E22] self-start border border-[#EDD5D5]/40">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Written Warranty Always</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Every installation comes with a signed warranty card — 3-year for cloth hangers, 5-year for safety nets, 10-year for SS316 invisible grills. No fine print exclusions.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Panel (Right) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#A61E22] to-[#7A1518] text-white rounded-3xl p-6 sm:p-8 border border-[#C0272D] flex flex-col gap-6 shadow-xl">
            <h3 className="text-base font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Our Track Record</span>
            </h3>

            <div className="flex flex-col gap-5 text-left">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-red-200">Installations Completed</span>
                <span className="text-xs font-bold text-[#D4AF37] uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-md self-start">
                  2,400+ Verified Projects
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-red-200">Warranty Coverage</span>
                <span className="text-xs font-bold text-[#D4AF37] uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-md self-start">
                  Written 3 – 10 Year Guarantee
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-red-200">Response Time</span>
                <span className="text-xs font-bold text-[#D4AF37] uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-md self-start">
                  Site Visit Within 24 Hours
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-red-200">Material Grade</span>
                <span className="text-xs font-bold text-[#D4AF37] uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-md self-start">
                  SS316 Marine · Virgin HDPE
                </span>
              </div>
            </div>

            <p className="text-red-100 text-[11px] leading-relaxed pt-2 border-t border-white/10">
              Every CSK installation is tension-verified before handover and backed by a signed warranty card — not a verbal promise. Family safety is too important for shortcuts.
            </p>
          </div>
        </div>

        {/* Lead Inquiry Form */}
        <ContactForm />
      </div>
    </div>
  );
}
