
import { getAllPosts } from "@/utils/posts";

export default async function Posts() {
    const posts = await getAllPosts();

    return (
        <div className="recent-posts">
            {posts.map((item, index) => (
                <div
                    key={index}
                    className="recent-posts-item"
                >
                    {item.meta?.title}
                </div>
            ))}
        </div>
    );
}
