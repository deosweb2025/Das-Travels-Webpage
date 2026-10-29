import { siteData } from "../data/siteData";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  ChevronRight,
  Car,
} from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="relative bg-[#070D18] border-t border-amber-400/25 text-slate-300 text-sm z-20 w-full overflow-hidden">
      {/* Dedicated Luxury Carbon & Fluid Wave Texture Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <picture>
          <source
            srcSet="/assets/enhanced/footer_luxury_texture.webp"
            type="image/webp"
          />
          <img
            src="/assets/enhanced/footer_luxury_texture.jpg"
            alt="Luxury Footer Texture"
            className="w-full h-full object-cover object-center opacity-45 sm:opacity-55 filter contrast-125"
            loading="lazy"
          />
        </picture>

        {/* Ambient Dark Navy & Radial Glazes for optimal typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1627]/90 via-[#0A1220]/80 to-[#050912]/95" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-48 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.12),transparent_70%)]" />
        <div className="absolute -bottom-10 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.1),transparent_70%)]" />
      </div>

      {/* Geometric Micro-Lattice Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Top Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Column 1: Company Profile & Owner Attribution */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="md" showTagline={true} />

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {siteData.company.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Safe Journey, Happy Memories • Verified Chauffeurs</span>
            </div>

            <div className="text-[11.5px] text-slate-400 pt-1">
              Proprietor: <strong className="text-amber-300 font-bold">{siteData.company.owner}</strong> • 24/7 Car Rental & Tour Operator in Barasat
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <h4 className="text-xs font-black uppercase tracking-widest text-amber-400">
                Navigation
              </h4>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {[
                { name: "Home", href: "#hero" },
                { name: "About Das Travels", href: "#about" },
                { name: "Our Services", href: "#services" },
                { name: "Fleet & Rates", href: "#fleet" },
                { name: "Photo Gallery", href: "#gallery" },
                { name: "Contact & Location", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-amber-400/60 group-hover:translate-x-1 group-hover:text-amber-400 transition-all" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Fleet & Special Services */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <h4 className="text-xs font-black uppercase tracking-widest text-amber-400">
                Popular Vehicles
              </h4>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {[
                "Maruti Suzuki Swift (Hatchback)",
                "Maruti Suzuki Dzire (Executive Sedan)",
                "Toyota Innova Crysta (Luxury 7-Seater)",
                "Wedding Floral Decorated Cars",
                "Mahindra Scorpio / Rugged SUV",
                "Force 17-Seater Tempo Traveller",
                "Tata Starbus Prime AC Coach (Bus)",
              ].map((vehicle, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                  <Car className="w-3.5 h-3.5 text-amber-400/70 shrink-0" />
                  <span>{vehicle}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official Contact & Address */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <h4 className="text-xs font-black uppercase tracking-widest text-amber-400">
                Office & Dispatch Desk
              </h4>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-200">
                  {siteData.location.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="text-white hover:text-amber-300 font-bold transition-colors"
                >
                  {siteData.contact.phoneDisplay} / {siteData.contact.secondaryPhoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="text-slate-200 hover:text-amber-300 break-all font-medium transition-colors"
                >
                  {siteData.contact.email}
                </a>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 font-bold text-xs">
                <Clock className="w-3.5 h-3.5" />
                <span>24x7 Round-The-Clock Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal, Attribution Bar - Centered without All Rights Reserved text */}
      <div className="border-t border-white/10 bg-[#050912]/95 py-6 sm:py-7 text-xs text-slate-400 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
          <div className="flex items-center justify-center flex-wrap leading-relaxed text-xs sm:text-sm text-slate-300">
            <span>Website Designed &amp; Maintained by</span>
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1 inline-block"
            >
              Digital Exposure Online Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
