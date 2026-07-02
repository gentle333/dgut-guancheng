// src/components/TiltCard.tsx
"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // degrees
}

export default function TiltCard({ children, className = "", maxTilt = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = ((centerY - y) / centerY) * maxTilt;

    el.style.setProperty("--tilt-rotate-x", `${rotateX}deg`);
    el.style.setProperty("--tilt-rotate-y", `${rotateY}deg`);
    el.style.setProperty("--glare-x", `${(x / rect.width) * 100}%`);
    el.style.setProperty("--glare-y", `${(y / rect.height) * 100}%`);

    const inner = el.firstElementChild as HTMLElement;
    if (inner) {
      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    const inner = el.firstElementChild as HTMLElement;
    if (inner) {
      inner.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      inner.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
      setTimeout(() => {
        inner.style.transition = "transform 0.1s ease-out";
      }, 500);
    }
  }

  return (
    <div
      ref={ref}
      className={`tilt-card relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tilt-card-inner relative">
        {children}
        <div className="tilt-card-glare" />
      </div>
    </div>
  );
}
