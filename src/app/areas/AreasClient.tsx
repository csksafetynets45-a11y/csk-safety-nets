"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Home,
  MapPin,
  ArrowRight,
  Clock,
  CheckCircle2,
  Search,
  Building2,
  Sparkles,
  Phone,
} from "lucide-react";
import { areasList } from "@/utils/areasData";
import MapFrame from "@/components/ui/map-frame";

const zoneFilters = [
  { id: "all", name: "All 120+ Areas" },
  { id: "central", name: "Central & CBD" },
  { id: "south-omr", name: "South & OMR Tech Corridor" },
  { id: "west", name: "West & Porur / Ambattur" },
  { id: "gst-suburbs", name: "Tambaram & GST Suburbs" },
  { id: "ecr", name: "ECR & Coastal Belt" },
  { id: "north", name: "North Chennai" },
];

export default function AreasClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeZone, setActiveZone] = useState("all");

  const filteredAreas = useMemo(() => {
    return areasList.filter((area) => {
      const matchesSearch =
        area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        area.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        area.localities.some((loc) =>
          loc.toLowerCase().includes(searchQuery.toLowerCase())
        );

      if (!matchesSearch) return false;
      if (activeZone === "all") return true;

      const slug = area.slug.toLowerCase();
      if (activeZone === "central") {
        return (
          slug.includes("anna-nagar") ||
          slug.includes("t-nagar") ||
          slug.includes("nungambakkam") ||
          slug.includes("alwarpet") ||
          slug.includes("mylapore") ||
          slug.includes("mandaveli") ||
          slug.includes("ra-puram") ||
          slug.includes("kotturpuram") ||
          slug.includes("kilpauk") ||
          slug.includes("chetpet") ||
          slug.includes("egmore") ||
          slug.includes("triplicane") ||
          slug.includes("royapettah") ||
          slug.includes("gopalapuram") ||
          slug.includes("kodambakkam") ||
          slug.includes("west-mambalam") ||
          slug.includes("saidapet") ||
          slug.includes("guindy") ||
          slug.includes("ekkatuthangal") ||
          slug.includes("shenoy-nagar") ||
          slug.includes("aminjikarai") ||
          slug.includes("choolaimedu") ||
          slug.includes("cit-nagar") ||
          slug.includes("nandanam") ||
          slug.includes("teynampet") ||
          slug.includes("poes-garden") ||
          slug.includes("ashok-nagar") ||
          slug.includes("kk-nagar")
        );
      }
      if (activeZone === "south-omr") {
        return (
          slug.includes("omr") ||
          slug.includes("velachery") ||
          slug.includes("adyar") ||
          slug.includes("besant-nagar") ||
          slug.includes("thiruvanmiyur") ||
          slug.includes("sholinganallur") ||
          slug.includes("perungudi") ||
          slug.includes("thoraipakkam") ||
          slug.includes("karapakkam") ||
          slug.includes("navalur") ||
          slug.includes("siruseri") ||
          slug.includes("kelambakkam") ||
          slug.includes("padur") ||
          slug.includes("semmancheri")
        );
      }
      if (activeZone === "west") {
        return (
          slug.includes("porur") ||
          slug.includes("ramapuram") ||
          slug.includes("manapakkam") ||
          slug.includes("mugalivakkam") ||
          slug.includes("iyyappanthangal") ||
          slug.includes("kattupakkam") ||
          slug.includes("mangadu") ||
          slug.includes("poonamallee") ||
          slug.includes("vanagaram") ||
          slug.includes("maduravoyal") ||
          slug.includes("koyambedu") ||
          slug.includes("vadapalani") ||
          slug.includes("virugambakkam") ||
          slug.includes("saligramam") ||
          slug.includes("valasaravakkam") ||
          slug.includes("alwarthirunagar") ||
          slug.includes("ambattur") ||
          slug.includes("korattur") ||
          slug.includes("padi") ||
          slug.includes("nolambur") ||
          slug.includes("mogappair") ||
          slug.includes("kundrathur") ||
          slug.includes("thirumazhisai")
        );
      }
      if (activeZone === "gst-suburbs") {
        return (
          slug.includes("tambaram") ||
          slug.includes("chromepet") ||
          slug.includes("pallavaram") ||
          slug.includes("sanatorium") ||
          slug.includes("hastinapuram") ||
          slug.includes("chitlapakkam") ||
          slug.includes("selaiyur") ||
          slug.includes("sembakkam") ||
          slug.includes("medavakkam") ||
          slug.includes("madipakkam") ||
          slug.includes("pallikaranai") ||
          slug.includes("perumbakkam") ||
          slug.includes("keelkattalai") ||
          slug.includes("kovilambakkam") ||
          slug.includes("nanmangalam") ||
          slug.includes("sithalapakkam") ||
          slug.includes("pammal") ||
          slug.includes("anakaputhur") ||
          slug.includes("guduvanchery") ||
          slug.includes("urapakkam") ||
          slug.includes("vandalur") ||
          slug.includes("chengalpattu") ||
          slug.includes("maraimalai-nagar") ||
          slug.includes("kattankulathur") ||
          slug.includes("singaperumal-koil") ||
          slug.includes("mahindra-world-city")
        );
      }
      if (activeZone === "ecr") {
        return (
          slug.includes("palavakkam") ||
          slug.includes("kottivakkam") ||
          slug.includes("neelankarai") ||
          slug.includes("injambakkam") ||
          slug.includes("akkarai") ||
          slug.includes("kovalam") ||
          slug.includes("mrc-nagar")
        );
      }
      if (activeZone === "north") {
        return (
          slug.includes("kolathur") ||
          slug.includes("retteri") ||
          slug.includes("villivakkam") ||
          slug.includes("perambur") ||
          slug.includes("madhavaram") ||
          slug.includes("red-hills") ||
          slug.includes("avadi") ||
          slug.includes("thirumullaivoyal") ||
          slug.includes("pattabiram") ||
          slug.includes("royapuram") ||
          slug.includes("washermanpet") ||
          slug.includes("george-town") ||
          slug.includes("sowcarpet") ||
          slug.includes("tondiarpet") ||
          slug.includes("thiruvottiyur") ||
          slug.includes("wimco-nagar") ||
          slug.includes("manali") ||
          slug.includes("ennoore")
        );
      }
      return true;
    });
  }, [searchQuery, activeZone]);

  return (
    <div className="min-screen bg-slate-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8"
        >
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#A61E22]">Chennai Service Areas</span>
        </nav>

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#A61E22]/10 border border-[#A61E22]/20 text-[#A61E22] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>100% Citywide Doorstep Coverage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Safety Nets & Invisible Grills Across Chennai
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Fast same-day inspection and professional installation of balcony safety nets, marine-grade SS316 invisible grills, and ceiling cloth drying hangers across all 120+ Chennai neighborhoods.
          </p>
        </div>

        {/* Zone Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {zoneFilters.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setActiveZone(zone.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeZone === zone.id
                  ? "bg-[#A61E22] text-white shadow-md shadow-[#A61E22]/20 scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {zone.name}
            </button>
          ))}
        </div>

        {/* Search Input Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by neighborhood, IT corridor, or landmark..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent shadow-xs transition-all"
            />
          </div>
        </div>

        {/* Main Content: Area Cards Grid + Map Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Filtered Areas Grid */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Showing {filteredAreas.length} Localities
              </span>
              <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Inspection Fee Everywhere</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#D4AF37]/50 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#A61E22] group-hover:scale-110 transition-transform" />
                        <h2 className="text-base font-black text-slate-900 group-hover:text-[#A61E22] transition-colors">
                          {area.name}
                        </h2>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
                        Top Rated
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                      {area.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {area.localities.slice(0, 3).map((loc) => (
                        <span
                          key={loc}
                          className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                        >
                          {loc}
                        </span>
                      ))}
                      {area.localities.length > 3 && (
                        <span className="text-[10px] text-slate-400 self-center">
                          +{area.localities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Same-Day Visit</span>
                    </span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 group-hover:text-[#D4AF37] transition-all">
                      <span>View Services</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {filteredAreas.length === 0 && (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-900 mb-1">No matching Chennai areas found</h3>
                <p className="text-xs text-slate-500 mb-4">
                  We cover all surrounding Chennai localities. Call us directly for immediate doorstep service.
                </p>
                <a
                  href="tel:+917981910891"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 79819 10891</span>
                </a>
              </div>
            )}
          </div>

          {/* Right: Map & Direct Booking Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                Chennai Service Coverage Map
              </h3>
              <MapFrame areaName="Chennai, Tamil Nadu" />
            </div>

            <div className="bg-[#A61E22] text-white rounded-3xl p-6 border border-[#8E1A1E] shadow-lg">
              <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-wider block mb-1">
                Fast Doorstep Response
              </span>
              <h3 className="text-lg font-black mb-2">Can&apos;t Find Your Exact Layout?</h3>
              <p className="text-xs text-slate-200 leading-relaxed mb-4">
                We service all high-rises, gated villa societies, and residential townships across greater Chennai. Call for immediate dispatch of our inspection team.
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+917981910891"
                  className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#E6C65A] text-slate-900 font-black py-3 rounded-xl transition-colors text-xs shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 79819 10891</span>
                </a>
                <a
                  href="https://wa.me/917981910891?text=Hi%20CSK%20Safety%20Nets,%20I%20need%20a%20free%20inspection%20in%20Chennai."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-colors text-xs shadow-md"
                >
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
