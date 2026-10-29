import { useRef } from "react";
import { siteData } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import {
  ShieldCheck,
  UserCheck,
  Clock,
  IndianRupee,
  Car,
  PhoneCall,
  MapPin,
  Star,
} from "lucide-react";
import { gsap } from "../animations/gsapConfig";
import { useGsap } from "../hooks/useGsap";

const iconMap = {
  ShieldCheck: ShieldCheck,
  UserCheck: UserCheck,
  Clock: Clock,
  IndianRupee: IndianRupee,
  Car: Car,
  PhoneCall: PhoneCall,
};

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useGsap(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".pillar-card",
      { opacity: 0.3, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.06,
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
      ".route-card",
      { opacity: 0.3, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".routes-grid",
          start: "top 95%",
          once: true,
        },
        clearProps: "all",
      }
    );
  }, sectionRef);

  return (
    <section id="why-us" ref={sectionRef} className="py-20 sm:py-24 bg-gradient-to-b from-[#121E34] via-[#172845] to-[#132037] relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading
          eyebrow="The Das Travels Advantage"
          title="Why Commuters & Families Choose"
          highlight="Das Travels"
          description="Built on punctuality, pristine safety standards, and transparent fares—trusted across Barasat and Kolkata."
        />

        {/* 6 Value Pillars Grid */}
        <div className="pillars-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20 w-full">
          {siteData.whyChooseUs.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="pillar-card rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#1C2E4D] to-[#15233D] border border-white/10 hover:border-amber-400/40 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-4 sm:mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Popular Travel Routes */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Frequently Traveled Highways
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Popular Outstation & Transfer Routes
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal">
              Fixed, competitive pricing with doorstep pickup from Barasat & Kolkata.
            </p>
          </div>

          <div className="routes-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full">
            {siteData.popularRoutes.map((route, rIdx) => (
              <div
                key={rIdx}
                className="route-card rounded-xl bg-[#1A2C49] border border-white/10 hover:border-amber-400/40 p-4 sm:p-5 transition-all flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {route.from}
                    </span>
                    <span className="text-slate-400">➔</span>
                    <span>{route.to}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5">{route.to}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {route.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-300">
                    Est. Duration: <strong className="text-white">{route.time}</strong>
                  </span>
                  <a
                    href={`https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
                      `Hello Das Travels, I want to inquire about a cab from ${route.from} to ${route.to}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-amber-400 hover:text-amber-300"
                  >
                    Get Fare →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Customer Testimonials */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Verified Feedback
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              What Travelers Say About Das Travels
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 w-full">
            {siteData.testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#1C2E4D] to-[#15233D] border border-white/10 relative flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-5 sm:mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-bold text-white">{t.name}</h5>
                    <span className="text-xs text-amber-300 font-medium">{t.role}</span>
                  </div>
                  <span className="text-[11px] text-slate-300">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
