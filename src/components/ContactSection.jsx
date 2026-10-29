import { useState, useRef } from "react";
import { siteData } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  HelpCircle,
  ChevronDown,
  CheckCircle,
  Navigation,
  ExternalLink,
  Clock,
  Sparkles,
  ShieldCheck,
  User,
  Calendar,
  Compass,
  MessageSquare,
} from "lucide-react";
import { gsap } from "../animations/gsapConfig";
import { useGsap } from "../hooks/useGsap";

function WhatsAppIcon({ className = "w-5 h-5" }) {
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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Outstation Trip",
    date: "",
    message: "",
  });
  const [activeFaq, setActiveFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Das Travels (Ranjit Das),\nNew Inquiry from Website:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service: ${formData.service}\n• Travel Date: ${formData.date || "Not specified"}\n• Message / Route: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  useGsap(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".contact-col",
      { opacity: 0.3, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
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
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-28 relative w-full overflow-hidden bg-gradient-to-b from-[#101B2E] via-[#152540] to-[#0D1626]"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

      {/* Subtle luxury geometric micro-lattice texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <SectionHeading
          eyebrow="👑 24/7 VIP CONCIERGE & DISPATCH HUB"
          title="Connect with Ranjit Das &"
          highlight="Das Travels"
          description="Have questions about fares, vehicle availability, or customized holiday tours? Call, WhatsApp, or visit our booking desk in Barasat."
        />

        <div className="contact-grid grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-14 sm:mb-20 w-full">
          {/* Left Column: Direct VIP Owner Concierge Card with Rotating Border Animation */}
          <div className="contact-col lg:col-span-5 relative p-[2px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* Continuous Rotating Border Beam */}
            <div
              className="absolute -inset-[150%] border-beam-dual-gold animate-border-spin pointer-events-none opacity-80"
              style={{ animationDuration: "6s" }}
            />

            <div className="relative h-full w-full rounded-[22px] bg-gradient-to-b from-[#182A48]/95 via-[#12213A]/95 to-[#0E1A2F]/98 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between border border-amber-400/25">
              <div>
                {/* Top Eyebrow Badges */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-400/15 border border-amber-400/30 text-amber-300">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Direct Owner Concierge</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-400/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>24/7 Live</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight leading-snug">
                  Talk Directly With The Owner
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  Proprietor <strong className="text-amber-300 font-bold">{siteData.company.owner}</strong> personally coordinates all bookings, route planning, and vehicle dispatches to ensure guaranteed fair rates and immaculate punctuality.
                </p>

                {/* Contact Channels */}
                <div className="space-y-3.5">
                  {/* Primary Hotline */}
                  <a
                    href={`tel:${siteData.contact.phone}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] hover:bg-amber-500/15 border border-white/10 hover:border-amber-400/40 transition-all duration-300 group shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/25 via-amber-500/15 to-transparent border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                      <Phone className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] text-amber-300 font-bold uppercase tracking-wider block">
                        Primary 24/7 Hotline
                      </span>
                      <span className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors tracking-tight">
                        {siteData.contact.phoneDisplay}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        Alt: {siteData.contact.secondaryPhoneDisplay}
                      </span>
                    </div>
                  </a>

                  {/* Instant WhatsApp Concierge */}
                  <a
                    href={`https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
                      siteData.contact.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/35 hover:border-emerald-400/60 transition-all duration-300 group shadow-md"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 shadow-lg shadow-emerald-600/30 transition-all duration-300">
                      <WhatsAppIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider block">
                        Instant WhatsApp Concierge
                      </span>
                      <span className="text-base sm:text-lg font-black text-white group-hover:text-emerald-200 transition-colors tracking-tight">
                        +91 {siteData.contact.whatsapp}
                      </span>
                      <span className="text-[11px] text-slate-300 block mt-0.5">
                        Average response: Under 5 mins
                      </span>
                    </div>
                  </a>

                  {/* Email Inquiry */}
                  <a
                    href={`mailto:${siteData.contact.email}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 text-slate-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
                        Email Inquiry & Corporate RFP
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-300 transition-colors break-all">
                        {siteData.contact.email}
                      </span>
                    </div>
                  </a>

                  {/* Physical Office Address */}
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] text-amber-300 uppercase tracking-wider block font-bold mb-1">
                          Barasat Office & Booking Desk
                        </span>
                        <p className="text-xs sm:text-sm text-slate-200 leading-snug font-medium">
                          {siteData.location.address}
                        </p>
                        <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Open 24 Hours / 7 Days a Week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <a
                  href={siteData.location.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/25 transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Direct Booking Form */}
          <div className="contact-col lg:col-span-7 relative p-[2px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="relative h-full w-full rounded-[22px] bg-gradient-to-b from-[#182A48]/95 via-[#12213A]/95 to-[#0E1A2F]/98 backdrop-blur-xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between border border-white/10">
              <div>
                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-xs font-bold tracking-wider text-amber-300 uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Quick Fare Estimate & Dispatch</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 tracking-tight">
                    Send Instant Booking Request
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    Fill in your travel details below. Ranjit Das will personally respond on WhatsApp with competitive pricing and car confirmation within 5–10 minutes.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-14 text-center space-y-4">
                    <div className="w-18 h-18 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/30 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                      <CheckCircle className="w-9 h-9" />
                    </div>
                    <h4 className="text-2xl font-black text-white">Inquiry Sent Successfully!</h4>
                    <p className="text-sm text-slate-200 max-w-md mx-auto leading-relaxed">
                      Thank you! Your travel details have been forwarded to Ranjit Das on WhatsApp. We will provide pricing and confirm vehicle availability shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all shadow-md cursor-pointer"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-slate-200 mb-1.5">
                          <User className="w-3.5 h-3.5 text-amber-400" />
                          <span>Your Full Name *</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sen"
                          className="w-full px-4 py-3 rounded-xl bg-[#0B1526]/90 border border-white/15 text-white text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none placeholder:text-slate-400 min-h-[46px] transition-all shadow-inner"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-slate-200 mb-1.5">
                          <Phone className="w-3.5 h-3.5 text-amber-400" />
                          <span>Contact Number / WhatsApp *</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-3 rounded-xl bg-[#0B1526]/90 border border-white/15 text-white text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none placeholder:text-slate-400 min-h-[46px] transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-slate-200 mb-1.5">
                          <Compass className="w-3.5 h-3.5 text-amber-400" />
                          <span>Trip / Service Type</span>
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0B1526]/90 border border-white/15 text-white text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none min-h-[46px] transition-all cursor-pointer shadow-inner"
                        >
                          <option value="Outstation Trip (Digha, Puri, etc.)">Outstation Trip (Digha, Puri, etc.)</option>
                          <option value="Kolkata Airport Transfer (CCU)">Kolkata Airport Transfer (CCU)</option>
                          <option value="Wedding / Ceremony Car Rental">Wedding / Ceremony Car Rental</option>
                          <option value="Local Hourly Rental (Barasat/Kolkata)">Local Hourly Rental (Barasat/Kolkata)</option>
                          <option value="Luxury Tourist AC Coach (Bus)">Luxury Tourist AC Coach (Bus)</option>
                          <option value="17-Seater Force Tempo Traveller">17-Seater Force Tempo Traveller</option>
                        </select>
                      </div>

                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-slate-200 mb-1.5">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          <span>Date of Travel</span>
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0B1526]/90 border border-white/15 text-white text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none min-h-[46px] transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-bold text-slate-200 mb-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                        <span>Pickup Location, Destination & Details</span>
                      </label>
                      <textarea
                        rows="3"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Innova Crysta for 3 days from Barasat to Digha for 5 passengers..."
                        className="w-full px-4 py-3 rounded-xl bg-[#0B1526]/90 border border-white/15 text-white text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none placeholder:text-slate-400 transition-all shadow-inner"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer min-h-[48px]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Instant Inquiry to WhatsApp</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-300 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>100% Confidential • Dispatched directly to Ranjit Das for instant confirmation.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Google Map in Luxury Frame */}
        <div
          id="location"
          className="mb-14 sm:mb-20 relative p-[2px] rounded-3xl overflow-hidden shadow-2xl border border-white/15 hover:border-amber-400/40 transition-colors bg-[#0D1829] w-full scroll-mt-28"
        >
          <iframe
            title="Google Map Location of Das Travels, Bhadrabari More, Nabapally, Barasat"
            src="https://maps.google.com/maps?q=Bhadrabari+More,+Nabapally,+Barasat,+Kolkata,+West+Bengal+700126&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full min-h-[340px] sm:min-h-[420px] border-0 filter contrast-105"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Floating Luxury Location Pill */}
          <div className="absolute top-4 left-4 bg-[#0A1322]/95 border border-amber-400/35 px-4 py-3 rounded-2xl backdrop-blur-xl text-xs text-white shadow-2xl pointer-events-none max-w-xs sm:max-w-sm">
            <span className="font-black text-amber-400 block text-xs sm:text-sm tracking-wide">
              DAS TRAVELS • HEADQUARTERS
            </span>
            <span className="text-[11.5px] text-slate-300 block mt-0.5 font-medium">
              Bhadrabari More, Nabapally (Near Axis Bank ATM), Barasat, Kolkata 700126
            </span>
            <div className="mt-2 flex items-center gap-1.5 text-[10.5px] text-emerald-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>24/7 Car Rental & Tour Operator Desk</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto pt-6 border-t border-white/10 w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-xs font-bold tracking-wider text-amber-300 uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Clear & Transparent Answers</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {siteData.faq.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 hover:border-amber-400/35 bg-[#122038]/80 backdrop-blur-md overflow-hidden shadow-md transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 text-sm sm:text-base font-bold text-white hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-300 transition-transform duration-300 shrink-0 ${
                      activeFaq === idx ? "rotate-180 text-amber-400" : ""
                    }`}
                  />
                </button>

                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-200 leading-relaxed border-t border-white/10 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
