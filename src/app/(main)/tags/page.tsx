import Link from "next/link";
import type { Metadata } from "next";

// import { Icon } from "@iconify/react";
import { getAllPosts } from "@/lib/posts";
import Aside from "@/components/aside";

export const metadata: Metadata = {
    title: "标签 - 葱苓sama",
};

export default async function Tags() {
    const posts = await getAllPosts();
    return (
        <>
            <div className="w-3/4 bg-white rounded-xl px-2 py-2 dark:bg-[#2c303f] max-425:w-full">
                <div className="text-5xl text-gray-500 font-semibold py-5 px-5">标签</div>
                <div className="flex flex-wrap gap-2">
                    {posts.map((post, index) => (
                        <Link key={index} href={`/tags/${post.meta?.tags}`} className="tags-item">{post.meta?.tags}</Link>
                    ))}
                </div>
            </div>
            <Aside />
        </>
    )
}
