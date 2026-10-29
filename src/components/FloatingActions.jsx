import { useState } from "react";
import { siteData } from "../data/siteData";
import { Phone } from "lucide-react";

// Official WhatsApp icon (NOT a generic message icon)
function WhatsAppIcon({ className = "w-5 h-5 sm:w-6 sm:h-6" }) {
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

export default function FloatingActions() {
  const [callHovered, setCallHovered] = useState(false);
  const [waHovered, setWaHovered] = useState(false);

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3 pointer-events-auto">
      {/* Floating Call Button */}
      <a
        href={`tel:${siteData.contact.phone}`}
        onMouseEnter={() => setCallHovered(true)}
        onMouseLeave={() => setCallHovered(false)}
        className="group relative flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 transform hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/25"
        aria-label="Call Das Travels now"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-amber-400 opacity-25 animate-ping pointer-events-none" />

        {/* Tooltip on desktop */}
        <div
          className={`hidden md:block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 border border-amber-500/40 text-xs font-bold text-amber-300 shadow-xl whitespace-nowrap transition-all duration-200 pointer-events-none ${
            callHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          Call: {siteData.contact.phoneDisplay}
        </div>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
          siteData.contact.whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setWaHovered(true)}
        onMouseLeave={() => setWaHovered(false)}
        className="group relative flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transform hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/25"
        aria-label="Chat on WhatsApp with Das Travels"
      >
        <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />

        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* Tooltip on desktop */}
        <div
          className={`hidden md:block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 border border-emerald-500/40 text-xs font-bold text-emerald-400 shadow-xl whitespace-nowrap transition-all duration-200 pointer-events-none ${
            waHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          Chat on WhatsApp (24/7)
        </div>
      </a>
    </div>
  );
}
