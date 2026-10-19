"use client";

import { motion } from "framer-motion";
import { Shield, Users, Award, MapPin } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Shield,
      value: "5,000+",
      label: "Installations Completed",
      desc: "Balconies, windows, and sports grounds secured across Bangalore",
    },
    {
      icon: Users,
      value: "99.8%",
      label: "Customer Satisfaction",
      desc: "Verified 5-star ratings from apartment owners and housing societies",
    },
    {
      icon: Award,
      value: "5 Years",
      label: "Direct Warranty",
      desc: "Official replacement guarantee on materials and tensile hardware",
    },
    {
      icon: MapPin,
      value: "20+",
      label: "Bangalore Localities",
      desc: "Fast doorstep coverage from Whitefield & Outer Ring Road (ORR) to Indiranagar & Electronic City",
    },
  ];

  return (
    <section className="py-16 bg-[#1A0305] text-white border-b border-[#4A0A0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-3">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-3xl sm:text-4xl font-black text-[#D4AF37] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-white mt-1">{stat.label}</span>
                <p className="text-[11px] text-slate-300 mt-1 leading-snug">{stat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
