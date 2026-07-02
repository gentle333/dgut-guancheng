export default function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* Ground line */}
      <path d="M20 150 Q200 130 380 152" stroke="white" strokeWidth="1" opacity="0.12" fill="none" />

      {/* Trees - left group */}
      <g opacity="0.5">
        <rect x="50" y="105" width="6" height="45" rx="3" fill="white" opacity="0.4" />
        <ellipse cx="53" cy="98" rx="22" ry="28" fill="white" opacity="0.12" />
        <circle cx="40" cy="105" r="14" fill="white" opacity="0.09" />
        <circle cx="66" cy="108" r="12" fill="white" opacity="0.09" />
      </g>

      <g opacity="0.4">
        <rect x="115" y="112" width="5" height="38" rx="3" fill="white" opacity="0.4" />
        <ellipse cx="118" cy="105" rx="18" ry="24" fill="white" opacity="0.1" />
        <circle cx="107" cy="112" r="11" fill="white" opacity="0.08" />
        <circle cx="130" cy="114" r="10" fill="white" opacity="0.08" />
      </g>

      {/* Trees - right group */}
      <g opacity="0.45">
        <rect x="280" y="108" width="6" height="42" rx="3" fill="white" opacity="0.4" />
        <ellipse cx="283" cy="100" rx="20" ry="26" fill="white" opacity="0.11" />
        <circle cx="270" cy="108" r="13" fill="white" opacity="0.08" />
        <circle cx="296" cy="110" r="11" fill="white" opacity="0.08" />
      </g>

      <g opacity="0.35">
        <rect x="340" y="114" width="5" height="36" rx="3" fill="white" opacity="0.4" />
        <ellipse cx="343" cy="107" rx="16" ry="22" fill="white" opacity="0.1" />
      </g>

      {/* Main campus building - soft silhouette */}
      <g opacity="0.55">
        {/* Building body */}
        <rect x="165" y="55" width="70" height="95" rx="6" fill="white" opacity="0.1" />
        {/* Roof */}
        <path d="M155 55 L200 18 L245 55" fill="white" opacity="0.08" />
        {/* Pillars */}
        {[175, 195, 215].map((x, i) => (
          <rect key={`p-${i}`} x={x} y="100" width="4" height="50" rx="2" fill="white" opacity={0.15 + i * 0.03} />
        ))}
        {/* Windows */}
        {[178, 198, 218].map((x, i) => (
          <rect key={`w-${i}`} x={x} y={73} width="14" height={10 + i * 4} rx="3" fill="white" opacity="0.2" />
        ))}
      </g>

      {/* Door */}
      <rect x="192" y="118" width="16" height="32" rx="8" fill="white" opacity="0.12" />

      {/* Floating graduation cap (small, subtle) */}
      <g transform="translate(310, 45)" opacity="0.3">
        <path d="M0 12 L18 0 L36 12 L18 6 Z" fill="white" opacity="0.5" />
        <rect x="22" y="9" width="4" height="14" rx="2" fill="white" opacity="0.4" />
      </g>

      {/* Small book */}
      <g transform="translate(55, 55)" opacity="0.3">
        <rect x="0" y="8" width="28" height="5" rx="2" fill="white" opacity="0.5" />
        <rect x="3" y="2" width="25" height="5" rx="2" fill="white" opacity="0.35" />
        <rect x="5" y="-4" width="15" height="5" rx="2" fill="white" opacity="0.2" />
      </g>

      {/* Stars/dots */}
      {[{ cx: 95, cy: 35 }, { cx: 370, cy: 25 }, { cx: 200, cy: 10 }, { cx: 130, cy: 20 }].map((dot, i) => (
        <circle key={`dot-${i}`} cx={dot.cx} cy={dot.cy} r="1.5" fill="white" opacity="0.18" />
      ))}
    </svg>
  );
}
