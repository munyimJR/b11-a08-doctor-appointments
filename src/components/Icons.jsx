export function BrandMark({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="currentColor" />
      <path
        d="M16 7.5v17M7.5 16h17"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SocialIcon({ type }) {
  const sharedProps = {
    viewBox: "0 0 24 24",
    className: "size-5",
    fill: "currentColor",
    "aria-hidden": "true",
  };

  if (type === "facebook") {
    return (
      <svg {...sharedProps}>
        <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.7c0-.9.2-1.5 1.6-1.5h1.7V4.5c-.3 0-1.3-.1-2.5-.1-2.6 0-4.4 1.6-4.4 4.5v2H7.4V14h2.5v8h3.6Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg {...sharedProps}>
        <path d="M6.3 8.4A1.8 1.8 0 1 1 6.3 5a1.8 1.8 0 0 1 0 3.4ZM4.7 9.6h3.1V22H4.7V9.6Zm5 0h3v1.7h.1c.4-.8 1.5-1.9 3.3-1.9 3.5 0 4.1 2.3 4.1 5.2V22h-3.1v-6.4c0-1.5 0-3.4-2-3.4s-2.3 1.6-2.3 3.3V22H9.7V9.6Z" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <path d="M8.3 20.8 4.5 12 8.3 3.2h3.5L7.9 12l3.9 8.8H8.3Zm11.4-17.6h3.5L16.6 12l6.6 8.8h-3.5L13 12l6.7-8.8Z" />
    </svg>
  );
}

export function FeatureGlyph({ label }) {
  const colors = {
    doctors: "bg-blue-100 text-blue-600",
    reviews: "bg-amber-100 text-amber-600",
    patients: "bg-emerald-100 text-emerald-600",
    staff: "bg-rose-100 text-rose-600",
  };

  return (
    <div
      className={`grid size-12 place-items-center rounded-2xl ${colors[label] ?? "bg-slate-100 text-slate-600"}`}
    >
      <span className="text-xl font-black">
        {label === "doctors"
          ? "🩺"
          : label === "reviews"
            ? "⭐"
            : label === "patients"
              ? "👥"
              : "🏥"}
      </span>
    </div>
  );
}
