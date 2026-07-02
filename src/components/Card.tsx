import Link from "next/link";
import type { Section } from "@/lib/sections";
import CardIllustration from "./CardIllustration";

const glowColor: Record<string, string> = {
  campus: "rgba(0,108,60,0.25)",
  food: "rgba(234,88,12,0.25)",
  dorm: "rgba(37,99,235,0.25)",
  clubs: "rgba(147,51,234,0.25)",
  study: "rgba(217,119,6,0.25)",
  nearby: "rgba(225,29,72,0.25)",
};

const accentBg: Record<string, string> = {
  campus: "rgba(0,108,60,0.1)",
  food: "rgba(234,88,12,0.1)",
  dorm: "rgba(37,99,235,0.1)",
  clubs: "rgba(147,51,234,0.1)",
  study: "rgba(217,119,6,0.1)",
  nearby: "rgba(225,29,72,0.1)",
};

export default function Card({ section }: { section: Section }) {
  const glow = glowColor[section.slug] ?? "rgba(0,108,60,0.25)";
  const accent = accentBg[section.slug] ?? "rgba(0,108,60,0.1)";

  return (
    <Link
      href={`/${section.slug}`}
      className="card-hover group block bg-white/90 backdrop-blur rounded-2xl border border-gray-100 overflow-hidden"
      style={{ "--card-glow": glow } as React.CSSProperties}
    >
      {/* Illustration */}
      <div className="relative overflow-hidden">
        <CardIllustration slug={section.slug} />
      </div>

      <div className="p-6">
        {/* Icon + title row */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
            style={{ background: accent }}
          >
            {section.emoji}
          </div>
          <h3 className="font-bold text-lg text-gray-800 group-hover:text-dgut-600 transition-colors">
            {section.title}
          </h3>
        </div>

        <p className="text-[15px] text-gray-500 leading-relaxed mb-4">{section.description}</p>

        {/* Stat + arrow */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-sm text-gray-400">
            {section.stat ?? ""}
          </span>
          <span className="text-sm font-medium text-dgut-500 opacity-0 group-hover:opacity-100 transition-all">
            查看详情 →
          </span>
        </div>
      </div>
    </Link>
  );
}
