import Link from "next/link";
import { Icon } from "@iconify/react"
import { getAllPosts } from "@/lib/posts";
import moment from 'moment';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "文章 | 葱苓小筑",
};

export default async function Homepage() {
  const posts = await getAllPosts();
  return (
    <>
      <div className="recent-post w-3/4 mx-auto">
        {posts?.map((post, index) => (
          <div className="recent-post-item w-full h-40 py-4 px-4 mx-1 flex flex-col justify-center bg-white rounded-xl shadow-sm hover:shadow-md" key={index}>
            <div className="">
              <Link href={`/posts/${post.slug}`} className="text-2xl">{post.meta?.title}</Link>
              <div className="text-slate-500 text-md">{post.meta?.descr}</div>
              <div className="flex divide-x-2 divide-solid divide-slate-200 mt-2">
                <div className="flex items-center pr-2 text-sm break-all"><Icon icon="clarity:date-line" className="mr-1" /><span className="w-max">{moment(post.meta?.date).format('YYYY-MM-DD')}</span></div>
                <div className="flex items-center px-2 text-sm break-all"><Icon icon="lets-icons:date-fill" className="mr-1" /><span className="w-max">{moment(post.meta?.updated).format('YYYY-MM-DD')}</span></div>
                <Link href={`/tags/${post.meta?.tags}`} className="flex items-center px-1 text-sm break-all"><Icon icon="mdi:tag-outline" className="" /><span className="break-all">{post.meta?.tags}</span></Link>
                <Link href={`/categories/${post.meta?.categories}`} className="flex items-center px-1 text-sm break-all"><Icon icon="material-symbols:category-outline" className="break-all" /><span className="">{post.meta?.categories}</span></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
