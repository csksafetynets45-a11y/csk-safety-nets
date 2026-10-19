"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can your team come for a doorstep measurement in Bangalore?",
      answer:
        "Our specialized rigging technicians are stationed across North, South, and East Bangalore. In most localities—including Whitefield, Koramangala, Indiranagar, and HSR Layout—we provide same-day or next-day site visits with zero consultation charges.",
    },
    {
      question: "Will invisible grills block our apartment's natural light and garden view?",
      answer:
        "Not at all. Our invisible grills use slender 2.5mm to 3.0mm aerospace SS316 marine cables coated in crystal-clear DuPont nylon. From a distance of just a few feet, they are virtually transparent, maintaining uninterrupted ventilation and panoramic skyline views.",
    },
    {
      question: "Do apartment gated communities and RWAs in Bangalore allow invisible grills and safety nets?",
      answer:
        "Yes! Unlike bulky external MS iron grilles that alter building elevations and face RWA restrictions, our modern invisible grills and flush-mounted safety netting maintain architectural uniformity and meet standard high-rise society safety bylaws.",
    },
    {
      question: "What is the tensile capacity of your child and pet protection barriers?",
      answer:
        "Our virgin HDPE copolymer safety nets feature a certified knot-breaking threshold exceeding 140kg per point, and our SS316 marine cables endure over 400kg of tensile force. They are 100% resilient against vigorous pet scratching, biting, and accidental toddler impacts.",
    },
    {
      question: "How is an emergency handled if there is a building fire or rescue requirement?",
      answer:
        "In emergency scenarios, our high-tensile invisible cables can be severed swiftly using emergency wire-cutters kept inside your residence, ensuring immediate exit pathways for fire and rescue personnel without compromising daily fall security.",
    },
    {
      question: "How do your anti-pigeon netting and spikes resolve bird nuisances humanely?",
      answer:
        "We utilize ultra-durable, weather-treated translucent polymer netting and non-lethal blunt-tipped stainless steel spikes. They create an impenetrable physical boundary that prevents pigeons from roosting on AC compressors and balcony parapets without injuring the birds.",
    },
    {
      question: "What is the typical lifespan and warranty coverage provided by CSK Safety Nets & Invisible Grills?",
      answer:
        "We provide a comprehensive written warranty ranging from 5 years on UV-stabilized copolymer safety nets up to 10 years on SS316 marine invisible grills, covering rust resistance, anchoring firmness, and tensile integrity.",
    },
    {
      question: "How do I verify that the installed invisible grill cables are genuine SS316 marine-grade and not cheaper SS304 or SS202?",
      answer:
        "We provide complete metallurgical transparency. Our technicians carry on-site acid-test verification kits and manufacturer mill test certificates (MTC) proving genuine 316-grade alloy with 2% molybdenum content. We encourage clients to spot-test sample pieces on-site before installation begins.",
    },
    {
      question: "What specific safety precautions do your installers take if small children or pets are at home during fitting?",
      answer:
        "Our team employs dust-extraction vacuum hoods on all rotary hammer drills so zero toxic masonry dust enters living spaces. We also maintain strict work-zone cordoning and secure balcony access doors throughout the rigging process until all safety anchors and tensioning locks are 100% engaged.",
    },
    {
      question: "We have an urgent apartment move-in scheduled this weekend. How fast can CSK complete the installation?",
      answer:
        "We prioritize urgent family move-ins. Call us in the morning at +91 79819 10891, and our local Bangalore crew can perform laser measurements the very same afternoon, with complete net or grill installation completed within 24 to 48 hours.",
    },
    {
      question: "Can individual rods on your ceiling cloth drying racks be operated independently?",
      answer:
        "Yes. Our ceiling-mounted drying hoists feature 6 separate stainless steel tubes, each with its own dual-bearing nylon pulley line and locking mechanism. You can effortlessly lower one rod to chest level while keeping the other five suspended near the ceiling.",
    },
    {
      question: "Do you provide complimentary re-tensioning and maintenance support after installation?",
      answer:
        "Yes. While our hydraulic cable tensioning and diamond-drilled anchor sleeves are built for long-term tension retention, our support crew provides free inspection and maintenance check-ins under the warranty term.",
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] scroll-mt-12" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#A61E22]/10 text-[#A61E22] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#A61E22] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Clear, transparent answers about our high-rise safety nets, invisible grills, warranty terms, and Bangalore installation procedures.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#A61E22] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Assistance */}
        <div className="mt-12 p-8 rounded-3xl bg-[#A61E22] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-lg font-bold">Have a specific architectural layout or query?</h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1">
              Connect directly with proprietor CSK and our technical safety supervisors.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+917981910891"
              className="bg-[#D4AF37] hover:bg-[#E6C65A] text-slate-900 px-5 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md"
            >
              <Phone className="w-4 h-4 text-slate-900" aria-hidden="true" />
              <span>+91 79819 10891</span>
            </a>
            <a
              href="https://wa.me/917981910891"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md"
              aria-label="WhatsApp Chat with CSK Safety Nets"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
