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

export default function Card({ section }: { section: Section }) {
  const glow = glowColor[section.slug] ?? "rgba(0,108,60,0.25)";

  return (
    <Link
      href={`/${section.slug}`}
      className="card-hover group block bg-white/85 backdrop-blur rounded-2xl border border-gray-100 overflow-hidden"
      style={{ "--card-glow": glow } as React.CSSProperties}
    >
      {/* Illustration top area */}
      <div className="relative overflow-hidden">
        <CardIllustration slug={section.slug} />
        {/* Glow overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 1px 0 0 ${glow}`,
          }}
        />
      </div>

      <div className="p-5">
        {/* Icon circle */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3 shadow-sm"
          style={{ background: `${glowColor[section.slug]?.replace("0.25", "0.12") ?? "rgba(0,108,60,0.12)"}` }}
        >
          {section.emoji}
        </div>

        <h3 className="font-bold text-base text-gray-800 mb-1 group-hover:text-dgut-600 transition-colors">
          {section.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{section.description}</p>

        {/* Stat preview & arrow */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {section.stat ?? ""}
          </span>
          <span className="text-xs text-dgut-500 opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">
            查看详情 →
          </span>
        </div>
      </div>
    </Link>
  );
}
