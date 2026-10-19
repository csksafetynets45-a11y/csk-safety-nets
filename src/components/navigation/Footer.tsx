import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Logo from "../ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A0305] text-slate-300 pt-16 pb-8 border-t border-[#4A0A0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-5">
            <Logo light={true} />
            <p className="text-[#D1D5DB] text-sm leading-relaxed mt-2">
              CSK Safety Nets &amp; Invisible Grills delivers premium balcony safety nets, child fall protection barriers, SS316 marine invisible wire grills, and stainless cloth drying systems across Chennai. Same-week installation. Written warranty on every job.
            </p>
            <div className="flex flex-col gap-3 mt-1 text-sm text-[#D1D5DB]">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Mon - Sun: 8:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#D4AF37]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Completed Projects", href: "/projects" },
                { label: "Photo Gallery", href: "/gallery" },
                { label: "Coverage Areas", href: "/areas" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#D1D5DB] hover:text-[#D4AF37] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#D4AF37] transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick View */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#D4AF37]">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Balcony Safety Nets", href: "/services/balcony-safety-nets" },
                { label: "Children Safety Nets", href: "/services/children-safety-nets" },
                { label: "Pet Safety Nets", href: "/services/pet-safety-nets" },
                { label: "Pigeon Safety Nets", href: "/services/pigeon-safety-nets" },
                { label: "Balcony Invisible Grills", href: "/services/balcony-invisible-grills" },
                { label: "Window Invisible Grills", href: "/services/window-invisible-grills" },
                { label: "Staircase Invisible Grills", href: "/services/staircase-invisible-grills" },
                { label: "Ceiling Cloth Hangers", href: "/services/ceiling-cloth-hangers" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#D1D5DB] hover:text-[#D4AF37] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#D4AF37] transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details — NAP Block (GBP-ready) */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#D4AF37]">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-[#D1D5DB]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-white block">Service Area</span>
                  <span className="block text-sm text-[#D1D5DB] mt-1">
                    Chennai, Tamil Nadu
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white block">Phone</span>
                  <a href="tel:+917981910891" className="hover:text-[#D4AF37] transition-colors text-white font-semibold flex items-center gap-1.5">
                    <span>+91 79819 10891</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-white block">Email</span>
                  <a href="mailto:csksafetynets45@gmail.com" className="hover:text-[#D4AF37] transition-colors break-all">
                    csksafetynets45@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#25D366] shrink-0 mt-1 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.277 5.282 0 11.782 0c3.148.001 6.107 1.227 8.331 3.454 2.224 2.227 3.447 5.189 3.445 8.34-.005 6.505-5.282 11.783-11.784 11.783-2.001-.001-3.973-.513-5.733-1.488L0 24zm6.49-4.22c1.674.993 3.328 1.52 5.232 1.522 5.344 0 9.69-4.346 9.693-9.693.002-2.593-1.002-5.029-2.827-6.856-1.825-1.826-4.26-2.83-6.853-2.83-5.348 0-9.695 4.345-9.698 9.692-.001 1.954.513 3.619 1.547 5.247l-.99 3.614 3.738-.98l.161.096z" />
                </svg>
                <div>
                  <span className="font-bold text-white block">WhatsApp</span>
                  <a href="https://wa.me/917981910891" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors text-[#25D366]">
                    wa.me/917981910891
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Chennai Localities Local SEO Footer Links */}
        <div className="py-6 border-t border-[#4A0A0D] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-white font-bold shrink-0">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Service Areas Across Chennai:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 text-[#D1D5DB]">
            {[
              { name: "Anna Nagar", slug: "anna-nagar" },
              { name: "T. Nagar", slug: "t-nagar" },
              { name: "Velachery", slug: "velachery" },
              { name: "OMR", slug: "omr" },
              { name: "Adyar", slug: "adyar" },
              { name: "Besant Nagar", slug: "besant-nagar" },
              { name: "Thiruvanmiyur", slug: "thiruvanmiyur" },
              { name: "Porur", slug: "porur" },
              { name: "Tambaram", slug: "tambaram" },
              { name: "Chromepet", slug: "chromepet" },
              { name: "Medavakkam", slug: "medavakkam" },
              { name: "Perungudi", slug: "perungudi" },
              { name: "Sholinganallur", slug: "sholinganallur" },
              { name: "Navalur", slug: "navalur" },
              { name: "Siruseri", slug: "siruseri" },
              { name: "Mylapore", slug: "mylapore" },
              { name: "Ambattur", slug: "ambattur" },
              { name: "Mogappair", slug: "mogappair" },
              { name: "Vadapalani", slug: "vadapalani" },
              { name: "Guindy", slug: "guindy" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/areas/${city.slug}`}
                className="hover:text-[#D4AF37] transition-colors"
              >
                {city.name}
              </Link>
            ))}
            <Link
              href="/areas"
              className="text-[#D4AF37] font-bold hover:underline flex items-center gap-1"
            >
              <span>+ More Areas</span>
            </Link>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-[#4A0A0D] flex flex-col sm:flex-row items-center justify-between text-xs text-[#D1D5DB] gap-4">
          <p>© {currentYear} CSK Safety Nets &amp; Invisible Grills. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#D4AF37] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
