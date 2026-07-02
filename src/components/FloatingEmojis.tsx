// src/components/FloatingEmojis.tsx
"use client";

import { useEffect, useRef } from "react";

const EMOJIS = ["🏫", "🍜", "📚", "🏃", "🎓", "🌳", "🏛️", "📖", "🎵", "⚽"];
const COUNT = 35;

interface Bubble {
  el: HTMLSpanElement;
  x: number;
  delay: number;
  driftAmp: number;
  driftFreq: number;
}

export default function FloatingEmojis() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const bubbles: Bubble[] = [];

    for (let i = 0; i < COUNT; i++) {
      const el = document.createElement("span");
      el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      el.className = "floating-emoji";

      // Scatter across full viewport, not just bottom
      el.style.left = `${Math.random() * 100}%`;
      el.style.bottom = `${-5 + Math.random() * 105}%`; // some already visible
      el.style.fontSize = `${20 + Math.random() * 38}px`;
      el.style.opacity = String(0.15 + Math.random() * 0.2);
      el.style.animationDuration = `${10 + Math.random() * 20}s`;
      el.style.animationDelay = `${-Math.random() * 20}s`; // negative = already mid-animation

      container.appendChild(el);
      bubbles.push({
        el,
        x: parseFloat(el.style.left),
        delay: parseFloat(el.style.animationDelay),
        driftAmp: 8 + Math.random() * 20,
        driftFreq: 0.15 + Math.random() * 0.35,
      });
    }

    let frameId: number;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = (now - start) / 1000;
      for (const b of bubbles) {
        const t = elapsed + b.delay;
        const drift = Math.sin(t * b.driftFreq + b.x) * b.driftAmp;
        const wobble = Math.cos(t * 0.5 + b.x * 3) * 3;
        b.el.style.transform = `translateX(${drift}px) rotate(${wobble}deg)`;
      }
      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      for (const b of bubbles) {
        b.el.remove();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    />
  );
}
