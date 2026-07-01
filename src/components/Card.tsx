// src/components/Card.tsx

import Link from "next/link";
import type { Section } from "@/lib/sections";

export default function Card({ section }: { section: Section }) {
  return (
    <Link
      href={`/${section.slug}`}
      className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all group"
    >
      <div className="text-3xl mb-3" aria-hidden="true">{section.emoji}</div>
      <h3 className="font-semibold text-lg text-gray-800 mb-1 group-hover:text-teal-700 transition-colors">
        {section.title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">{section.description}</p>
    </Link>
  );
}
