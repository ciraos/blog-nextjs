/*
 * @Description: 归档
 * @author: Ciraos
 * Server Component
*/

import Link from "next/link";
import {
    Timeline
} from "antd";
import "@ant-design/v5-patch-for-react-19";
import { fetchPostList } from "@/utils/articles";
import { PostListResponse } from "@/types/articles";

export default async function ArchivespPage() {
    const postData: PostListResponse = await fetchPostList();
    const { code, message, data } = postData;
    const {
        list:
        postList,
        total,
        // page,
        pageSize
    } = data;

    if (code !== 200) {
        return <div>获取失败：{message}</div>;
    }

    return (
        <>
            <div className="timeline">
                {postList.map((post, index) => (
                    <Link key={index} href={`/posts/${post.id}`}
                        className="timeline-item"
                    >
                        {post.title}
                    </Link>
                ))}
            </div>
        </>
    );
}
