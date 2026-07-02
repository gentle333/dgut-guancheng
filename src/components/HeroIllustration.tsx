export default function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ "--primary-svg-color": "#006C3C" } as React.CSSProperties}
    >
      {/* Building - main */}
      <rect x="140" y="90" width="120" height="150" rx="4" fill="var(--primary-svg-color)" opacity="0.15" />
      <rect x="150" y="100" width="100" height="140" rx="2" fill="var(--primary-svg-color)" opacity="0.25" />
      {/* Building roof */}
      <path d="M130 90 L200 40 L270 90" fill="var(--primary-svg-color)" opacity="0.2" />
      {/* Windows row 1 */}
      {[162, 194, 226].map((x, i) => (
        <rect key={`w1-${i}`} x={x} y={112} width="22" height="18" rx="2" fill="white" opacity="0.7" />
      ))}
      {/* Windows row 2 */}
      {[162, 194, 226].map((x, i) => (
        <rect key={`w2-${i}`} x={x} y={140} width="22" height="18" rx="2" fill="white" opacity="0.7" />
      ))}
      {/* Windows row 3 */}
      {[162, 194, 226].map((x, i) => (
        <rect key={`w3-${i}`} x={x} y={168} width="22" height="18" rx="2" fill="white" opacity="0.7" />
      ))}
      {/* Door */}
      <rect x="188" y="196" width="24" height="44" rx="12" fill="var(--primary-svg-color)" opacity="0.4" />

      {/* Left tree */}
      <rect x="90" y="180" width="10" height="60" rx="5" fill="var(--primary-svg-color)" opacity="0.3" />
      <circle cx="95" cy="170" r="28" fill="var(--primary-svg-color)" opacity="0.18" />
      <circle cx="78" cy="178" r="18" fill="var(--primary-svg-color)" opacity="0.14" />
      <circle cx="112" cy="178" r="18" fill="var(--primary-svg-color)" opacity="0.14" />

      {/* Right tree */}
      <rect x="300" y="180" width="10" height="60" rx="5" fill="var(--primary-svg-color)" opacity="0.3" />
      <circle cx="305" cy="165" r="30" fill="var(--primary-svg-color)" opacity="0.18" />
      <circle cx="287" cy="175" r="20" fill="var(--primary-svg-color)" opacity="0.14" />
      <circle cx="323" cy="175" r="20" fill="var(--primary-svg-color)" opacity="0.14" />

      {/* Path/ground */}
      <path d="M0 240 Q200 220 400 240 L400 300 L0 300 Z" fill="var(--primary-svg-color)" opacity="0.06" />

      {/* Sun */}
      <circle cx="340" cy="60" r="24" fill="var(--primary-svg-color)" opacity="0.15" />
      <circle cx="340" cy="60" r="16" fill="var(--primary-svg-color)" opacity="0.1" />

      {/* Floating books/graduation cap */}
      <g transform="translate(55, 85)" opacity="0.5">
        <rect x="0" y="6" width="30" height="6" rx="1" fill="var(--primary-svg-color)" opacity="0.5" />
        <rect x="3" y="0" width="27" height="6" rx="1" fill="var(--primary-svg-color)" opacity="0.35" />
        <rect x="5" y="-6" width="16" height="6" rx="1" fill="var(--primary-svg-color)" opacity="0.25" />
      </g>

      {/* Graduation cap */}
      <g transform="translate(320, 100)" opacity="0.45">
        <path d="M0 10 L15 0 L30 10 L15 6 Z" fill="var(--primary-svg-color)" opacity="0.6" />
        <rect x="18" y="8" width="4" height="10" rx="1" fill="var(--primary-svg-color)" opacity="0.4" />
      </g>

      {/* Small flowers/plants on ground */}
      {[120, 250, 330].map((x, i) => (
        <circle key={`f-${i}`} cx={x} cy={250 + (i % 2) * 5} r="3" fill="var(--primary-svg-color)" opacity="0.2" />
      ))}
    </svg>
  );
}
