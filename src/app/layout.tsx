import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingEmojis from "@/components/FloatingEmojis";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "莞城攻略 — 东莞理工学院莞城校区校园指南",
  description: "学生视角的东莞理工学院莞城校区生活攻略，涵盖食堂、宿舍、社团、学习、周边玩乐。学而知不足。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen text-gray-900 antialiased relative">
        <ScrollProgress />
        <FloatingEmojis />
        <Navbar />
        <main className="relative z-10 animate-fade-in">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
