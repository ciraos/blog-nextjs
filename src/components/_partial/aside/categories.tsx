import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

function AsideCategories() {
    const posts = getAllPosts();
    return (
        <>
            <div className="aside-categories py-2">
                {posts.map((post, index) => (
                    <Link href={`/categories/${post.meta?.categories}`} key={index} className="capitalize text-sm text-slate-600 dark:text-slate-300">{post.meta?.tags}</Link>
                ))}
            </div>
        </>
    )
}

export default AsideCategories;
