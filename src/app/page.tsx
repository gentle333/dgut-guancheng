import Card from "@/components/Card";
import { sections } from "@/lib/sections";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero */}
      <section className="py-12 md:py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          东莞理工学院 · 莞城校区攻略
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          一个学生视角的莞城校区生活指南。
          <br />
          真实信息，标注来源。不吹不黑，带你了解莞工生活的每一面。
        </p>
        <div className="mt-6 flex justify-center gap-4 text-sm text-gray-400 flex-wrap">
          <span>📍 莞城街道学院路251号</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>📐 占地约332亩</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>🚇 地铁直达市中心</span>
        </div>
      </section>

      {/* Card Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-16">
        {sections.map((s) => (
          <Card key={s.slug} section={s} />
        ))}
      </section>
    </div>
  );
}
