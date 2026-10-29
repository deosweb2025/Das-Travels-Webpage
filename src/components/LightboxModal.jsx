import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "../data/siteData";

function WhatsAppIcon({ className = "w-4 h-4" }) {
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

export default function LightboxModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
}) {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handlePrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setZoomLevel(1);
      onIndexChange((currentIndex - 1 + images.length) % images.length);
    },
    [currentIndex, images.length, onIndexChange]
  );

  const handleNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setZoomLevel(1);
      onIndexChange((currentIndex + 1) % images.length);
    },
    [currentIndex, images.length, onIndexChange]
  );

  const toggleZoom = (e) => {
    e?.stopPropagation();
    setZoomLevel((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1));
  };

  // Keyboard navigation & escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentItem = images[currentIndex];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-4 select-none w-screen h-screen overflow-hidden"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div
          className="absolute top-0 left-0 right-0 p-2.5 sm:p-6 flex items-center justify-between z-30 bg-gradient-to-b from-black/80 to-transparent"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-1.5 sm:gap-3">
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 truncate max-w-[120px] sm:max-w-none">
              {currentItem.category}
            </span>
            <span className="text-[11px] sm:text-sm font-mono text-slate-300">
              {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={toggleZoom}
              className="p-1.5 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer min-h-[34px] min-w-[34px] sm:min-h-[40px] sm:min-w-[40px] flex items-center justify-center"
              title="Toggle Zoom"
              aria-label="Toggle Zoom"
            >
              {zoomLevel > 1 ? <ZoomOut className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-amber-400" /> : <ZoomIn className="w-3.5 h-3.5 sm:w-5 sm:h-5" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2.5 rounded-full bg-white/10 hover:bg-red-500 text-white transition-colors cursor-pointer min-h-[34px] min-w-[34px] sm:min-h-[40px] sm:min-w-[40px] flex items-center justify-center"
              title="Close (Esc)"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Previous Navigation Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-1.5 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-4 rounded-full bg-black/70 hover:bg-amber-500 text-white hover:text-black border border-white/20 transition-all cursor-pointer shadow-2xl min-h-[36px] min-w-[36px] sm:min-h-[42px] sm:min-w-[42px] flex items-center justify-center"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-4 h-4 sm:w-7 sm:h-7" />
        </button>

        {/* Next Navigation Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-1.5 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-4 rounded-full bg-black/70 hover:bg-amber-500 text-white hover:text-black border border-white/20 transition-all cursor-pointer shadow-2xl min-h-[36px] min-w-[36px] sm:min-h-[42px] sm:min-w-[42px] flex items-center justify-center"
          aria-label="Next photo"
        >
          <ChevronRight className="w-4 h-4 sm:w-7 sm:h-7" />
        </button>

        {/* Main Box Screen Display */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center z-20 px-2 sm:px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="overflow-auto max-h-[55vh] sm:max-h-[70vh] rounded-2xl border border-white/10 shadow-2xl bg-black/40 flex items-center justify-center cursor-zoom-in w-full"
            onClick={toggleZoom}
          >
            <img
              src={currentItem.src}
              alt={currentItem.title}
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center center" }}
              className="max-h-[55vh] sm:max-h-[70vh] w-auto max-w-full object-contain transition-transform duration-300"
            />
          </div>

          {/* Bottom Caption & Action Strip */}
          <div className="w-full mt-2.5 sm:mt-4 p-2.5 sm:p-4 rounded-xl bg-slate-900/95 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left">
            <div className="max-w-xl">
              <h4 className="text-xs sm:text-base font-bold text-white line-clamp-1">
                {currentItem.title}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 line-clamp-1">
                {currentItem.desc}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center sm:justify-end">
              <a
                href={`https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
                  `Hello Das Travels, I saw "${currentItem.title}" in your gallery and want to book a similar vehicle.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all whitespace-nowrap"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                <span>Book This</span>
              </a>

              <a
                href={`tel:${siteData.contact.phone}`}
                className="flex-1 sm:flex-initial px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
