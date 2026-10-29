import { useRef } from "react";
import { siteData } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import {
  Compass,
  Plane,
  HeartHandshake,
  Clock,
  Bus,
  Users,
  Check,
  ArrowRight,
  Phone,
  Sparkles,
} from "lucide-react";
import { gsap } from "../animations/gsapConfig";
import { useGsap } from "../hooks/useGsap";

const iconMap = {
  MapPin: Compass,
  Plane: Plane,
  HeartHandshake: HeartHandshake,
  Clock: Clock,
  Bus: Bus,
  Users: Users,
};

export default function Services() {
  const sectionRef = useRef(null);

  useGsap(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".service-card",
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
      id="services"
      ref={sectionRef}
      className="py-20 sm:py-28 relative w-full overflow-hidden bg-[#0D1726]"
    >
      {/* Top Header Stage: Perfectly Proportioned Executive Luxury Vehicle Spotlight */}
      <div className="absolute top-0 inset-x-0 h-[480px] sm:h-[580px] lg:h-[660px] pointer-events-none select-none overflow-hidden">
        <picture>
          <source
            srcSet="/assets/enhanced/services_car_bg.webp"
            type="image/webp"
          />
          <img
            src="/assets/enhanced/services_car_bg.jpg"
            alt="Luxury Executive Vehicle"
            className="w-full h-full object-cover object-top sm:object-[center_20%] opacity-75 sm:opacity-85 filter contrast-110 brightness-95"
            loading="lazy"
          />
        </picture>

        {/* Seamless Vignettes: Top edge fade, radial center contrast for title, and bottom fade into cards */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#101B2E] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 sm:h-60 bg-gradient-to-t from-[#0D1726] via-[#0D1726]/85 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(13,23,38,0.55)_60%,#0D1726_100%)]" />

        {/* Amber Headlight Glow Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-[radial-gradient(ellipse,rgba(245,158,11,0.18),transparent_70%)] pointer-events-none" />
      </div>

      {/* Ambient background lighting across the lower cards area */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-[radial-gradient(circle,rgba(245,158,11,0.08),transparent_70%)] pointer-events-none" />

      {/* Subtle luxury geometric micro-lattice texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <SectionHeading
          eyebrow="⭐ VIP Fleet Solutions • What We Offer"
          title="Tailored Travel & Transportation"
          highlight="Services"
          description="From fast city cab dispatch to interstate holiday tours and royal wedding fleets, Das Travels has you covered across West Bengal & Pan-India."
        />

        {/* Services Grid with Continuous Rotating Border Animation */}
        <div className="service-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {siteData.services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Compass;

            return (
              <div
                key={service.id}
                className="service-card group relative p-[2px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_20px_50px_-12px_rgba(245,158,11,0.3)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Continuous Rotating Conic Border Beam (Mobile and Laptop/Desktop Both) */}
                <div
                  className="absolute -inset-[150%] border-beam-dual-gold animate-border-spin pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    animationDuration: "5.5s",
                    animationDelay: `${idx * -0.9}s`,
                  }}
                />

                {/* Subtle Inner Ambient Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[14px] sm:rounded-[22px]" />

                {/* Card Inner Container (Solid dark luxury tone isolating the animated border) */}
                <div className="relative h-full w-full rounded-[14px] sm:rounded-[22px] bg-gradient-to-b from-[#14233C]/95 via-[#0E1A2E]/95 to-[#0A1322]/98 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between border border-amber-400/20 group-hover:border-amber-400/40 transition-colors duration-500">
                  <div>
                    {/* Top Row: Service Medallion & Card Number */}
                    <div className="flex items-center justify-between mb-5 sm:mb-6">
                      <div className="relative w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent border border-amber-400/35 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.15)] group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-slate-950 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all duration-500">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                      </div>
                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Tagline Eyebrow */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-amber-300 mb-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span>{service.tagline}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2.5 group-hover:text-amber-300 transition-colors duration-300 tracking-tight leading-snug">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 sm:mb-6 font-normal">
                      {service.desc}
                    </p>

                    {/* Bullet Features */}
                    <div className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8 pt-3 border-t border-white/5">
                      {service.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200"
                        >
                          <span className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span className="font-medium text-slate-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link Row */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2.5">
                    <a
                      href={`https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
                        `Hello Das Travels, I want to book: ${service.title}. Please provide rates and details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <span>Book on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                      href={`tel:${siteData.contact.phone}`}
                      className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all"
                    >
                      <Phone className="w-3 h-3 text-amber-400" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Outstation Tour Banner Strip with Rotating Border Beam */}
        <div className="mt-14 sm:mt-20 relative p-[2px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Continuous Rotating Border Beam */}
          <div
            className="absolute -inset-[150%] border-beam-dual-gold animate-border-spin pointer-events-none opacity-80"
            style={{ animationDuration: "7s" }}
          />

          <div className="relative rounded-[22px] bg-gradient-to-r from-[#172744] via-[#1A2D4E] to-[#122038] p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 border border-amber-400/30">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-xs font-bold tracking-wider text-amber-300 uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Customized VIP Itineraries</span>
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mt-1">
                Need a Customized Tour Package or Wedding Convoy?
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-xl leading-relaxed">
                Talk directly with proprietor <strong className="text-amber-300">Ranjit Das</strong> for special corporate agreements, multi-day pilgrimage tours, or family holiday packages across India.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center md:justify-end gap-3 shrink-0 w-full md:w-auto">
              <a
                href={`tel:${siteData.contact.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-lg hover:shadow-amber-500/25 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {siteData.contact.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello Ranjit Das, I need a custom package for our upcoming trip."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/25 transition-colors"
              >
                <span>Message on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
