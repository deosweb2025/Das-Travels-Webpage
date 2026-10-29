import { useRef } from "react";
import { siteData } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import { Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { gsap } from "../animations/gsapConfig";
import { useGsap } from "../hooks/useGsap";

export default function About() {
  const sectionRef = useRef(null);

  useGsap(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".about-img-left",
      { opacity: 0.3, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          once: true,
        },
        clearProps: "all",
      }
    );

    gsap.fromTo(
      ".about-content-right",
      { opacity: 0.3, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          once: true,
        },
        clearProps: "all",
      }
    );

    gsap.fromTo(
      ".about-highlight-card",
      { opacity: 0.3, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
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
    <section id="about" ref={sectionRef} className="py-20 sm:py-28 bg-gradient-to-b from-[#0A1220] via-[#0F1B2E] to-[#0A1322] relative overflow-hidden w-full">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <SectionHeading
          eyebrow="Who We Are"
          title="Driven by Trust, Dedicated to"
          highlight="Your Journey"
          description="A premier travel enterprise in Barasat rooted in safety, punctuality, and royal hospitality."
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
          {/* Left Column: Visual Composition with High-End Chauffeur Hospitality Image */}
          <div className="about-img-left lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none pb-6 sm:pb-8">
              
              {/* Primary Image: Professional Executive Chauffeur Hospitality */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85),0_0_30px_rgba(245,158,11,0.15)] bg-[#111D33] group w-full">
                <picture>
                  <source srcSet="/assets/enhanced/about_hospitality.webp" type="image/webp" />
                  <img
                    src="/assets/enhanced/about_hospitality.jpg"
                    alt="Das Travels Chauffeur Hospitality & Executive Travel"
                    className="w-full h-72 sm:h-96 md:h-[420px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-[0.98] contrast-[1.05]"
                    loading="lazy"
                  />
                </picture>
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080E1C]/90 via-[#080E1C]/20 to-transparent" />
                
                {/* Image Bottom Callout */}
                <div className="absolute bottom-3.5 sm:bottom-5 left-3.5 sm:left-5 right-3.5 sm:right-5">
                  <div className="w-8 h-1 bg-amber-400 rounded-full mb-1.5 shadow-[0_0_8px_#f59e0b]" />
                  <span className="text-[11px] sm:text-xs font-black text-amber-300 uppercase tracking-wider block">
                    Royal Chauffeur Hospitality
                  </span>
                  <p className="text-white text-xs sm:text-sm font-bold">
                    Trained, Courteous & Verified Professional Drivers
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Card: Flagship Innova Crysta */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-40 sm:w-56 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(245,158,11,0.25)] bg-[#0C1527] backdrop-blur-xl z-10">
                <picture>
                  <source srcSet="/assets/enhanced/hero_innova.webp" type="image/webp" />
                  <img
                    src="/assets/enhanced/hero_innova.jpg"
                    alt="Das Travels Flagship Innova Crysta"
                    className="w-full h-24 sm:h-36 object-cover"
                    loading="lazy"
                  />
                </picture>
                <div className="p-1.5 sm:p-2.5 bg-[#09111E] text-center border-t border-amber-400/30">
                  <span className="text-[10px] sm:text-xs font-black text-amber-400 block truncate">
                    Toyota Innova Crysta
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-300 font-medium">
                    VIP & Wedding Fleet
                  </span>
                </div>
              </div>

              {/* Owner Experience Badge with Vector Shield Emblem */}
              <div className="absolute -top-3 -left-2 sm:-top-5 sm:-left-4 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 font-black shadow-[0_10px_25px_-5px_rgba(245,158,11,0.5)] border border-amber-200 flex items-center gap-2 sm:gap-2.5 z-10">
                <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 drop-shadow">
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M50 6 L86 19 C86 52 70 82 50 94 C30 82 14 52 14 19 Z" fill="#0E1728" stroke="#FFFFFF" strokeWidth="4" />
                    <path d="M28 35 H72 M50 35 V66" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
                    <path d="M36 35 H52 C65 35 72 43 72 50.5 C72 58 65 66 52 66 H36" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                    <polygon points="50,15 52,21 58,23 52,25 50,31 48,25 42,23 48,21" fill="#F59E0B" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-900 leading-tight">
                    Proprietor
                  </div>
                  <div className="text-xs sm:text-sm font-black text-black leading-tight">
                    {siteData.company.owner}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Storytelling & Proof */}
          <div className="about-content-right lg:col-span-7 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-bold text-amber-300 mb-3 sm:mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Official Business Profile</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 sm:mb-5 leading-tight">
              "We Don't Just Drive Vehicles — <br className="hidden sm:inline" />
              <span className="gold-gradient-text">We Craft Safe Memories."</span>
            </h3>

            <div className="space-y-3 sm:space-y-4 text-slate-200 text-xs sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
              {siteData.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Address & Landmark Callout */}
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#111E33] border border-amber-400/35 mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 shadow-xl">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="p-2 sm:p-2.5 rounded-xl bg-amber-400/20 text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Headquarters Booking Desk</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-relaxed break-words">
                    {siteData.location.address}
                  </p>
                </div>
              </div>
              <a
                href="#location"
                className="shrink-0 text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4 self-end sm:self-center cursor-pointer"
              >
                View Map →
              </a>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {siteData.about.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="about-highlight-card rounded-xl sm:rounded-2xl p-4 bg-gradient-to-b from-[#13223A] to-[#0D1829] border border-white/10 hover:border-amber-400/40 transition-all duration-300 shadow-lg hover:shadow-amber-500/10 group"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed pl-8">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}