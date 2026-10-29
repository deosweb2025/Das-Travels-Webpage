import { useState, useRef } from "react";
import { siteData } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import LightboxModal from "./LightboxModal";
import {
  Maximize2,
  Eye,
  Sparkles,
  Phone,
  ArrowRight,
  Camera,
} from "lucide-react";
import { gsap } from "../animations/gsapConfig";
import { useGsap } from "../hooks/useGsap";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const sectionRef = useRef(null);

  const categories = [
    "All",
    "Weddings & VIP",
    "Buses & Coaches",
    "Sedans & Hatchbacks",
    "SUVs & Utility",
    "Brand & Fleet",
  ];

  const filteredImages =
    activeCategory === "All"
      ? siteData.gallery
      : siteData.gallery.filter((img) => img.category === activeCategory);

  const handleOpenLightbox = (indexInFiltered) => {
    setLightboxIndex(indexInFiltered);
    setLightboxOpen(true);
  };

  useGsap(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".gallery-card",
      { opacity: 0.3, scale: 0.96 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.03,
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
      id="gallery"
      ref={sectionRef}
      className="py-20 sm:py-28 relative w-full overflow-hidden bg-gradient-to-b from-[#0F1A2D] via-[#14233C] to-[#101B2E]"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

      {/* Subtle luxury geometric micro-lattice texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <SectionHeading
          eyebrow="📸 REAL FLEET IN ACTION • GALLERY SHOWCASE"
          title="Explore Our Vehicles in"
          highlight="Real Action"
          description="Click any photograph to launch our interactive full-screen cinema viewer with zoom and direct WhatsApp trip booking."
        />

        {/* Floating Category Filters Dock */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="p-1.5 rounded-2xl bg-[#0D1829]/90 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-full">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? siteData.gallery.length
                  : siteData.gallery.filter((img) => img.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black shadow-[0_0_20px_rgba(245,158,11,0.35)] border border-amber-300 scale-[1.02]"
                      : "text-slate-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10"
                  }`}
                >
                  <span>{cat}</span>{" "}
                  <span className="opacity-75 text-[11px]">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full">
          {filteredImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="gallery-card group relative h-64 sm:h-76 rounded-3xl overflow-hidden bg-slate-950 border border-white/10 hover:border-amber-400/60 cursor-pointer shadow-xl hover:shadow-[0_20px_50px_-10px_rgba(245,158,11,0.25)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-end"
            >
              {/* Photo Image */}
              <picture>
                <source srcSet={item.src} type="image/webp" />
                <img
                  src={item.fallback || item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-95"
                  loading="lazy"
                />
              </picture>

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09111E] via-[#09111E]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Luminous Top Gold Hairline on Hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top Left: Category Pill */}
              <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-full text-[10.5px] font-extrabold uppercase tracking-wider bg-[#0B1424]/90 text-amber-300 border border-amber-400/30 backdrop-blur-md shadow-md">
                  {item.category}
                </span>
              </div>

              {/* Top Right: Expand Icon Medallion */}
              <div className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                <Maximize2 className="w-4 h-4 stroke-[2.2]" />
              </div>

              {/* Bottom Caption Area */}
              <div className="relative z-10 p-4 sm:p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-sm sm:text-base font-black text-white line-clamp-1 group-hover:text-amber-300 transition-colors duration-300 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-1 mt-0.5 font-normal opacity-90">
                  {item.desc}
                </p>

                <div className="mt-2.5 flex items-center gap-1.5 text-[11.5px] font-bold text-amber-400 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to view in cinema mode</span>
                </div>
              </div>
            </div>
          ))}

          {/* Interactive Concierge Booking Card when filtered to complete the visual balance */}
          {activeCategory !== "All" && filteredImages.length % 2 !== 0 && (
            <div className="gallery-card group relative h-64 sm:h-76 rounded-3xl overflow-hidden p-[2px] shadow-xl hover:shadow-[0_20px_50px_-10px_rgba(245,158,11,0.25)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col">
              <div
                className="absolute -inset-[150%] border-beam-dual-gold animate-border-spin pointer-events-none opacity-80"
                style={{ animationDuration: "7s" }}
              />
              <div className="relative h-full w-full rounded-[22px] bg-gradient-to-b from-[#182A48]/95 via-[#12213A]/95 to-[#0E1A2F]/98 p-6 flex flex-col justify-between items-center text-center">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/15 border border-amber-400/35 text-amber-400 flex items-center justify-center mx-auto mb-3 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 mb-1 block">
                    Custom {activeCategory}
                  </span>
                  <h4 className="text-base font-black text-white">
                    Need a Specific Vehicle or Date?
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 max-w-xs leading-relaxed">
                    Message Ranjit Das directly with your requirements for instant availability & best rates.
                  </p>
                </div>

                <div className="w-full flex items-center gap-2 pt-3 border-t border-white/10">
                  <a
                    href={`https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
                      `Hello Das Travels, I want to inquire about vehicles in ${activeCategory}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`tel:${siteData.contact.phone}`}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-slate-200 hover:text-white transition-all"
                    title="Call Now"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Gallery Counter & Full Verification Banner */}
        <div className="mt-12 sm:mt-16 p-4 sm:p-5 rounded-2xl bg-[#0D1828]/80 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">
                Authentic Fleet Archive
              </h5>
              <p className="text-xs text-slate-300">
                Displaying {filteredImages.length} of {siteData.gallery.length} verified photographs from real tours across West Bengal & Pan-India
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
              "Hello Das Travels, I would like to book a trip from your fleet gallery."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-amber-400/15 hover:bg-amber-400 text-amber-300 hover:text-slate-950 border border-amber-400/30 text-xs font-bold transition-all shrink-0 inline-flex items-center gap-2"
          >
            <span>Book Via WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Full Box Screen Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredImages}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
}
