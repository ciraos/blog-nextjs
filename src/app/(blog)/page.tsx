import Link from "next/link";
// import { redirect } from "next/navigation";

import moment from "moment";

import { Icon } from "@iconify/react";
import { Image, Pagination } from "antd";
import { getAllPosts } from "@/lib/posts";

export default function BlogHome() {
  // redirect("/posts/1");
  const posts = getAllPosts();
  return (
    <>
      <div id="recent-post" className="recent-post w-3/4 max-425:w-full">

        {posts?.map((post, index) => (
          <div key={index} className="recent-post-item h-40 flex justify-center bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl dark:bg-[#2c303f] max-425:w-96 max-425:h-80 max-425:flex-col max-425:mx-auto">

            <Link href={`/posts/${post.slug}`} className="w-2/5 max-425:w-full">
              <Image src={post.meta?.cover} fallback="https://cdn.smartcis.cn/gh/ciraos/ciraos-static@main/img/404_1.avif" alt="post-cover" preview={false} className="home-post-cover-img" />
            </Link>

            <div className="w-3/5 px-10 flex flex-col justify-center max-425:w-full max-425:py-2 max-425:px-3">
              <Link href={`/posts/${post.slug}`} className="text-2xl dark:text-slate-100">{post.meta?.title}</Link>
              <div className="mt-1 flex flex-wrap divide-x-2 text-xs dark:text-slate-400 dark:divide-slate-600 max-425:w-full">
                <div className="px-1 flex items-center"><Icon icon="clarity:date-line" className="mr-1" /><span className="">{moment(post.meta?.date).format('YYYY-MM-DD')}</span></div>
                <div className="px-1 flex items-center"><Icon icon="lets-icons:date-fill" className="mr-1" /><span className="">{moment(post.meta?.updated).format('YYYY-MM-DD')}</span></div>
                <Link href={`/tags/${post.meta?.tags}`} className="px-1 flex items-center"><Icon icon="mdi:tag-outline" className="" /><span className="">{post.meta?.tags}</span></Link>
                <Link href={`/categories/${post.meta?.categories}`} className="px-1 flex items-center"><Icon icon="material-symbols:category-outline" className="" /><span className="">{post.meta?.categories}</span></Link>
                <div className="px-1 flex items-center"><Icon icon="ri:file-word-line" className="" />{post.content.length + "字"}</div>
              </div>
              <div className="mt-1 text-slate-500 text-sm dark:text-slate-300">{post.meta?.descr}</div>
            </div>

          </div>
        ))}
        <Pagination defaultCurrent={1} total={1} align="center" className="mt-5" />
      </div>
    </>
  )
}
