import { Metadata } from "next";
import Link from "next/link";
import {
  Image
} from "antd";
import "@ant-design/v5-patch-for-react-19";
import { getAllPosts } from "@/utils/posts";

export const metadata: Metadata = {
  title: "葱苓小筑 | 首页",
};

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <div className="recent-posts">
        {posts.map((item, index) => (
          <div key={index} className="recent-posts-item shadow-sm">
            <Link href={`/posts/${item.slug}`}>
              <Image
                style={{ width: 272, height: 236.8 }}
                preview={false}
                src={item.meta?.top_img_url}
                fallback="https://cdn.smartcis.cn/gh/ciraos/ciraos-static@main/img/404_1.avif"
              />
            </Link>
            <div className="py-2 px-5 flex flex-col justify-center">
              <Link href={`/posts/${item.slug}`}>{item.meta?.title}</Link>
              <div>
                <span>{item.meta?.created.toString()}</span>
                <span>{item.meta?.updated?.toString()}</span>
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
