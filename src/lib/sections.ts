// src/lib/sections.ts

export interface Section {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  stat?: string;
}

export const sections: Section[] = [
  {
    slug: "campus",
    title: "校园风光",
    emoji: "🏫",
    description: "莞城校区概览、建筑、校道与标志景观",
    stat: "占地约332亩",
  },
  {
    slug: "food",
    title: "食堂美食",
    emoji: "🍜",
    description: "第一食堂、教工餐厅、北门美食街全攻略",
    stat: "校内6个食堂",
  },
  {
    slug: "dorm",
    title: "宿舍生活",
    emoji: "🏠",
    description: "宿舍条件、配置、周边便利设施与在建新宿舍",
    stat: "4栋宿舍楼",
  },
  {
    slug: "clubs",
    title: "社团活动",
    emoji: "🎭",
    description: "社团种类、社团嘉年华与校园文化活动",
    stat: "50+个社团",
  },
  {
    slug: "study",
    title: "学习资源",
    emoji: "📚",
    description: "图书馆、自习场所与选课经验",
    stat: "图书馆藏书60万+",
  },
  {
    slug: "nearby",
    title: "周边玩乐",
    emoji: "🛍️",
    description: "东城万达、西城楼商圈与交通指南",
    stat: "绝佳市中心位置",
  },
];
