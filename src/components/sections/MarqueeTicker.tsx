"use client";

import { Shield, PhoneCall, Award, Clock, Wrench, CheckCircle } from "lucide-react";

export default function MarqueeTicker() {
  const items = [
    { icon: Shield, text: "Certified High-Rise Safety Netting", highlight: "140kg+ Load Tested" },
    { icon: Award, text: "Marine-Grade SS316 Invisible Grills", highlight: "100% Rust-Proof" },
    { icon: Clock, text: "Doorstep Laser Measurements", highlight: "100% Free Consultation" },
    { icon: Wrench, text: "Rapid Turnaround in Chennai", highlight: "Same-Day Service" },
    { icon: PhoneCall, text: "Direct Helpline & WhatsApp", highlight: "+91 79819 10891" },
    { icon: CheckCircle, text: "Official Warranty Assurance", highlight: "5-Year Replacement Card" },
  ];

  return (
    <div className="bg-[#A61E22] text-white py-3.5 overflow-hidden border-y border-[#8E1A1E] select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2 mx-6 text-xs sm:text-sm font-semibold">
              <Icon className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="text-slate-200">{item.text}:</span>
              <span className="text-[#D4AF37] font-bold bg-black/20 px-2 py-0.5 rounded border border-[#D4AF37]/30">
                {item.highlight}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
