import { Metadata } from "next";
import Link from "next/link";
import { Home, MapPin, Phone, Mail, Clock } from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";
import MapFrame from "@/components/ui/map-frame";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | CSK Safety Nets & Invisible Grills",
  description:
    "Schedule a complimentary on-site measurement or speak directly with our safety engineering team in Chennai. Call +91 79819 10891 for instant assistance.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | CSK Safety Nets & Invisible Grills",
    description:
      "Schedule a complimentary on-site measurement or speak directly with our safety engineering team in Chennai. Call +91 79819 10891 for instant assistance.",
    url: "https://csksafetynets.in/contact",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Contact CSK Safety Nets & Invisible Grills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | CSK Safety Nets & Invisible Grills",
    description:
      "Contact CSK Safety Nets & Invisible Grills for free site measurement & instant quotes in Chennai serving Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, and Tambaram.",
    images: ["/images/og-image.webp"],
  },
};

export default function ContactPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Contact Us", item: "/contact" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#D4AF37] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Contact Us</span>
        </nav>

        {/* Hero Title */}
        <div className="text-left max-w-3xl mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#FDF8F5] px-3.5 py-1.5 rounded-full inline-block self-start">
            Client Support &amp; Bookings
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Connect with Our Technical Rigging Team
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Need advice on netting gauge, SS316 wire specifications, or space-saving drying racks? Request a free home measurement visit or reach our technical support desk.
          </p>
        </div>

        {/* NAP Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Business Details (Left) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col gap-6 text-left">
            <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
              Direct Contact Channels
            </h2>

            <div className="flex flex-col gap-5">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Service Coverage Area</span>
                  <span className="text-sm font-bold text-slate-700 mt-1">
                    Chennai, Tamil Nadu (Anna Nagar, T. Nagar, Velachery, OMR, Porur, Adyar, Tambaram, Medavakkam &amp; 120+ localities)
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Phone Support &amp; WhatsApp</span>
                  <a href="tel:+917981910891" className="text-sm font-bold text-slate-700 hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                    <span>+91 79819 10891</span>
                    <span className="text-[10px] bg-emerald-50 text-[#A61E22] px-2 py-0.5 rounded font-bold">Direct Line</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Electronic Mail</span>
                  <a href="mailto:csksafetynets45@gmail.com" className="text-sm font-bold text-slate-700 hover:text-[#D4AF37] transition-colors">
                    csksafetynets45@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Operational Timings</span>
                  <span className="text-xs font-bold text-slate-700">
                    Monday - Sunday: 08:00 AM - 08:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Frame (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider text-left">Service Territory Map</h3>
            <MapFrame areaName="Chennai, Tamil Nadu" className="h-[360px]" />
          </div>
        </div>

        {/* Lead Inquiry Form */}
        <ContactForm />
      </div>
    </div>
  );
}
