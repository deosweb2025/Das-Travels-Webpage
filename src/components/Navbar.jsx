import { useState, useEffect } from "react";
import { siteData } from "../data/siteData";
import { Menu, X, ChevronRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";

// Official WhatsApp icon component
function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-[#080E1A]/92 backdrop-blur-2xl shadow-[0_12px_35px_-5px_rgba(0,0,0,0.85)] border-b border-amber-400/25 py-2 sm:py-2.5"
          : "bg-gradient-to-b from-[#070D18]/95 via-[#080E1A]/80 to-transparent py-3 sm:py-4"
      }`}
    >
      {/* Radiant Luxury Bottom Hairline Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none" />

      <nav className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Left: Brand Identity with Royal Shield */}
          <a
            href="#hero"
            className="focus:outline-none shrink group py-0.5"
            aria-label="Das Travels Home"
          >
            <BrandLogo size="md" showTagline={true} />
          </a>

          {/* Center: Luxury Floating Glass Navigation Island */}
          <div className="hidden lg:flex items-center bg-gradient-to-b from-[#14233C]/75 to-[#0B1322]/85 border border-amber-400/30 rounded-full px-2 py-1.5 backdrop-blur-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 xl:px-5 py-1.5 rounded-full text-xs xl:text-[13px] font-extrabold uppercase tracking-wider text-slate-300 hover:text-amber-300 transition-all duration-300 whitespace-nowrap group"
              >
                {/* Glowing Hover Pill Background */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/15 via-amber-400/25 to-amber-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(245,158,11,0.25)] border border-amber-400/30" />
                <span className="relative z-10 flex items-center gap-1">
                  <span>{link.label}</span>
                </span>
              </a>
            ))}
          </div>

          {/* Right: VIP Booking Concierge & Mobile Drawer Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct WhatsApp Concierge CTA */}
            <a
              href={`https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
                siteData.contact.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs sm:text-sm font-extrabold shadow-[0_8px_25px_-4px_rgba(16,185,129,0.5),0_0_15px_rgba(16,185,129,0.25)] border border-emerald-300/40 transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap group cursor-pointer"
              aria-label="Book via WhatsApp"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0 drop-shadow" />
              <span className="tracking-wide">Book Cab</span>
            </a>

            {/* Mobile Menu Trigger with Gold Rim */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-[#111D33] border border-amber-400/40 text-amber-300 hover:text-white hover:bg-amber-500/20 focus:outline-none min-h-[38px] min-w-[38px] flex items-center justify-center cursor-pointer shadow-lg transition-all"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Animated Luxury Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[#0A1220]/98 border-b-2 border-amber-400/40 backdrop-blur-2xl px-5 pt-4 pb-7 max-h-[85vh] overflow-y-auto w-full shadow-2xl shadow-black"
          >
            <div className="flex flex-col gap-1.5 mb-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-100 hover:text-amber-400 hover:bg-white/[0.06] border border-transparent hover:border-amber-400/30 transition-all"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-amber-400/70" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
                  siteData.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteData.contact.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#14233C] border border-amber-400/40 text-amber-300 font-bold text-xs sm:text-sm shadow-md"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Hotline: +91 {siteData.contact.phone}</span>
              </a>

              <div className="text-center text-[10px] text-slate-300 mt-2 font-medium">
                Bhadrabari More, Nabapally, Barasat • Open 24/7
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}