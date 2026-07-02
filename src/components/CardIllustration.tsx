const colors: Record<string, string> = {
  campus: "#006C3C",
  food: "#ea580c",
  dorm: "#2563eb",
  clubs: "#9333ea",
  study: "#d97706",
  nearby: "#e11d48",
};

export default function CardIllustration({ slug }: { slug: string }) {
  const c = colors[slug] ?? "#006C3C";

  return (
    <svg viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full">
      <rect width="280" height="120" rx="12" fill={c} opacity="0.06" />
      {slug === "campus" && (
        <>
          <rect x="100" y="20" width="80" height="90" rx="4" fill={c} opacity="0.18" />
          <path d="M95 20 L140 0 L185 20" fill={c} opacity="0.14" />
          <circle cx="140" cy="50" r="8" fill="white" opacity="0.4" />
          {[110, 130, 150, 170].map((x, i) => (
            <rect key={i} x={x} y={68} width="14" height="10" rx="2" fill="white" opacity={0.3 + i * 0.05} />
          ))}
          <rect x="60" y="70" width="8" height="40" rx="4" fill={c} opacity="0.2" />
          <circle cx="64" cy="64" r="14" fill={c} opacity="0.15" />
          <rect x="212" y="75" width="8" height="35" rx="4" fill={c} opacity="0.2" />
          <circle cx="216" cy="68" r="12" fill={c} opacity="0.15" />
        </>
      )}
      {slug === "food" && (
        <>
          <ellipse cx="140" cy="75" rx="55" ry="18" fill={c} opacity="0.1" />
          <rect x="110" y="28" width="60" height="50" rx="6" fill={c} opacity="0.2" />
          <rect x="120" y="38" width="40" height="20" rx="3" fill="white" opacity="0.5" />
          <circle cx="140" cy="48" r="6" fill={c} opacity="0.25" />
          <line x1="100" y1="82" x2="100" y2="60" stroke={c} strokeWidth="2" opacity="0.2" />
          <line x1="180" y1="82" x2="180" y2="60" stroke={c} strokeWidth="2" opacity="0.2" />
          <path d="M95 82 Q140 96 185 82" stroke={c} strokeWidth="1.5" opacity="0.15" fill="none" />
        </>
      )}
      {slug === "dorm" && (
        <>
          <rect x="80" y="35" width="50" height="75" rx="3" fill={c} opacity="0.2" />
          <rect x="150" y="45" width="50" height="65" rx="3" fill={c} opacity="0.16" />
          {[90, 110].map((x, i) => (
            <rect key={`l-${i}`} x={x} y={46} width="16" height="14" rx="2" fill="white" opacity="0.5" />
          ))}
          {[90, 110].map((x, i) => (
            <rect key={`l2-${i}`} x={x} y={66} width="16" height="14" rx="2" fill="white" opacity="0.4" />
          ))}
          {[160, 180].map((x, i) => (
            <rect key={`r-${i}`} x={x} y={56} width="16" height="14" rx="2" fill="white" opacity="0.5" />
          ))}
          {[160, 180].map((x, i) => (
            <rect key={`r2-${i}`} x={x} y={76} width="16" height="14" rx="2" fill="white" opacity="0.4" />
          ))}
        </>
      )}
      {slug === "clubs" && (
        <>
          <circle cx="100" cy="55" r="22" fill={c} opacity="0.16" />
          <circle cx="140" cy="50" r="18" fill={c} opacity="0.2" />
          <circle cx="180" cy="55" r="22" fill={c} opacity="0.16" />
          <circle cx="120" cy="58" r="8" fill="white" opacity="0.4" />
          <circle cx="160" cy="56" r="6" fill="white" opacity="0.35" />
          <path d="M120 62 L140 80 L160 62" stroke={c} strokeWidth="1.5" opacity="0.2" fill="none" />
          <rect x="95" y="84" width="10" height="18" rx="5" fill={c} opacity="0.15" />
          <rect x="135" y="82" width="10" height="20" rx="5" fill={c} opacity="0.18" />
          <rect x="175" y="84" width="10" height="18" rx="5" fill={c} opacity="0.15" />
        </>
      )}
      {slug === "study" && (
        <>
          <rect x="95" y="58" width="18" height="4" rx="2" fill={c} opacity="0.15" />
          <rect x="95" y="68" width="18" height="4" rx="2" fill={c} opacity="0.12" />
          <rect x="95" y="78" width="14" height="4" rx="2" fill={c} opacity="0.1" />
          <rect x="85" y="30" width="30" height="6" rx="2" fill={c} opacity="0.35" />
          <rect x="88" y="24" width="27" height="6" rx="2" fill={c} opacity="0.25" />
          <rect x="90" y="18" width="16" height="6" rx="2" fill={c} opacity="0.18" />
          <circle cx="170" cy="55" r="18" fill={c} opacity="0.1" />
          <path d="M162 45 L170 38 L178 45 L176 48 L170 42 L164 48 Z" fill={c} opacity="0.3" />
          <circle cx="170" cy="55" r="6" fill={c} opacity="0.2" />
          <path d="M165 50 L170 46 L175 50" stroke={c} strokeWidth="1.5" opacity="0.25" fill="none" />
        </>
      )}
      {slug === "nearby" && (
        <>
          <rect x="70" y="40" width="40" height="55" rx="3" fill={c} opacity="0.15" />
          <rect x="130" y="52" width="35" height="43" rx="3" fill={c} opacity="0.2" />
          <rect x="185" y="35" width="30" height="60" rx="3" fill={c} opacity="0.13" />
          <rect x="76" y="48" width="10" height="8" rx="2" fill="white" opacity="0.4" />
          <rect x="92" y="48" width="10" height="8" rx="2" fill="white" opacity="0.4" />
          <rect x="76" y="62" width="10" height="8" rx="2" fill="white" opacity="0.35" />
          <rect x="136" y="60" width="9" height="7" rx="2" fill="white" opacity="0.4" />
          <rect x="150" y="60" width="9" height="7" rx="2" fill="white" opacity="0.4" />
          <rect x="136" y="73" width="9" height="7" rx="2" fill="white" opacity="0.35" />
          <path d="M30 100 Q140 60 250 100" stroke={c} strokeWidth="1.5" opacity="0.12" fill="none" />
        </>
      )}
    </svg>
  );
}
