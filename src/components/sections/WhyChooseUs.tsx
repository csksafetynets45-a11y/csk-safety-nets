"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, HeartHandshake, Award, Sparkles, Ruler } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      badge: "Quality Materials",
      title: "Virgin Polymers & SS316 Marine Grade Alloys",
      desc: "Every net and wire we install is made from 100% virgin UV-fortified HDPE or marine-grade SS316 stainless steel with molybdenum reinforcement. Engineered never to rust, fray, discolor, or snap under extreme weather or high wind pressure.",
    },
    {
      icon: Clock,
      badge: "Fast Turnaround",
      title: "Quick Doorstep Inspection & Same-Week Fitting",
      desc: "We understand safety can't wait. Our mobile technical rigging teams across Chennai provide fast same-day or 24-hour laser measurement visits, followed by clean, professional installation within the same week.",
    },
    {
      icon: HeartHandshake,
      badge: "Child & Pet Safety",
      title: "Dedicated Family Fall Protection Engineering",
      desc: "Our systems are tension-calibrated to withstand 140kg+ dynamic impacts with ultra-secure anchor spacing. Balconies, stairwells, and French windows become 100% safe play areas for infants, toddlers, dogs, and cats.",
    },
    {
      icon: Award,
      badge: "Written Warranty",
      title: "Official 5 to 10 Year Written Guarantee",
      desc: "Every project comes backed by an authentic stamped warranty certificate covering tensile strength, wire tension retention, and hardware corrosion resistance. If any issue arises, our service team resolves it free of charge.",
    },
    {
      icon: Ruler,
      badge: "Zero-Risk Estimate",
      title: "Free Doorstep Laser Measurement & Catalog Demo",
      desc: "No hidden charges, zero booking advance, and zero pressure. A certified specialist visits your home, shows real material samples, answers questions, and delivers an exact itemized transparent estimate on the spot.",
    },
    {
      icon: Sparkles,
      badge: "Expert Riggers",
      title: "Certified High-Rise Rigging & Clean Execution",
      desc: "Our installers are rope-access trained, safety-certified, and equipped with dust-extraction drills. We protect your wall plaster, ensure clean cable alignment, and leave your balcony spotless before handover.",
    },
  ];

  return (
    <section className="py-24 bg-white scroll-mt-12" id="advantage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#A61E22]/10 text-[#A61E22] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The CSK Safety Nets Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#A61E22] tracking-tight">
            Protecting What Matters Most, Without Compromise
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Built on four core pillars: superior metallurgical quality, lightning-fast turnaround, unwavering dedication to child and pet security, and rock-solid warranty backing across Chennai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/80 hover:border-[#D4AF37] hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-[#A61E22] group-hover:bg-[#D4AF37] flex items-center justify-center text-[#D4AF37] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#A61E22]/10 text-[#A61E22] group-hover:bg-[#D4AF37]/20 group-hover:text-slate-800 transition-colors">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2.5 group-hover:text-[#A61E22] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
