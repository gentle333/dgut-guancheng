// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t border-dgut-100 bg-gradient-to-b from-white to-dgut-50/50 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10 text-sm text-gray-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h4 className="font-bold text-dgut-700 mb-2">关于本站</h4>
            <p className="leading-relaxed">
              一个学生视角的东莞理工学院莞城校区生活指南。
              <br />
              校训：学而知不足 — 杨振宁 题
            </p>
          </div>
          <div>
            <h4 className="font-bold text-dgut-700 mb-2">内容来源说明</h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>百度百科 — 学校基本数据（面积、建筑面积、设施）</li>
              <li>莞工星球微信公众号 — 食堂详情、新生攻略</li>
              <li>百度贴吧 — 学生真实宿舍评价</li>
              <li>阳光热线问政平台 (wzzdg.sun0769.com) — 不足之处反馈</li>
              <li>东莞理工学院图书馆 (lib.dgut.edu.cn) — 图书馆信息</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-dgut-100 pt-4 text-xs text-center text-gray-400">
          本网站为个人视角的校园攻略，非官方发布。内容仅供参考。
        </div>
      </div>
    </footer>
  );
}
