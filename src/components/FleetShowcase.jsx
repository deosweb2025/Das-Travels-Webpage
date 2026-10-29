import { useState, useRef } from "react";
import { siteData } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import {
  Users,
  Briefcase,
  Wind,
  Check,
  ArrowRight,
  Phone,
  Sparkles,
  ShieldCheck,
  Clock,
  BadgePercent,
  UserCheck,
} from "lucide-react";
import { gsap } from "../animations/gsapConfig";
import { useGsap } from "../hooks/useGsap";

export default function FleetShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sectionRef = useRef(null);

  const categories = [
    "All",
    "Hatchback",
    "Sedan",
    "Luxury MPV",
    "Rugged SUV",
    "Tempo Traveller",
    "Tourist Bus",
  ];

  const filteredFleet =
    selectedCategory === "All"
      ? siteData.fleet
      : siteData.fleet.filter((car) => car.category === selectedCategory);

  useGsap(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".fleet-card",
      { opacity: 0.3, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          once: true,
        },
        clearProps: "all",
      }
    );
  }, sectionRef);

  return (
    <section
      id="fleet"
      ref={sectionRef}
      className="py-20 sm:py-28 relative w-full overflow-hidden bg-gradient-to-b from-[#101B2E] via-[#14233C] to-[#0F1A2D]"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

      {/* Subtle luxury geometric micro-lattice texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <SectionHeading
          eyebrow="👑 VERIFIED SHOWROOM FLEET • OUR SIGNATURE LINEUP"
          title="Spotless, Certified &"
          highlight="Ready To Roll"
          description="Every car, traveller, and luxury coach in our fleet is maintained to pristine showroom standards for your peace of mind."
        />

        {/* Floating Category Filter Dock */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="p-1.5 rounded-2xl bg-[#0D1829]/90 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black shadow-[0_0_20px_rgba(245,158,11,0.35)] border border-amber-300 scale-[1.02]"
                    : "text-slate-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="fleet-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {filteredFleet.map((vehicle, idx) => (
            <div
              key={idx}
              className="fleet-card group rounded-3xl bg-gradient-to-b from-[#182A48]/95 via-[#13223B]/95 to-[#0E1A2F]/98 border border-white/10 hover:border-amber-400/50 overflow-hidden shadow-xl hover:shadow-[0_20px_50px_-10px_rgba(245,158,11,0.25)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Vehicle Image Showcase Area */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
                  <picture>
                    <source srcSet={vehicle.featuredImage} type="image/webp" />
                    <img
                      src={vehicle.fallback || vehicle.featuredImage}
                      alt={vehicle.name}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-95"
                      loading="lazy"
                    />
                  </picture>

                  {/* Gradient Scrim for seamless blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A2F] via-[#0E1A2F]/25 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    {/* Category Badge */}
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg tracking-wide uppercase">
                      {vehicle.category}
                    </span>

                    {/* Certified Badge */}
                    <span className="px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-[#0A1322]/85 text-emerald-400 border border-emerald-400/30 backdrop-blur-md flex items-center gap-1 shadow-md">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>100% Certified</span>
                    </span>
                  </div>

                  {/* Best For Tag at Bottom Left */}
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-200 bg-[#0B1526]/90 px-3 py-1.5 rounded-lg backdrop-blur-md border border-amber-400/25 shadow-md">
                      <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                      <span className="truncate">{vehicle.bestFor}</span>
                    </div>
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3.5 group-hover:text-amber-300 transition-colors duration-300 tracking-tight leading-snug">
                    {vehicle.name}
                  </h3>

                  {/* Specs Matrix */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-xs text-slate-200 mb-5">
                    <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-white/[0.04] border border-white/5 group-hover:border-amber-400/20 transition-all">
                      <Users className="w-4 h-4 text-amber-400 mb-1" />
                      <span className="font-bold text-white text-[11px] sm:text-xs">
                        {vehicle.seats}
                      </span>
                    </div>

                    <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-white/[0.04] border border-white/5 group-hover:border-amber-400/20 transition-all">
                      <Briefcase className="w-4 h-4 text-amber-400 mb-1" />
                      <span className="font-bold text-white text-[11px] sm:text-xs">
                        {vehicle.bags}
                      </span>
                    </div>

                    <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-white/[0.04] border border-white/5 group-hover:border-amber-400/20 transition-all">
                      <Wind className="w-4 h-4 text-amber-400 mb-1" />
                      <span className="font-bold text-white text-[11px] sm:text-xs">
                        Full AC
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-2">
                    {vehicle.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2.5 text-xs text-slate-200 font-medium"
                      >
                        <span className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 sm:p-7 pt-0 flex items-center gap-2.5">
                <a
                  href={`https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
                    `Hello Das Travels, I am interested in booking: ${vehicle.name} (${vehicle.category}). Please let me know rates and availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Book on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-slate-200 hover:text-white transition-all flex items-center justify-center"
                  title="Call Now"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury Fleet Assurance Strip */}
        <div className="mt-14 sm:mt-18 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-[#0D1728]/80 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs sm:text-sm font-bold text-white">100% Sanitized</h5>
              <p className="text-[11px] text-slate-300">Cleaned before every trip</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs sm:text-sm font-bold text-white">24/7 Ready Dispatch</h5>
              <p className="text-[11px] text-slate-300">Emergency & scheduled rides</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs sm:text-sm font-bold text-white">Verified Chauffeurs</h5>
              <p className="text-[11px] text-slate-300">Courteous & experienced</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
              <BadgePercent className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs sm:text-sm font-bold text-white">Transparent Pricing</h5>
              <p className="text-[11px] text-slate-300">Zero hidden surcharges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
