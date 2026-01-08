const SectionHeading = ({ kicker, title, subtitle, align = "left" }) => {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`space-y-3 ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--accent)]">
        {kicker}
      </p>
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="text-sm leading-relaxed text-[color:var(--muted)] md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
