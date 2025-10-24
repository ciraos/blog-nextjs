import Link from "next/link";

import { getAllPosts } from "@/utils/posts";

export default async function Posts() {
    const posts = await getAllPosts();

    return (
        <div className="recent-posts">
            {posts?.map((post: any) => (
                <Link
                    href={`/posts/${post.slug}`}
                    className="recent-posts-item"
                    key={post.slug}
                >
                    <div className="">
                        {post.meta?.title}
                    </div>
                    <time className="">
                        {post.meta?.created?.toString()}
                    </time>
                </Link>
            ))}
        </div>
    );
}
