import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { getAllPosts } from "@/lib/posts";
import { Icon } from "@iconify/react";
import ciraos from "@/app/images/avatar1.avif";

export default async function Aside() {
    const posts = await getAllPosts();
    return (
        <>
            <div className="aside w-1/4 pl-4 max-425:w-full max-425:pl-0">

                <div className="h-72 bg-miku-green rounded-xl py-2 px-0 text-center shadow-sm hover:shadow-md dark:bg-dacard1 max-425:hidden">
                    <div className="w-24 h-max py-1 px-2 mt-5 mx-auto text-sm font-bold border-[1px] border-solid border-white rounded-xl">Welcome!!</div>
                    <div className="mt-5">
                        <Image src={ciraos} alt="avatar" className="w-24 h-24 mt-2 mx-auto rounded-[50%]" loading="lazy" />
                        <div className="mt-2 text-xl">葱苓sama</div>
                        <p className="-mt-2 text-sm">a small blog station.</p>
                    </div>
                </div>

                <div className="px-2 py-2 bg-white rounded-xl shadow-sm hover:shadow-md dark:bg-dacard">
                    <div className="flex items-center"><Icon icon="icon-park-solid:volume-notice" className="mr-1 text-blue-400" /><span className="dark:text-white">公告</span></div>
                    <p className="indent-4 text-sm dark:text-white">欢迎来到我的博客🦆</p>
                </div>

                {/* <div className="px-2 py-2 bg-white rounded-xl shadow-sm hover:shadow-md dark:bg-dacard">
                    <div className="flex items-center"><Icon icon="material-symbols:toc" width="1.4em" height="1.4em" className="mr-1 text-blue-400" /><span className="dark:text-white">目录</span></div>
                    <Toc />
                </div> */}

                <div className="px-2 py-2 bg-white rounded-xl shadow-sm hover:shadow-md dark:bg-dacard">
                    <div className="flex items-center"><Icon icon="ion:time-outline" className="mr-1 text-blue-400" /><span className="dark:text-white">最近更新</span></div>
                    <ul className="mt-1">
                        {posts.map((post, index) => (
                            <li key={index} className="w-full px-1 flex justify-between">
                                <Link href={`/posts/${post.slug}`} className="w-2/3 h-max text-slate-600 text-sm hover:text-green-600 dark:text-slate-300">{post.meta?.title}</Link>
                                <div className="w-12 text-center text-slate-500 text-sm dark:text-slate-300">{moment(post.meta?.updated).format("MM-DD")}</div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="px-2 py-2 bg-white rounded-xl shadow-sm hover:shadow-md dark:bg-dacard">
                    <div className="flex items-center"><Icon icon="iconamoon:comment-light" className="mr-1 text-blue-400" /><span className="dark:text-white">最新评论</span></div>
                    <ul className="mt-1"></ul>
                </div>

                <div className="px-2 py-2 bg-white rounded-xl shadow-sm hover:shadow-md dark:bg-dacard">
                    <div className="flex items-center"><Icon icon="mdi:tag-outline" className="mr-1 text-blue-400" /><span className="dark:text-white">标签</span></div>
                    <ul className="flex flex-wrap gap-1">
                        {posts.map((post,index) => (
                            <li key={index} className="capitalize">{post.meta?.tags}</li>
                        ))}
                    </ul>
                </div>

            </div>

        </>
    )
}
