import { useRef } from "react";
import { siteData } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import { MapPin, Navigation, Clock, Phone, Mail, ExternalLink } from "lucide-react";
import { gsap } from "../animations/gsapConfig";
import { useGsap } from "../hooks/useGsap";

export default function LocationSection() {
  const sectionRef = useRef(null);

  useGsap(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".location-card-info",
      { opacity: 0.3, x: -25 },
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
      ".location-map-frame",
      { opacity: 0.3, x: 25 },
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
  }, sectionRef);

  return (
    <section id="location" ref={sectionRef} className="py-20 sm:py-24 bg-gradient-to-b from-[#121F35] via-[#172844] to-[#132037] relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading
          eyebrow="Our Physical Office & Service Hub"
          title="Visit Us or Request Doorstep"
          highlight="Pickup in Barasat"
          description="Conveniently situated at Bhadrabari More, Nabapally (near Axis Bank ATM) with direct highway connectivity."
        />

        <div className="location-container grid lg:grid-cols-12 gap-8 items-stretch w-full">
          {/* Left Column: Detailed Address & Coordinates Card */}
          <div className="location-card-info lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#1C2E4D] to-[#14233C] border-2 border-amber-400/35 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-xs font-bold text-amber-300 mb-6">
                <MapPin className="w-3.5 h-3.5" />
                <span>Headquarters & Booking Desk</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-1">
                {siteData.company.name}
              </h3>
              <p className="text-sm font-bold text-amber-400 mb-6">
                Proprietor: {siteData.company.owner}
              </p>

              {/* Exact Address formatted as requested */}
              <div className="space-y-3.5 sm:space-y-4 text-sm text-slate-200 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.05] border border-white/10">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-300 font-bold block mb-1">
                      Full Address
                    </span>
                    <strong className="text-white text-sm font-semibold leading-relaxed block">
                      BHADRABARI MORE , NABAPALLY , BARASAT , ( NEAR AXIS BANK ATM ) KOLKATA, North 24 Parganas, West Bengal, 700126
                    </strong>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.05] border border-white/10">
                  <Navigation className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-300 font-bold block mb-1">
                      Prominent Landmark
                    </span>
                    <span className="text-white text-sm font-medium">
                      Near Axis Bank ATM, Nabapally, Barasat
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.05] border border-white/10">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-300 font-bold block mb-1">
                      Operating Hours
                    </span>
                    <span className="text-emerald-300 font-bold text-sm">
                      Open 24 Hours / 7 Days a Week (Round-the-clock dispatch)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.05] border border-white/10">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-300 font-bold block mb-1">
                      Direct Hotlines
                    </span>
                    <a
                      href={`tel:${siteData.contact.phone}`}
                      className="text-white hover:text-amber-400 font-bold block"
                    >
                      {siteData.contact.phoneDisplay}
                    </a>
                    <a
                      href={`tel:${siteData.contact.secondaryPhone}`}
                      className="text-slate-300 hover:text-white text-xs block mt-0.5"
                    >
                      {siteData.contact.secondaryPhoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.05] border border-white/10">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-300 font-bold block mb-1">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${siteData.contact.email}`}
                      className="text-white hover:text-amber-400 font-semibold break-all"
                    >
                      {siteData.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Directions Button */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={siteData.location.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions On Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="location-map-frame lg:col-span-7 rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative min-h-[420px] bg-[#121E33] w-full">
            <iframe
              title="Google Map Location of Das Travels, Bhadrabari More, Nabapally, Barasat"
              src="https://maps.google.com/maps?q=Bhadrabari+More,+Nabapally,+Barasat,+Kolkata,+West+Bengal+700126&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0 filter contrast-105"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-[#111C30]/95 border border-amber-400/30 px-4 py-2.5 rounded-xl backdrop-blur-md text-xs text-white shadow-xl pointer-events-none">
              <span className="font-black text-amber-400 block text-sm">DAS TRAVELS</span>
              <span className="text-xs text-slate-300">Nabapally, Barasat 700126</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
