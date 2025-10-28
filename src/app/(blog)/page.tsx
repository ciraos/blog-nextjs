import { Metadata } from "next";
import Link from "next/link";
import {
  Divider,
  Image
} from "antd";
import "@ant-design/v5-patch-for-react-19";
import { Icon } from "@iconify/react";
import moment from "moment";
// import { getAllPosts } from "@/utils/posts"; // 注释保留原样

// 定义文章元信息接口
interface ArticleMeta {
  id: string;
  created: Date;
  updated?: Date;
  title: string;
  cover_url?: string;
  status: 'DRAFT' | 'PUBLISHED';
  view_count?: number;
  word_count?: number;
  reading_time?: number;
  ip_location?: string;
  primary_color?: string;
  is_primary_color_manual?: boolean;
  post_tags?: string[];
  post_categories?: string[];
  home_sort?: number;
  pin_sort?: number;
  top_img_url?: string;
  summaries: string,
  abbrlink: string;
  copyright: boolean;
  copyright_author: string;
  copyright_author_href: string;
  copyright_url: string;
  keywords: string;
}

interface ArticleItem {
  slug: string;
  meta?: ArticleMeta;
}

export const metadata: Metadata = {
  title: "葱苓小筑 | 首页",
};

async function getArticles(): Promise<ArticleItem[]> {
  try {
    const res = await fetch('https://blog.ciraos.top/api/public/articles', {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      "referrer": "https://blog.ciraos.top/",
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "omit"
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log(data);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("获取文章列表失败:", error);
    return [];
  }
}

export default async function Home() {
  // const posts = await getAllPosts();
  const posts = await getArticles();

  return (
    <>
      <div className="recent-posts">
        {posts.map((item, index) => (
          <div key={index} className="recent-posts-item shadow-sm">
            <Link href={`/posts/${item.meta?.id}`}>
              <Image
                alt="fl-avatar"
                width={272}
                height={236.8}
                preview={false}
                src={item.meta?.top_img_url}
                fallback="https://cdn.smartcis.cn/gh/ciraos/ciraos-static@main/img/404_1.avif"
              />
            </Link>
            <div className="w-[calc(100%-272px)] py-2 px-5 flex flex-col justify-center">
              <Link href={`/posts/${item.meta?.abbrlink}`} className="text-2xl">
                {item.meta?.title ?? "无标题"}
              </Link>
              <div className="flex items-center text-sm">
                <span className="flex">
                  <Icon icon="icon-park-outline:time" width={18} height={18} className="mr-1" />
                  <span className="mr-1">创建于</span>
                  {item.meta?.created ? moment(item.meta.created).format('YYYY-MM-DD, h:mm:ss a') : '未知'}
                </span>
                <Divider type="vertical" variant="solid" />
                <span className="flex">
                  <Icon icon="icon-park-outline:time" width={18} height={18} className="mr-1" />
                  <span className="mr-1">更新于</span>
                  {item.meta?.updated ? moment(item.meta.updated).format('YYYY-MM-DD, h:mm:ss a') : '未知'}
                </span>
              </div>
              <div>{item.meta?.summaries}</div>
              <div>tags · categories</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
