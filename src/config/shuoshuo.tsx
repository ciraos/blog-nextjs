import Image from "next/image";
import ganyu4 from "@/app/images/ganyu4.avif";
import ganyu5 from "@/app/images/ganyu5.avif";
import ganyu6 from "@/app/images/ganyu6.avif";
import miku11 from "@/app/images/miku11.avif";
import miku16 from "@/app/images/miku16.avif";
import miside from "@/app/images/miside.avif";
import ganyu0 from "@/app/images/ganyu0.avif";

interface sslist {
  id: number,
  content: string,
  images: string[],
  tag: string,
  time: number,
  important: boolean,
}

export const sslist = [
  {
    id: 1,
    content: "由于日本不顾我方严正声明与国际抗议，一意孤行，于2023年8月24日将核废水排入大海，本着国际环保主义的内心，拥有国际环保意识的我只能单方面制裁，禁止日本地区访问旗下所有业务，希望日方能够尽快悔过自新，明白事情的严重性！😤",
    tag: "",
    time: "2023-08-24",
    important: true
  },
  {
    id: 2,
    content: "第一条说说！",
    tag: "心情",
    time: "2024-09-09",
  }, {
    id: 3,
    content: "图片测试",
    images: (<>
      <Image src={ganyu4} alt="ss-img" title="ganyu" className="rounded-md" priority={true} />
      <Image src={ganyu5} alt="ss-img" title="ganyu" className="rounded-md" priority={true} />
      <Image src={ganyu6} alt="ss-img" title="ganyu" className="rounded-md" priority={true} />
      <Image src={miku11} alt="ss-img" title="ganyu" className="rounded-md" priority={true} />
      <Image src={miku16} alt="ss-img" title="ganyu" className="rounded-md" priority={true} />
    </>),
    tag: "记录",
    time: "2024-09-09",
  }, {
    id: 4,
    content: '所以每个页面的标题该怎么改······',
    tag: '记录',
    time: '2024-09-09',
  }, {
    id: 5,
    content: '可恶，还是不会写怎么获取文章信息·····尴尬··',
    tag: '记录',
    time: '2024-09-09',
  }, {
    id: 6,
    content: '因为不会写瀑布流所以只好用flex来实现了。',
    tag: '记录',
    time: '2024-09-13'
  }, {
    id: 7,
    content: "通义灵码很好的解决了我不会说话的问题（",
    tag: '记录',
    time: '2024-09-17'
  }, {
    id: 8,
    content: "想来想去，还是把说说改成这种左右滑动的吧qwq",
    tag: "记录",
    time: "2024-11-16"
  },
  {
    id: 9,
    content: "那维莱特，你喜欢这500年来独属于你的戏份吗？",
    tag: "原神",
    time: "2024-12-09"
  },
  {
    id: 10,
    content: "之前留下的坑：①每个页面的标题修改问题已解决；②获取文章信息已解决；③说说界面还是采用grid，只不过目前masonry兼容性不太好，等以后吧。",
    tag: "记录",
    time: "2024-12-09"
  },
  {
    id: 11,
    content: "但是grid的话，怎么做自适应啊，移动端只能宽度100%····所以425宽度下改为block算惹。",
    tag: "记录",
    time: "2024-12-09"
  }, {
    id: 12,
    content: "开开心心升级到nextjs15，又闷闷不乐的退回到14了······",
    tag: "心情",
    time: "2024-12-25"
  }, {
    id: 13,
    content: "米塔全成就达成！",
    images: (<><Image src={miside} alt="miside" title="miside" className="rounded-md" priority /></>),
    tag: "心情",
    time: "2025-01-07"
  }, {
    id: 14,
    content: "见证满命甘雨带来的威迫吧！",
    images: (<><Image src={ganyu0} alt="ganyu" title="ganyu" className="rounded-md" priority /></>),
    tag: "原神",
    time: "2025-01-29"
  },
  {
    id: "15",
    content: "呜呜呜，代码块还没配好····",
    // images: (<></>),
    tag: "记录",
    time: "2025-03-04"
  }
];
