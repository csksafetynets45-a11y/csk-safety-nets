"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronLeft, ChevronRight, Phone, MessageSquare, Award, ArrowRight, CheckCircle2 } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  highlight: string;
  subtitle: string;
  image: string;
  altText: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Protecting What Matters Most —",
    highlight: "Without Compromise",
    subtitle: "Your children and pets deserve a safe home. CSK Safety Nets installs child-safe balcony barriers and invisible grills engineered to military-grade tension specifications across Bangalore.",
    image: "/images/main-images/Balcony-Grills.webp",
    altText: "CSK Safety Nets SS316 marine-grade invisible balcony grills — premium child and pet protection, Bangalore",
    ctaText: "Explore Invisible Grills",
    ctaLink: "/services/balcony-invisible-grills",
    badge: "10-Year Written Warranty · 100% Unobstructed Views",
  },
  {
    id: 2,
    title: "Precision-Anchored Safety Nets —",
    highlight: "Same-Week Installation",
    subtitle: "Stop worrying every time your child leans on the railing. Our certified team visits your home this week, measures every dimension, and installs high-tensile safety nets that genuinely hold.",
    image: "/images/main-images/balcony-safetynets.webp",
    altText: "CSK Safety Nets heavy-duty childproof balcony fall protection netting installed in Bangalore apartment",
    ctaText: "Discover Safety Nets",
    ctaLink: "/services/balcony-safety-nets",
    badge: "140kg+ Point Load Tested · 5-Year Guarantee",
  },
  {
    id: 3,
    title: "Pet-Proof Balcony Barriers —",
    highlight: "Let Them Roam Safely",
    subtitle: "Cats that sit on ledges. Dogs that lean too far over railings. Our reinforced claw-proof nets and chew-resistant invisible grills keep your furry family members safe without blocking their view.",
    image: "/images/main-images/pet-safetynets-real.webp",
    altText: "CSK Safety Nets anti-bird and pet protection netting — safe and humane, Bangalore apartments",
    ctaText: "Pet Safety Solutions",
    ctaLink: "/services/pet-safety-nets",
    badge: "Claw-Proof · Non-Toxic · Pet-Safe Materials",
  },
  {
    id: 4,
    title: "Complete Building Protection —",
    highlight: "Duct & Shaft Enclosures",
    subtitle: "Open ventilation shafts invite pigeons, rodents, and hygiene hazards. Our certified rope-access technicians seal vertical shafts from ground to rooftop with long-lasting polymer mesh.",
    image: "/images/main-images/duct-area-real.webp",
    altText: "CSK Safety Nets industrial duct area and building shaft netting — certified technicians, Bangalore",
    ctaText: "Duct Area Netting",
    ctaLink: "/services/duct-area-safety-nets",
    badge: "Certified Rope-Access · Society & RWA Ready",
  },
  {
    id: 5,
    title: "Reclaim Your Balcony Space —",
    highlight: "Stainless Ceiling Cloth Hangers",
    subtitle: "Stop tangling with floor-standing drying racks. Our smooth dual-pulley SS304 ceiling systems lift your laundry up and out of the way — quick to install, built to outlast Bangalore's monsoons.",
    image: "/images/main-images/ceiling-cloth-hangers-1.jpg",
    altText: "CSK Safety Nets ceiling-mounted stainless steel pulley cloth drying rack — Bangalore home installation",
    ctaText: "Explore Cloth Hangers",
    ctaLink: "/services/ceiling-cloth-hangers",
    badge: "Reclaims 100% Balcony Space · 3-Year Guarantee",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const prevSlide = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[700px] bg-slate-950 overflow-hidden flex items-center">
      {/* Background Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={slide.altText}
            fill
            priority={slide.id === 1}
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Clean neutral scrim — keeps headline text crisp while letting real installation images shine with maximum clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Copy (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-5 text-left">
            {/* Top Badge */}
            <motion.div
              key={`badge-${slide.id}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 self-start bg-white/10 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs"
            >
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>{slide.badge}</span>
            </motion.div>

            {/* Dynamic Main Headline */}
            <motion.div
              key={`title-${slide.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-1"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                {slide.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E8C84A] to-amber-200">
                  {slide.highlight}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              key={`desc-${slide.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
            >
              {slide.subtitle}
            </motion.p>

            {/* Key Value Props */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-white/90 text-xs sm:text-sm font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Free Doorstep Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Written Warranty — 3 to 10 Yrs</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Same-Week Installation</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              {/* Primary Action */}
              <Link
                href={slide.ctaLink}
                className="bg-gradient-to-r from-[#A61E22] to-[#C0272D] hover:from-[#C0272D] hover:to-[#A61E22] text-white font-extrabold px-7 py-3.5 rounded-full text-sm sm:text-base transition-all duration-300 shadow-[0_10px_25px_rgba(166,30,34,0.4)] hover:shadow-[0_15px_30px_rgba(166,30,34,0.6)] flex items-center gap-2 group cursor-pointer"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Phone Call */}
              <a
                href="tel:+917981910891"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-full text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call 7981910891</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917981910891?text=Hi%20CSK%20Safety%20Nets%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold p-3.5 rounded-full text-sm transition-all duration-300 shadow-md hover:scale-105 flex items-center justify-center"
                aria-label="WhatsApp CSK Safety Nets"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </a>
            </motion.div>
          </div>

          {/* Trust Metrics Card (Right, Desktop) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4">
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-white shadow-2xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#A61E22] rounded-2xl text-[#D4AF37]">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Family-First Safety</h3>
                  <p className="text-xs text-slate-300">Bangalore&apos;s Child & Pet Safety Specialists</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex flex-col gap-2.5 text-xs text-slate-200">
                <div className="flex justify-between items-center">
                  <span>Completed Installations</span>
                  <span className="font-bold text-[#D4AF37] text-sm">2,400+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Customer Satisfaction</span>
                  <span className="font-bold text-[#D4AF37] text-sm">4.94 / 5.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Coverage Scope</span>
                  <span className="font-bold text-[#D4AF37] text-sm">All Bangalore</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full text-center bg-gradient-to-r from-[#D4AF37] to-[#E8C84A] hover:from-[#E8C84A] hover:to-[#D4AF37] text-slate-900 font-extrabold text-xs py-3 rounded-xl transition-colors shadow-sm"
              >
                Book Free Inspection This Week
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Arrows */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 flex items-center gap-3">
        <button
          type="button"
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Slide Dots */}
      <div
        role="tablist"
        aria-label="Hero carousel slide navigation"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 z-20 flex items-center gap-2"
      >
        {slides.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={idx === current}
            onClick={() => {
              setIsAutoPlay(false);
              setCurrent(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}: ${s.title}`}
          />
        ))}
      </div>
    </section>
  );
}
