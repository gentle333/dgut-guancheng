export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-white to-dgut-50/30 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-14 text-gray-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo-emblem.png" alt="校徽" className="w-10 h-10" />
              <div>
                <h4 className="font-bold text-dgut-700 text-lg">莞城攻略</h4>
                <p className="text-sm text-gray-400">东莞理工学院莞城校区校园指南</p>
              </div>
            </div>
            <p className="leading-relaxed text-sm">
              一个学生视角的莞城校区生活指南。
              <br />
              校训：学而知不足 — 杨振宁 题
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wider">内容来源</h4>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>百度百科 — 学校基本数据</li>
              <li>莞工星球微信公众号 — 食堂详情、新生攻略</li>
              <li>百度贴吧 — 学生真实宿舍评价</li>
              <li>阳光热线问政平台 — 不足之处反馈</li>
              <li>东莞理工学院图书馆 — 图书馆信息</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wider">快速导航</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="/campus" className="hover:text-dgut-600 transition-colors py-1">🏫 校园风光</a>
              <a href="/food" className="hover:text-dgut-600 transition-colors py-1">🍜 食堂美食</a>
              <a href="/dorm" className="hover:text-dgut-600 transition-colors py-1">🏠 宿舍生活</a>
              <a href="/clubs" className="hover:text-dgut-600 transition-colors py-1">🎭 社团活动</a>
              <a href="/study" className="hover:text-dgut-600 transition-colors py-1">📚 学习资源</a>
              <a href="/nearby" className="hover:text-dgut-600 transition-colors py-1">🛍️ 周边玩乐</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-5 text-sm text-center text-gray-400">
          本网站为个人视角的校园攻略，非官方发布。内容仅供参考。
        </div>
      </div>
    </footer>
  );
}
