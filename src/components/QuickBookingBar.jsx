import { useState } from "react";
import { siteData } from "../data/siteData";
import { MapPin, Navigation, Calendar, Car, Send, Sparkles } from "lucide-react";

export default function QuickBookingBar() {
  const [pickup, setPickup] = useState("Barasat / Kolkata");
  const [destination, setDestination] = useState("Digha / Mandarmani");
  const [date, setDate] = useState("");
  const [vehicle, setVehicle] = useState("Toyota Innova Crysta");
  const [tripType, setTripType] = useState("Outstation Roundtrip");

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Das Travels (Ranjit Das),\nI would like to inquire about a cab/vehicle booking:\n• Pickup: ${pickup}\n• Destination: ${destination}\n• Date: ${date || "Flexible / Immediate"}\n• Vehicle: ${vehicle}\n• Trip Type: ${tripType}\nPlease share fare quote and vehicle availability.`;
    const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative z-30 mt-4 sm:-mt-8 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full">
      <div className="relative overflow-hidden bg-gradient-to-b from-[#13223B]/95 via-[#0E1A2E]/95 to-[#091220]/98 border border-amber-400/40 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(245,158,11,0.15)] ring-1 ring-white/10 backdrop-blur-2xl w-full">
        {/* Top Gold Light Hairline Accent */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/70 to-transparent pointer-events-none" />

        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 border-b border-white/10 pb-3.5 sm:pb-5">
          <div>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-amber-300 flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>VIP Rapid Fare Estimate & Instant Dispatch</span>
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
              Plan Your Journey with <span className="gold-gradient-text">Das Travels</span>
            </h3>
          </div>

          {/* Trip Type Luxury Pills: 2x2 grid on mobile, flex on desktop */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-1.5 sm:gap-2 text-xs w-full sm:w-auto">
            {["Outstation Roundtrip", "Airport Transfer", "Local Hourly", "Wedding Event"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setTripType(type)}
                className={`px-3 py-1.5 rounded-lg sm:rounded-full font-bold text-[10px] sm:text-xs transition-all cursor-pointer text-center truncate ${
                  tripType === type
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/30 border border-amber-300/80"
                    : "bg-white/[0.05] text-slate-300 hover:text-white hover:bg-white/[0.12] border border-white/10"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Booking Form Grid */}
        <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end">
          {/* Pickup */}
          <div>
            <label className="block text-xs font-bold text-slate-200 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Pickup Location</span>
            </label>
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="e.g. Barasat, Kolkata Airport"
              className="w-full px-3.5 py-3 rounded-xl bg-[#091220]/90 border border-slate-700/80 hover:border-amber-400/50 focus:border-amber-400 text-white text-sm focus:outline-none placeholder:text-slate-500 font-medium min-h-[46px] transition-all shadow-inner"
              required
            />
          </div>

          {/* Destination */}
          <div>
            <label className="block text-xs font-bold text-slate-200 mb-1.5 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Destination / Drop</span>
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="e.g. Digha, Puri, Darjeeling"
              className="w-full px-3.5 py-3 rounded-xl bg-[#091220]/90 border border-slate-700/80 hover:border-amber-400/50 focus:border-amber-400 text-white text-sm focus:outline-none placeholder:text-slate-500 font-medium min-h-[46px] transition-all shadow-inner"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-xs font-bold text-slate-200 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Journey Date</span>
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl bg-[#091220]/90 border border-slate-700/80 hover:border-amber-400/50 focus:border-amber-400 text-white text-sm focus:outline-none font-medium min-h-[46px] transition-all shadow-inner"
            />
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block text-xs font-bold text-slate-200 mb-1.5 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Preferred Vehicle</span>
            </label>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl bg-[#091220]/90 border border-slate-700/80 hover:border-amber-400/50 focus:border-amber-400 text-white text-sm focus:outline-none font-medium min-h-[46px] transition-all shadow-inner cursor-pointer"
            >
              <option value="Maruti Suzuki Swift">Maruti Suzuki Swift (Hatchback)</option>
              <option value="Maruti Suzuki Dzire">Maruti Suzuki Dzire (Sedan)</option>
              <option value="Toyota Innova Crysta">Toyota Innova Crysta (Luxury 7-Seater)</option>
              <option value="Mahindra Scorpio / SUV">Mahindra Scorpio / SUV</option>
              <option value="Force 17-Seater Traveller">Force 17-Seater Tempo Traveller</option>
              <option value="Tata Starbus Prime AC Coach">Tata Starbus Prime AC Coach (Bus)</option>
            </select>
          </div>

          {/* Luxury WhatsApp Submit CTA */}
          <div className="w-full">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.5),0_0_20px_rgba(16,185,129,0.25)] border border-emerald-300/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[46px]"
            >
              <Send className="w-4 h-4 shrink-0 drop-shadow" />
              <span>Get WhatsApp Quote</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}