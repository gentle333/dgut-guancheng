"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "@/lib/sections";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="shrink-0 flex items-center gap-3.5 transition-opacity hover:opacity-80"
        >
          <img src="/images/logo-emblem.png" alt="东莞理工学院校徽" className="w-11 h-11" />
          <span className="font-extrabold text-2xl text-dgut-700 tracking-tight">
            莞城攻略
          </span>
        </Link>

        <div className="hidden md:flex gap-0.5 items-center">
          {sections.map((s) => {
            const active = pathname === `/${s.slug}`;
            return (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className={`px-4 py-2.5 rounded-xl text-[16px] font-medium whitespace-nowrap transition-all duration-200 ${
                  active
                    ? "bg-dgut-50 text-dgut-700 shadow-sm"
                    : "text-gray-600 hover:text-dgut-600 hover:bg-gray-50"
                }`}
              >
                <span className="mr-1.5">{s.emoji}</span>
                {s.title}
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden p-2.5 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur">
          <div className="px-6 py-4 flex flex-col gap-1">
            {sections.map((s) => {
              const active = pathname === `/${s.slug}`;
              return (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl text-[16px] font-medium transition-colors ${
                    active
                      ? "bg-dgut-50 text-dgut-700"
                      : "text-gray-600 hover:text-dgut-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="mr-2">{s.emoji}</span>
                  {s.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
