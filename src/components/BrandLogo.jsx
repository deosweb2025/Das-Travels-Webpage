export default function BrandLogo({
  size = "md",
  showTagline = true,
  className = "",
  orientation = "horizontal", // "horizontal" or "vertical"
}) {
  // Dimensions for the icon based on size prop
  const iconDimensions = {
    sm: "w-8 h-8",
    md: "w-10 h-10 sm:w-11 sm:h-11",
    lg: "w-12 h-12 sm:w-14 sm:h-14",
    xl: "w-16 h-16 sm:w-20 sm:h-20",
  }[size] || "w-10 h-10 sm:w-11 sm:h-11";

  const titleSizes = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
    xl: "text-3xl sm:text-4xl",
  }[size] || "text-lg sm:text-2xl";

  const taglineSizes = {
    sm: "text-[9px]",
    md: "text-[10px] sm:text-[11px]",
    lg: "text-xs sm:text-sm",
    xl: "text-sm",
  }[size] || "text-[10px] sm:text-[11px]";

  return (
    <div
      className={`group flex ${
        orientation === "vertical"
          ? "flex-col items-center text-center gap-2"
          : "items-center gap-2.5 sm:gap-3"
      } ${className}`}
    >
      {/* Precision Vector Emblem Icon */}
      <div
        className={`${iconDimensions} relative shrink-0 transition-transform duration-300 group-hover:scale-105`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Multi-stop Luxury Gold Foil Gradient */}
            <linearGradient id="dtGoldFoil" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF4B8" />
              <stop offset="25%" stopColor="#FBBF24" />
              <stop offset="55%" stopColor="#F59E0B" />
              <stop offset="85%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>

            {/* Inner Shield Twilight Gradient */}
            <linearGradient id="dtShieldCore" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E3154" />
              <stop offset="50%" stopColor="#14223A" />
              <stop offset="100%" stopColor="#0B1322" />
            </linearGradient>

            {/* Soft Ambient Gold Glow */}
            <filter id="dtEmblemGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#F59E0B" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Exterior Hex-Shield Silhouette */}
          <path
            d="M50 6 L86 19 C86 52 70 82 50 94 C30 82 14 52 14 19 Z"
            fill="url(#dtShieldCore)"
            stroke="url(#dtGoldFoil)"
            strokeWidth="3"
            filter="url(#dtEmblemGlow)"
          />

          {/* Delicate Inset Accent Line */}
          <path
            d="M50 13 L79 23 C79 50 66 75 50 86 C34 75 21 50 21 23 Z"
            fill="none"
            stroke="rgba(251, 191, 36, 0.35)"
            strokeWidth="1.2"
          />

          {/* Dynamic Highway / Travel Ribbon Curves */}
          <path
            d="M32 73 C42 67 58 67 68 73"
            stroke="url(#dtGoldFoil)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M38 78 C45 74 55 74 62 78"
            stroke="url(#dtGoldFoil)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Stylized Monogram: Combined D & T Architecture */}
          {/* Main Gold "T" Backbone & Crossbar */}
          <path
            d="M28 35 H72 M50 35 V66"
            stroke="url(#dtGoldFoil)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Interlocking Platinum White "D" Wing */}
          <path
            d="M36 35 H52 C65 35 72 43 72 50.5 C72 58 65 66 52 66 H36"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Radiant Apex North Star (Guiding Safe Journeys) */}
          <polygon
            points="50,15 52,21 58,23 52,25 50,31 48,25 42,23 48,21"
            fill="url(#dtGoldFoil)"
          />
        </svg>
      </div>

      {/* Brand Typographic Identity */}
      <div className={`flex flex-col ${orientation === "vertical" ? "items-center" : "min-w-0"}`}>
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`font-black text-white tracking-tight ${titleSizes} drop-shadow-sm`}>
            DAS
          </span>
          <span className={`font-black gold-gradient-text tracking-tight ${titleSizes}`}>
            TRAVELS
          </span>
        </div>

        {showTagline && (
          <div className="mt-1 flex items-center gap-1.5 leading-tight">
            <span
              className={`font-bold tracking-wider text-amber-300 uppercase ${taglineSizes} truncate`}
            >
              Safe Journey, Happy Memories
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-amber-400" />
            <span
              className={`hidden sm:inline-block font-medium text-slate-300 ${taglineSizes} truncate`}
            >
              Ranjit Das
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

