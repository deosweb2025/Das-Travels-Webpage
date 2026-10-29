import { useState, useEffect, useRef } from "react";
import { siteData } from "../data/siteData";
import { Phone, ShieldCheck, Clock, Award, Star, ChevronLeft, ChevronRight, Crown, Sparkles } from "lucide-react";
import { gsap } from "../animations/gsapConfig";
import { motion, AnimatePresence } from "framer-motion";

// Official WhatsApp icon
function WhatsAppIcon({ className = "w-4 h-4 sm:w-5 sm:h-5" }) {
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

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef(null);
  const slides = siteData.hero.slides;

  // Exactly 3 seconds rotation as requested
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  // Safe entrance animation with non-zero start & clearProps
  useEffect(() => {
    const scopeElement = heroRef.current || undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text-block",
        { y: 20, opacity: 0.3 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "all",
        }
      );
      gsap.fromTo(
        ".hero-stage-block",
        { scale: 0.98, opacity: 0.3 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          ease: "power2.out",
          clearProps: "all",
        }
      );
    }, scopeElement);

    return () => ctx.revert();
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-[#0A1220] w-full"
    >
      {/* 1. CINEMATIC LUXURY TEXTURE BACKDROP (Light & Dark Gradient Mesh) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <picture>
          <source srcSet="/assets/enhanced/hero_luxury_bg.webp" type="image/webp" />
          <img
            src="/assets/enhanced/hero_luxury_bg.jpg"
            alt="Luxury Automotive Texture Background"
            className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1] scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
          />
        </picture>

        {/* Sophisticated Multi-Layered Light & Dark Gradient Glazes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D18]/95 via-[#0C172B]/80 to-[#080E1C]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080F1D] via-transparent to-[#070C16]" />

        {/* Dynamic Atmospheric Radial Light Blooms */}
        <div className="absolute -top-24 left-1/4 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-amber-500/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-amber-400/10 rounded-full blur-[110px] pointer-events-none" />

        {/* Subtle Luxury Geometric Lattice Overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #F59E0B 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full py-2 sm:py-6">
        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-12 items-center w-full">
          
          {/* TOP ON MOBILE / TOP-LEFT ON DESKTOP: Royal Brand Title & Tagline */}
          <div className="hero-text-block order-1 lg:order-1 lg:col-span-5 lg:col-start-1 lg:row-start-1 text-center lg:text-left space-y-3 sm:space-y-4 w-full">
            {/* Crown Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/15 to-transparent border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-bold backdrop-blur-xl shadow-[0_0_20px_rgba(245,158,11,0.2)] max-w-full">
              <Crown className="w-3.5 h-3.5 text-amber-400 shrink-0 fill-amber-400/30" />
              <span className="truncate tracking-wide uppercase text-[10px] sm:text-[11px]">
                24/7 Premium Car Rental & Tours • Barasat
              </span>
              <Sparkles className="w-3 h-3 text-amber-300 shrink-0 animate-pulse" />
            </div>

            {/* Main Brand Title: Metallic Platinum & Champagne Gold */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-1 sm:mb-2 break-words">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-amber-200 drop-shadow-[0_4px_25px_rgba(245,158,11,0.25)]">
                  DAS TRAVELS
                </span>
              </h1>
              
              {/* Prestige Proprietor Pill */}
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-amber-400/30 backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Proprietor:</span>
                <span className="text-xs sm:text-sm text-amber-400 font-bold tracking-wide">
                  {siteData.company.owner}
                </span>
              </div>
            </div>

            {/* Luxurious Tagline */}
            <p className="text-lg sm:text-2xl lg:text-3xl font-extrabold italic gold-gradient-text leading-snug drop-shadow-[0_2px_12px_rgba(245,158,11,0.35)]">
              "{siteData.company.tagline}"
            </p>
          </div>

          {/* MIDDLE ON MOBILE / RIGHT COLUMN ON DESKTOP: Crystal-Clear Cinematic Vehicle Spotlight */}
          <div
            className="hero-stage-block order-2 lg:order-2 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2 w-full my-2 lg:my-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85),0_0_40px_rgba(245,158,11,0.2)] bg-[#111C30]/90 backdrop-blur-2xl group w-full">
              
              {/* Main Image Stage (Carefully tuned responsive height) */}
              <div className="relative w-full h-[215px] sm:h-[370px] md:h-[450px] overflow-hidden bg-slate-950">
                <AnimatePresence initial={false} mode="sync">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].alt}
                      className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.06]"
                      loading={currentSlide === 0 ? "eager" : "lazy"}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Soft gradient bottom for caption */}
                <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#09111D] via-[#09111D]/60 to-transparent pointer-events-none" />

                {/* Top Badge on Image */}
                <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/30 truncate">
                    <Star className="w-3 h-3 fill-slate-950 text-slate-950 shrink-0" />
                    <span className="truncate">{slides[currentSlide].badge}</span>
                  </span>
                </div>

                {/* Arrow Controls */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-amber-400 text-white hover:text-slate-950 border border-amber-400/40 transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 cursor-pointer shadow-xl z-20 min-h-[34px] min-w-[34px] sm:min-h-[42px] sm:min-w-[42px] flex items-center justify-center backdrop-blur-md"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-amber-400 text-white hover:text-slate-950 border border-amber-400/40 transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 cursor-pointer shadow-xl z-20 min-h-[34px] min-w-[34px] sm:min-h-[42px] sm:min-w-[42px] flex items-center justify-center backdrop-blur-md"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Bottom Caption with Gold Bar Accent */}
                <div className="absolute bottom-2.5 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 pointer-events-none">
                  <div className="w-8 h-1 bg-amber-400 rounded-full mb-1 sm:mb-1.5 shadow-[0_0_8px_#f59e0b]" />
                  <h3 className="text-xs sm:text-base font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] line-clamp-2">
                    {slides[currentSlide].caption}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* LOWER POSITION ON MOBILE / BOTTOM-LEFT ON DESKTOP: Description, Buttons & Trust Badges */}
          <div className="hero-text-block order-3 lg:order-3 lg:col-span-5 lg:col-start-1 lg:row-start-2 text-center lg:text-left space-y-3.5 sm:space-y-5 w-full">
            {/* Supporting Description */}
            <p className="text-xs sm:text-base text-slate-200 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              {siteData.hero.description}
            </p>

            {/* Action Buttons: Ultra-Luxury Gradient Styling */}
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:items-center justify-center lg:justify-start sm:gap-3 pt-1">
              <a
                href={`https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
                  siteData.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs sm:text-base shadow-[0_10px_25px_-5px_rgba(16,185,129,0.45)] hover:shadow-[0_15px_30px_-5px_rgba(16,185,129,0.6)] border border-emerald-400/40 transition-all transform hover:-translate-y-0.5 text-center truncate cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0 drop-shadow" />
                <span className="truncate">Book WhatsApp</span>
              </a>

              <a
                href={`tel:${siteData.contact.phone}`}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-base shadow-[0_10px_25px_-5px_rgba(245,158,11,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(245,158,11,0.65)] border border-amber-300/60 transition-all transform hover:-translate-y-0.5 text-center truncate cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 shrink-0 fill-slate-950" />
                <span className="truncate">Call Now</span>
              </a>
            </div>

            {/* Trust Micro-Pills in Frosted Glass */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-slate-200 font-medium">Sanitized</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-200 font-medium">100% On-Time</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-200 font-medium">Pan-India Permits</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}