import Card from "@/components/Card";
import TiltCard from "@/components/TiltCard";
import HeroIllustration from "@/components/HeroIllustration";
import { sections } from "@/lib/sections";

const stats = [
  { value: "332", unit: "亩", label: "校园面积" },
  { value: "6", unit: "个", label: "学生食堂" },
  { value: "50+", unit: "", label: "学生社团" },
  { value: "60万+", unit: "", label: "图书馆藏书" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 relative z-10 flex flex-col items-center">
          <p className="text-dgut-200/60 text-lg tracking-[0.4em] mb-5 italic">
            学而知不足
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-5 tracking-tight text-center leading-[1.1]">
            东莞理工学院
            <span className="block text-dgut-200 text-2xl md:text-4xl font-medium mt-4">
              莞城校区 · 校园攻略
            </span>
          </h1>

          <p className="text-dgut-100/80 max-w-xl text-center leading-relaxed text-lg md:text-xl">
            一个学生视角的莞城校区生活指南。
            真实信息，标注来源。不吹不黑，带你了解莞工生活的每一面。
          </p>

          <div className="mt-10 flex justify-center gap-3 text-base flex-wrap">
            <span className="px-5 py-3 bg-white/10 backdrop-blur rounded-full border border-white/20">
              📍 莞城街道学院路251号
            </span>
            <span className="px-5 py-3 bg-white/10 backdrop-blur rounded-full border border-white/20">
              📐 占地约332亩
            </span>
            <span className="px-5 py-3 bg-white/10 backdrop-blur rounded-full border border-white/20">
              🚇 地铁直达市中心
            </span>
          </div>

          <HeroIllustration className="w-full max-w-2xl mt-12 animate-float" />

          <div className="mt-10 flex justify-center gap-8 text-sm text-dgut-200/50 flex-wrap">
            <span>🏛️ 人才之星</span>
            <span>🌊 鸳鸯湖</span>
            <span>📚 图书馆</span>
            <span>🗼 思源塔</span>
            <span>🏃 蓝色跑道</span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative z-10 -mt-6 max-w-3xl mx-auto px-4">
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-gray-100/80 px-8 py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-dgut-600 tracking-tight">
                {s.value}<span className="text-lg font-semibold text-dgut-400 ml-0.5">{s.unit}</span>
              </div>
              <div className="text-sm text-gray-400 mt-2 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section title */}
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-6">
        <h2 className="text-center text-xl font-bold text-gray-400 tracking-wide">
          探索莞城校区的每一面
        </h2>
      </section>

      {/* Card Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s) => (
            <TiltCard key={s.slug} maxTilt={5}>
              <Card section={s} />
            </TiltCard>
          ))}
        </div>
      </section>
    </div>
  );
}
