// import Image from "next/image";a
import Link from "next/link";
import type { Metadata } from "next";

// import { Icon } from "@iconify/react";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
    title: '分类 - 葱苓小筑',
};

export default async function Tags() {
    const posts = await getAllPosts();
    return (
        <>
            <div className="w-3/4 h-max bg-white rounded-xl px-2 py-2 dark:bg-[#2c303f] max-425:w-full">
                <div className="text-5xl text-gray-500 font-semibold py-5 px-5">分类</div>
                <div className="flex flex-wrap gap-2">
                    {posts.map((post, index) => (
                        <Link key={index} href={`/categories/${post.meta?.categories}`} className="categories-item w-max dark:text-white">{post.meta?.categories}</Link>
                    ))}
                </div>
            </div>
        </>
    )
}
