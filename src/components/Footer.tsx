// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-gray-500">
        <p className="mb-2">
          <strong>内容来源说明</strong>
        </p>
        <ul className="space-y-1 mb-4">
          <li>百度百科 — 学校基本数据（面积、建筑面积、设施）</li>
          <li>莞工星球微信公众号 — 食堂详情、新生攻略</li>
          <li>百度贴吧 — 学生真实宿舍评价</li>
          <li>阳光热线问政平台 (wzzdg.sun0769.com) — 校园不足之处反馈</li>
          <li>东莞理工学院图书馆 (lib.dgut.edu.cn) — 图书馆开放时间与设施说明</li>
        </ul>
        <p>本网站为个人视角的校园攻略，非官方发布。内容仅供参考。</p>
      </div>
    </footer>
  );
}
