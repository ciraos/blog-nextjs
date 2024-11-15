import Image from "next/image";
import Link from "next/link";
import {Icon} from "@iconify/react"
import { getAllPosts } from "@/lib/posts";
import moment from 'moment';
import Aside from "@/components/aside";
import * as motion from "framer-motion/client";

export default async function Homepage () {
  const posts = getAllPosts ();
  return (
    <>
      <div className="w-full max-w-6xl mt-10 mx-auto">
        <div id="recent-post" className="w-3/4 mx-auto max-768:w-full">
          {posts?.map ((post, index) => (
            <motion.div
              initial={{ opacity:0, y:-10 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.5, delay:index*0.2 }}
              id="recent-post-item" className="h-40 py-4 px-4 bg-white rounded-xl overflow-hidden flex flex-col justify-center transition-all max-600:w-full max-768:flex-col dark:bg-dacard" key={index}>
              <Link href={`/posts/${post.slug}`} className="text-2xl dark:text-white">{post.meta?.title}</Link>
              <div className="text-base text-slate-400 overflow-hidden">{post.meta?.descr}</div>
              <div className="w-full flex flex-wrap text-xs text-gray-600 divide-x-2 divide-solid divide-gray-200 dark:text-slate-200">
                <time className="h-max pr-2 flex items-center text-pretty before:content-[' 发布于 '] before:mr-1"><Icon icon="clarity:date-line" className="mr-1" />{moment (post.meta?.date).format ('YYYY-MM-DD')}</time>
                <time className="h-max px-2 flex items-center text-pretty before:content-[' 更新于 '] before:mr-1"><Icon icon="lets-icons:date-fill" className="mr-1" />{moment (post.meta?.updated).format ('YYYY-MM-DD')}</time>
                <Link href={`/tags/${post.meta?.tags}`} className="h-max px-2 flex items-center text-pretty"><Icon icon="mdi:tag-outline" className="mr-1 divide-x-2 divide-dashed divide-orange-600" />{post.meta?.tags}</Link>                  <Link href={`/categories/${post.meta?.categories}`} className="h-max px-2 flex items-center text-pretty"><Icon icon="material-symbols:category-outline" className="mr-1" />{post.meta?.categories}</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
