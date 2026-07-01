// src/lib/content.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sections, type Section } from "./sections";

const contentDir = path.join(process.cwd(), "content");

export interface ContentMeta {
  slug: string;
  title: string;
  description: string;
}

export interface ContentPage {
  meta: ContentMeta;
  content: string;
}

export function getAllSlugs(): string[] {
  return sections.map((s) => s.slug);
}

export function getSectionBySlug(slug: string): Section | undefined {
  return sections.find((s) => s.slug === slug);
}

export function getAllSections(): Section[] {
  return sections;
}

export function getContentBySlug(slug: string): ContentPage | null {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title ?? getSectionBySlug(slug)?.title ?? slug,
      description: data.description ?? getSectionBySlug(slug)?.description ?? "",
    },
    content,
  };
}
