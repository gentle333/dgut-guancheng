import Card from "@/components/Card";
import TiltCard from "@/components/TiltCard";
import { sections } from "@/lib/sections";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center relative z-10">
          {/* Motto */}
          <p className="text-dgut-200/80 text-sm tracking-widest mb-4 motto-text hover-bounce">
            学而知不足
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            东莞理工学院
            <span className="block text-dgut-200 text-xl md:text-2xl font-normal mt-2">
              莞城校区 · 校园攻略
            </span>
          </h1>

          <p className="text-dgut-100/80 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            一个学生视角的莞城校区生活指南。
            真实信息，标注来源。不吹不黑，带你了解莞工生活的每一面。
          </p>

          {/* Quick info pills */}
          <div className="mt-8 flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 hover-bounce select-none cursor-default">
              📍 莞城街道学院路251号
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 hover-bounce select-none cursor-default">
              📐 占地约332亩
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 hover-bounce select-none cursor-default">
              🚇 地铁直达市中心
            </span>
          </div>

          {/* Campus landmarks */}
          <div className="mt-8 flex justify-center gap-6 text-xs text-dgut-200/60 flex-wrap">
            <span>🏛️ 人才之星</span>
            <span>🌊 鸳鸯湖</span>
            <span>📚 图书馆</span>
            <span>🗼 思源塔</span>
            <span>🏃 蓝色跑道</span>
          </div>
        </div>
      </section>

      {/* Section title */}
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-4">
        <h2 className="text-center text-lg font-medium text-gray-500">
          探索莞城校区的每一面
        </h2>
      </section>

      {/* Card Grid */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((s) => (
            <TiltCard key={s.slug} maxTilt={6}>
              <Card section={s} />
            </TiltCard>
          ))}
        </div>
      </section>
    </div>
  );
}
