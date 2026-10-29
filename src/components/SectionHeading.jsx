export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  centered = true,
  className = "",
}) {
  return (
    <div
      className={`relative mb-8 sm:mb-12 md:mb-16 ${
        centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-2.5 sm:mb-4 border border-amber-500/30 bg-amber-500/10 text-amber-400 ${
            centered ? "mx-auto" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
        {title}{" "}
        {highlight && (
          <span className="gold-gradient-text block sm:inline">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
          {description}
        </p>
      )}

      <div
        className={`mt-3 sm:mt-4 h-1 w-16 sm:w-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
