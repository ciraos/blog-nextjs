import Link from "next/link";
import type { Metadata } from "next";

import Aside from "@/components/aside";
import moment from "moment";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "归档 - 葱苓sama",
};

export default async function Archives() {
  const posts = await getAllPosts();
  return (
    <>
      <div className="w-3/4 bg-white rounded-xl px-2 py-2 dark:bg-[#2c303f] max-425:w-full">
        <div className="text-5xl text-gray-500 font-semibold py-5 px-5">隧道</div>
        <div className="">
          <div className="pl-2 antialiased italic font-serif font-semibold text-4xl text-slate-500">2024</div>
          {posts?.map((post, index) => (
            <div key={index} className="h-max flex items-center">
              <div className="w-24 text-sm text-slate-500">{moment(post.meta?.date).format("YYYY-MM-DD")}</div>
              <Link href={`/posts/${post.slug}`} className="-pt-4 text-orange-600 text-lg font-semibold">{post.meta?.title}</Link>
            </div>
          ))}
        </div>
      </div>
      <Aside />
    </>
  );
}
