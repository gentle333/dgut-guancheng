// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "@/lib/sections";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-green-700 shrink-0 flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white text-xs font-bold">莞</span>
          莞城攻略
        </Link>

        <div className="hidden md:flex gap-1 overflow-x-auto">
          {sections.map((s) => {
            const active = pathname === `/${s.slug}`;
            return (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all ${
                  active
                    ? "bg-green-100 text-green-800 font-medium shadow-sm"
                    : "text-gray-500 hover:text-green-700 hover:bg-green-50"
                }`}
              >
                {s.emoji} {s.title}
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-green-100 bg-white">
          <div className="px-4 py-3 flex flex-col gap-1">
            {sections.map((s) => {
              const active = pathname === `/${s.slug}`;
              return (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all ${
                    active
                      ? "bg-green-100 text-green-800 font-medium"
                      : "text-gray-500 hover:text-green-700 hover:bg-green-50"
                  }`}
                >
                  {s.emoji} {s.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
