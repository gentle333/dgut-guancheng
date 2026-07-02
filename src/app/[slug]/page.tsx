// src/app/[slug]/page.tsx

import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getContentBySlug, getSectionBySlug, getAllSections } from "@/lib/content";
import Link from "next/link";
import CardIllustration from "@/components/CardIllustration";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

const themeColors: Record<string, string> = {
  campus: "linear-gradient(135deg, #002414 0%, #004828 50%, #006C3C 100%)",
  food: "linear-gradient(135deg, #7c2d12 0%, #9a3412 50%, #c2410c 100%)",
  dorm: "linear-gradient(135deg, #1e3a5f 0%, #1e40af 50%, #2563eb 100%)",
  clubs: "linear-gradient(135deg, #3b0764 0%, #581c87 50%, #7c3aed 100%)",
  study: "linear-gradient(135deg, #78350f 0%, #92400e 50%, #d97706 100%)",
  nearby: "linear-gradient(135deg, #881337 0%, #9f1239 50%, #e11d48 100%)",
};

const iconBgColors: Record<string, string> = {
  campus: "rgba(0,108,60,0.12)",
  food: "rgba(234,88,12,0.12)",
  dorm: "rgba(37,99,235,0.12)",
  clubs: "rgba(147,51,234,0.12)",
  study: "rgba(217,119,6,0.12)",
  nearby: "rgba(225,29,72,0.12)",
};

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getContentBySlug(slug);
  if (!page) notFound();

  const section = getSectionBySlug(slug);
  const allSections = getAllSections();
  const bg = themeColors[slug] ?? themeColors.campus;
  const iconBg = iconBgColors[slug] ?? iconBgColors.campus;
  const relatedSections = allSections.filter((s) => s.slug !== slug);

  return (
    <div>
      {/* Mini Hero */}
      <section className="relative overflow-hidden" style={{ background: bg }}>
        <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 text-center md:text-left">
              <Link href="/" className="text-white/50 text-xs hover:text-white/80 transition-colors mb-2 inline-block">
                ← 返回首页
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 justify-center md:justify-start">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: iconBg }}
                >
                  {section?.emoji ?? "📄"}
                </span>
                {page.meta.title}
              </h1>
              {page.meta.description && (
                <p className="mt-2 text-white/70 text-sm max-w-lg">{page.meta.description}</p>
              )}
            </div>
            <div className="hidden md:block w-48 shrink-0 opacity-60">
              <CardIllustration slug={slug} />
            </div>
          </div>
        </div>
      </section>

      {/* Content area */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-48 shrink-0">
            <nav className="sticky top-20">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                板块导航
              </h4>
              <div className="flex flex-col gap-1">
                {allSections.map((s) => {
                  const active = s.slug === slug;
                  return (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className={`px-3 py-1.5 rounded text-sm transition-colors ${
                        active
                          ? "bg-dgut-50 text-dgut-600 font-medium"
                          : "text-gray-500 hover:text-dgut-600 hover:bg-dgut-50"
                      }`}
                    >
                      {s.emoji} {s.title}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </aside>

          {/* Main content */}
          <article className="min-w-0 flex-1">
            <div className="prose-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {page.content}
              </ReactMarkdown>
            </div>

            {/* Related links */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                探索其他板块
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {relatedSections.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="flex items-center gap-2.5 p-3 rounded-xl border border-gray-200 hover:border-dgut-200 hover:bg-dgut-50/50 transition-all group"
                  >
                    <span className="text-lg">{s.emoji}</span>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-dgut-600 transition-colors">
                      {s.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
