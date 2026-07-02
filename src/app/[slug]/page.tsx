// src/app/[slug]/page.tsx

import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getContentBySlug, getSectionBySlug, getAllSections } from "@/lib/content";
import Link from "next/link";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getContentBySlug(slug);
  if (!page) notFound();

  const section = getSectionBySlug(slug);
  const allSections = getAllSections();

  return (
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
                    className={`px-3 py-1.5 rounded text-sm transition-colors hover-bounce ${
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
          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {section?.emoji} {page.meta.title}
            </h1>
            {page.meta.description && (
              <p className="mt-2 text-gray-500">{page.meta.description}</p>
            )}
          </header>

          <div className="prose-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {page.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
