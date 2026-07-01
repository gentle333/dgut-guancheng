// src/components/Card.tsx

import Link from "next/link";
import type { Section } from "@/lib/sections";

const emojiBg: Record<string, string> = {
  campus: "from-green-500 to-emerald-600",
  food: "from-orange-500 to-red-500",
  dorm: "from-blue-500 to-cyan-500",
  clubs: "from-purple-500 to-pink-500",
  study: "from-amber-500 to-yellow-500",
  nearby: "from-rose-500 to-red-600",
};

export default function Card({ section }: { section: Section }) {
  const gradient = emojiBg[section.slug] ?? "from-green-500 to-green-600";

  return (
    <Link
      href={`/${section.slug}`}
      className="card-hover block bg-white/80 backdrop-blur rounded-2xl border border-gray-100 overflow-hidden group"
    >
      {/* Colorful top bar */}
      <div className={`h-2 bg-gradient-to-r ${gradient}`} />

      <div className="p-6">
        {/* Icon circle */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl mb-4 shadow-sm`}>
          {section.emoji}
        </div>

        <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-green-700 transition-colors">
          {section.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{section.description}</p>

        {/* Arrow on hover */}
        <div className="mt-4 flex items-center gap-1 text-xs text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
          <span>查看详情</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}
