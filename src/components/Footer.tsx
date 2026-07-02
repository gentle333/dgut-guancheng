// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t border-dgut-100 bg-gradient-to-b from-white to-dgut-50/50 mt-16 relative overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dgut-300/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 py-10 text-sm text-gray-500 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/logo-emblem.png" alt="校徽" className="w-9 h-9" />
              <div>
                <h4 className="font-bold text-dgut-700 text-base">莞城攻略</h4>
                <p className="text-xs text-gray-400">东莞理工学院莞城校区校园指南</p>
              </div>
            </div>
            <p className="leading-relaxed text-xs mt-3">
              一个学生视角的莞城校区生活指南。
              <br />
              校训：学而知不足 — 杨振宁 题
            </p>
          </div>
          <div>
            <h4 className="font-bold text-dgut-700 mb-2 text-sm">内容来源说明</h4>
            <ul className="space-y-1.5 text-xs">
              <li>百度百科 — 学校基本数据（面积、建筑面积、设施）</li>
              <li>莞工星球微信公众号 — 食堂详情、新生攻略</li>
              <li>百度贴吧 — 学生真实宿舍评价</li>
              <li>阳光热线问政平台 (wzzdg.sun0769.com) — 不足之处反馈</li>
              <li>东莞理工学院图书馆 (lib.dgut.edu.cn) — 图书馆信息</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-dgut-700 mb-2 text-sm">快速导航</h4>
            <div className="grid grid-cols-2 gap-1 text-xs">
              <a href="/campus" className="text-gray-500 hover:text-dgut-600 transition-colors py-1">🏫 校园风光</a>
              <a href="/food" className="text-gray-500 hover:text-dgut-600 transition-colors py-1">🍜 食堂美食</a>
              <a href="/dorm" className="text-gray-500 hover:text-dgut-600 transition-colors py-1">🏠 宿舍生活</a>
              <a href="/clubs" className="text-gray-500 hover:text-dgut-600 transition-colors py-1">🎭 社团活动</a>
              <a href="/study" className="text-gray-500 hover:text-dgut-600 transition-colors py-1">📚 学习资源</a>
              <a href="/nearby" className="text-gray-500 hover:text-dgut-600 transition-colors py-1">🛍️ 周边玩乐</a>
            </div>
          </div>
        </div>
        <div className="border-t border-dgut-100 pt-4 text-xs text-center text-gray-400">
          本网站为个人视角的校园攻略，非官方发布。内容仅供参考。
        </div>
      </div>
    </footer>
  );
}
