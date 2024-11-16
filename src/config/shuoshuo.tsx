import Image from "next/image";
import ganyu4 from "@/app/images/ganyu4.avif";
import ganyu5 from "@/app/images/ganyu5.avif";
import ganyu6 from "@/app/images/ganyu6.avif";
import miku11 from "@/app/images/miku11.avif";
import miku16 from "@/app/images/miku16.avif";

interface sslist {
  id: number;
  content: string;
  images: string[];
  tag: string,
  time: number;
}

export const sslist = [{
    id: 1,
    content: "第一条说说！",
    tag: "心情",
    time: "2024-09-09",
  },{
    id: 2,
    content: "图片测试",
    images: (<>
      <Image src={ganyu4} alt="ss-img" title="ganyu" className="rounded-md" priority={true} />
      <Image src={ganyu5} alt="ss-img" title="ganyu" className="rounded-md" priority={true} />
      <Image src={ganyu6} alt="ss-img" title="ganyu" className="rounded-md" priority={true} />
      <Image src={miku11} alt="ss-img" title="ganyu" className="rounded-md" priority={true} />
      <Image src={miku16} alt="ss-img" title="ganyu" className="rounded-md" priority={true} />
    </>),
    tag: "测试",
    time: "2024-09-09",
  },{
    id: 3,
    content: '所以每个页面的标题该怎么改······',
    tag: '心情',
    time: '2024-09-09',    
  },{
    id: 4,
    content: '可恶，还是不会写怎么获取文章信息·····尴尬··',
    tag: '记录',
    time: '2024-09-09',
  },{
    id: 5,
    content: '因为不会写瀑布流所以只好用flex来实现了。',
    tag: '心情',
    time: '2024-09-13'
  },{
    id: 6,
    content: "通义灵码很好的解决了我不会说话的问题（",
    tag: '心情',
    time: '2024-09-17'
  },{
    id: 7,
    content: "想来想去，还是把说说改成这种左右滑动的吧qwq",
    tag: "记录",
    time: "2024-11-16"
  }
];
