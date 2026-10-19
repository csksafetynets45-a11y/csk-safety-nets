"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Quote, Sparkles } from "lucide-react";

export default function CustomerReviews() {
  const testimonials = [
    {
      name: "Rohit & Neha Sengupta",
      locality: "Sarjapur Road, Bangalore",
      service: "Balcony Invisible Grills",
      rating: 5,
      date: "June 2026",
      comment:
        "We shifted to a 17th floor high-rise on Sarjapur Road and were terrified about balcony safety for our 3-year-old daughter. CSK Safety Nets & Invisible Grills installed SS316 marine-grade invisible grills. The view is completely open and the wire tension is rock solid. Huge relief and best decision for our family!",
    },
    {
      name: "Harish Varma",
      locality: "Bellandur (Green Glen Layout), Bangalore",
      service: "Children Safety Nets",
      rating: 5,
      date: "May 2026",
      comment:
        "Extremely responsive and professional. The rigging team arrived within hours of our inquiry in Bellandur, performed precision concrete anchoring, and vacuum-cleaned all drilling dust before handing over the 5-year warranty card. Our toddlers can now play freely.",
    },
    {
      name: "Meera Chandrasekhar",
      locality: "Hennur, Bangalore",
      service: "Pigeon Safety Nets & Spikes",
      rating: 5,
      date: "July 2026",
      comment:
        "Pigeons were nesting on top of our AC outdoor units and balcony ledges in Hennur. CSK Safety Nets & Invisible Grills fitted durable translucent netting and stainless steel spikes. Our balcony is clean, fresh, and bird-free without any ugly mesh obstruction.",
    },
    {
      name: "Gautam & Swati Hegde",
      locality: "Rajajinagar 3rd Block, Bangalore",
      service: "Ceiling Cloth Drying Hangers",
      rating: 5,
      date: "April 2026",
      comment:
        "The 6-rod stainless steel ceiling hoist rack completely transformed our compact utility balcony. Lowering and raising rods with the smooth dual-pulley line is effortless even with wet heavy blankets. Superb build quality!",
    },
    {
      name: "Col. Sanjeev Bakshi (Retd.)",
      locality: "Malleshwaram, Bangalore",
      service: "Balcony Invisible Grills",
      rating: 5,
      date: "June 2026",
      comment:
        "Living on high floors with gusty winds in Malleshwaram, we wanted structural reliability. The diamond-drilled tracks and certified SS316 cables with transparent nylon wrap look magnificent and keep our Golden Retriever completely safe.",
    },
    {
      name: "Kavitha Ranganathan",
      locality: "Basavanagudi, Bangalore",
      service: "Window Invisible Grills",
      rating: 5,
      date: "May 2026",
      comment:
        "We replaced dark, prison-like iron bars with CSK Safety Nets & Invisible Grills invisible grills. Our bedrooms receive glorious natural breeze and light, with zero compromise on child protection. Complete peace of mind!",
    },
  ];

  return (
    <section className="py-24 bg-[#7A1417] text-white scroll-mt-12" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#E6C65A] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Verified Bangalore Homeowner Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Real Stories from High-Rise Residents Across Bangalore
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Discover why hundreds of families, pet owners, and apartment associations trust CSK Safety Nets & Invisible Grills for dependable high-altitude perimeter safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-7 rounded-3xl bg-[#1A0305] border border-[#4A0A0D] flex flex-col justify-between hover:border-[#D4AF37] transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="flex items-center gap-1 text-[#D4AF37]"
                    role="img"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#A61E22] group-hover:text-[#D4AF37] transition-colors" aria-hidden="true" />
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#4A0A0D] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{review.name}</h4>
                  <div className="flex items-center gap-1 text-slate-400 text-[11px] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" aria-hidden="true" />
                    <span>{review.locality}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded-md block">
                    {review.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
