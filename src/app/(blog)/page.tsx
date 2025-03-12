import Link from "next/link";
import Aside from "@/components/aside";
import { Icon } from "@iconify/react";
import moment from "moment";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  return (
    <>
      <div id="recent-post" className="recent-post w-3/4 max-425:w-full">
        {posts?.map((post, index) => (
          <div className="recent-post-item w-full h-44 py-4 px-4 mx-1 flex flex-col justify-center bg-white rounded-xl shadow-md hover:shadow-xl dark:bg-[#2c303f]" key={index}>
            <Link href={`/posts/${post.slug}`} className="text-2xl dark:text-white">{post.meta?.title}</Link>
            <div className="text-slate-500 text-md dark:text-slate-300">{post.meta?.descr}</div>
            <div className="flex flex-wrap divide-x-2 divide-solid divide-slate-200 mt-2 dark:text-slate-400 dark:divide-slate-600">
              <div className="flex items-center pr-2"><Icon icon="clarity:date-line" className="mr-1" /><span className="">{moment(post.meta?.date).format('YYYY-MM-DD')}</span></div>
              <div className="flex items-center px-2"><Icon icon="lets-icons:date-fill" className="mr-1" /><span className="">{moment(post.meta?.updated).format('YYYY-MM-DD')}</span></div>
              <Link href={`/tags/${post.meta?.tags}`} className="flex items-center px-1"><Icon icon="mdi:tag-outline" className="" /><span className="">{post.meta?.tags}</span></Link>
              <Link href={`/categories/${post.meta?.categories}`} className="flex items-center px-1"><Icon icon="material-symbols:category-outline" className="" /><span className="">{post.meta?.categories}</span></Link>
              <div className="flex items-center px-1"><Icon icon="ri:file-word-line" className="mr-1" />{post.content.length + "字"}</div>
            </div>
          </div>
        ))}
      </div>
      <Aside />
    </>
  )
}
