"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  Award,
} from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

interface CaseStudy {
  id: number;
  title: string;
  location: string;
  serviceCategory: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  quote?: string;
  clientName?: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: "Securing Multi-Story Balcony Railings at Skyview Residency",
    location: "OMR, Chennai, Tamil Nadu",
    serviceCategory: "Balcony Safety Nets",
    image: "/images/main-images/balcony-safetynets.webp",
    challenge:
      "A young family with toddlers moving into a 14th-floor corner apartment faced severe anxiety over modern horizontal open railings with wide 6-inch gap spacing.",
    solution:
      "CSK Safety Nets & Invisible Grills conducted an on-site structural assessment and anchored double-knotted, UV-stabilized copolymer safety netting using heavy SS304 eyebolts every 15cm into the structural concrete slab.",
    result:
      "Completed in 2.5 hours with zero facade obstruction. The net has withstood gusty high-rise monsoon winds in Chennai while providing reliable fall safety.",
    quote:
      "CSK Safety Nets & Invisible Grills gave our family complete freedom on our balcony. The installation is remarkably neat and strong.",
    clientName: "Srinivas & Priya V., OMR",
  },
  {
    id: 2,
    title: "Panoramic Skyline Invisible Grills at High-Rise Penthouse",
    location: "Anna Nagar, Chennai, Tamil Nadu",
    serviceCategory: "Balcony Invisible Grills",
    image: "/images/main-images/Balcony-Grills.jpg",
    challenge:
      "A penthouse resident needed robust fall protection for grandchildren and a golden retriever without obstructing a breathtaking 180-degree skyline view or degrading under intense seasonal monsoons.",
    solution:
      "Installed marine-grade SS316 multi-strand stainless steel cable invisible grills spaced at 2-inch intervals, fitted inside heavy-duty anodized aluminium structural channels.",
    result:
      "The cables maintain high tensile tension per line while remaining virtually invisible from inside the living room, completely immune to outdoor rust and weathering.",
    quote:
      "The invisible grills look extraordinarily sleek. Our skyline view remains pristine and the kids play safely.",
    clientName: "Cdr. (Retd.) Rajesh Nair, Anna Nagar",
  },
  {
    id: 3,
    title: "Large-Scale Bird Proofing Across 12 Residential Duct Shafts",
    location: "Adyar, Chennai, Tamil Nadu",
    serviceCategory: "Duct Area Safety Nets",
    image: "/images/main-images/duct-area-real.webp",
    challenge:
      "A 240-unit gated residential society suffered from severe pigeon nesting across 12 vertical plumbing shafts, creating health hazards and foul odor in utility balconies.",
    solution:
      "CSK Safety Nets & Invisible Grills deployed certified rope-access technicians to install heavy-gauge, translucent HDPE anti-bird netting from the rooftop parapet down to ground level.",
    result:
      "Completely excluded bird roosting across all 12 building shafts without disrupting bathroom ventilation or plumbing maintenance access.",
    quote:
      "CSK Safety Nets & Invisible Grills executed a complex 12-shaft installation with exceptional speed and discipline. Outstanding job!",
    clientName: "Society Management Committee, Adyar",
  },
  {
    id: 4,
    title: "Compact Balcony Space Optimization with Ceiling Drying System",
    location: "Tambaram, Chennai, Tamil Nadu",
    serviceCategory: "Ceiling Cloth Hangers",
    image: "/images/main-images/ceiling-cloth-hangers-1.jpg",
    challenge:
      "A 2-BHK apartment balcony was cluttered with cumbersome folding metal clothes stands that blocked natural light and restricted access to the washing machine.",
    solution:
      "Fitted a custom 6-pipe independent pulley ceiling cloth drying hoist made from 100% rustproof SS304 stainless steel tubing rated for 30kg of wet laundry.",
    result:
      "Reclaimed 100% of the balcony floor area. The smooth pulley mechanism allows each rod to be lowered and hoisted to ceiling height effortlessly.",
    quote:
      "It completely transformed our utility space. Heavy bedsheets dry quickly near the ceiling breeze.",
    clientName: "Narasimha & Geetha M., Tambaram",
  },
  {
    id: 5,
    title: "Commercial Facility Anti-Pigeon Ledge Spikes Installation",
    location: "Porur, Chennai, Tamil Nadu",
    serviceCategory: "Anti-Bird Spikes",
    image: "/images/main-images/bird-spikes-real.jpg",
    challenge:
      "Pigeons continuously roosted on narrow exterior window ledges and air-handling unit casings at a commercial hospital facility in Porur, staining facades.",
    solution:
      "Mounted heavy-duty UV-stabilized polycarbonate base strips with SS304 blunt-tip anti-bird spikes along 750 linear feet of external architectural ledges.",
    result:
      "Bird roosting was eliminated 100% on the very same day without harming birds or disrupting medical operations.",
    quote:
      "The bird spikes permanently solved a persistent 3-year sanitation challenge in less than 4 hours.",
    clientName: "Facility Operations Director, Porur",
  },
];

export default function CaseStudiesClient() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm font-medium text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Home className="w-4 h-4 text-[#D4AF37]" />
            <span>Home</span>
          </Link>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-[#A61E22] font-semibold">Case Studies</span>
        </nav>

        {/* Hero Banner Header */}
        <div className="bg-gradient-to-r from-[#A61E22] via-[#7A1417] to-[#A61E22] text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden border border-[#8E1A1E]">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-4 border border-[#D4AF37]/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" /> Proven Engineering Execution
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white">
              Real Safety Installations Across Chennai, Tamil Nadu
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6">
              See how CSK Safety Nets & Invisible Grills engineers custom balcony fall-prevention barriers, bird exclusion systems, and space-saving solutions for high-rise homes and commercial properties across Chennai.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-white/15 text-xs sm:text-sm font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>5,000+ Verified Installations</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>100% Certified Safety Hardware</span>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies List */}
        <div className="space-y-12 mb-16">
          {caseStudiesData.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Case Study Image */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[420px] bg-slate-100 overflow-hidden">
                <Image
                  src={study.image}
                  alt={`CSK Safety Nets & Invisible Grills - ${study.title} in ${study.location}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-[#A61E22]/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-sm self-start">
                    {study.serviceCategory}
                  </span>
                </div>
              </div>

              {/* Case Study Details */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{study.location}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#A61E22] mb-6">
                    {study.title}
                  </h2>

                  <div className="space-y-4 text-xs sm:text-sm">
                    {/* The Problem */}
                    <div className="bg-[#FDF8F5]/70 border border-[#B2DCDC]/60 rounded-2xl p-4 flex gap-3 text-slate-700">
                      <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block mb-1">Site Challenge:</strong>
                        <p className="leading-relaxed">{study.challenge}</p>
                      </div>
                    </div>

                    {/* The Solution */}
                    <div className="bg-[#FDF8F5]/70 border border-[#B2DCDC]/60 rounded-2xl p-4 flex gap-3 text-slate-700">
                      <Lightbulb className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block mb-1">CSK Safety Nets & Invisible Grills Solution:</strong>
                        <p className="leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* The Result */}
                    <div className="bg-emerald-50/70 border border-emerald-200/60 rounded-2xl p-4 flex gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block mb-1">Verified Outcome:</strong>
                        <p className="leading-relaxed">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Client Quote */}
                {study.quote && (
                  <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-1">
                    <p className="text-xs sm:text-sm italic text-slate-600">
                      &ldquo;{study.quote}&rdquo;
                    </p>
                    {study.clientName && (
                      <span className="text-xs font-bold text-[#A61E22]">
                        — {study.clientName}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form Inclusion */}
        <ContactForm />
      </div>
    </div>
  );
}
