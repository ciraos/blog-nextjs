import { Metadata } from "next";

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
        {
          posts.map((item, index) => (
            <div className="recent-posts-item" key={index}>
              <Image
                preview={false}
                src="error"
              />
              <div></div>
            </div>
          ))
        }
      </div>
    </>
  );
}
