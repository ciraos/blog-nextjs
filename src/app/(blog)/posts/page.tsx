import { Metadata } from "next";
import Link from "next/link";
import {
    Divider,
    Image
} from "antd";
import "@ant-design/v5-patch-for-react-19";
import { Icon } from "@iconify/react";
import moment from "moment";

import { fetchPostList } from "@/utils/articles";
import { PostListResponse } from "@/types/articles";

export const metadata: Metadata = {
    title: "葱苓小筑 | 所有文章",
};

export default async function Posts() {
    const postData: PostListResponse = await fetchPostList();
    const { code, message, data } = postData;
    const { list: postList, total, page, pageSize } = data;

    if (code !== 200) {
        return <div>获取失败：{message}</div>;
    }

    return (
        <>
            <div className="recent-posts">
                {postList.map((post: any) => (
                    <div key={post.id} style={{ margin: '20px 0' }} className="recent-posts-item shadow-sm">

                        <Link href={`/posts/${post.id}`}>
                            <Image
                                alt="fl-avatar"
                                width={344}
                                height={236.8}
                                preview={false}
                                src={post.cover_url}
                                fallback="https://cdn.smartcis.cn/gh/ciraos/ciraos-static@main/img/404_1.avif"
                            />
                        </Link>

                        <div className="w-[calc(100%-344px)] py-2 px-5 flex flex-col justify-center">
                            <Link href={`/posts/${post.abbrlink}`} className="text-2xl">{post.title ?? "无题"}</Link>
                            <div className="flex items-center text-sm mt-2">
                                <span className="flex">
                                    <Icon icon="icon-park-outline:time" width={18} height={18} className="mr-1" />
                                    <span className="mr-1">创建于</span>
                                    {post.created_at ? moment(post.created_at).format('YYYY-MM-DD, h:mm:ss') : '未知'}
                                </span>
                                <Divider type="vertical" variant="solid" />
                                <span className="flex">
                                    <Icon icon="icon-park-outline:time" width={18} height={18} className="mr-1" />
                                    <span className="mr-1">更新于</span>
                                    {post.updated_at ? moment(post.updated_at).format('YYYY-MM-DD, h:mm:ss') : '未知'}
                                </span>
                            </div>
                            <div className="text-sm m-0">{post.description ?? "描述为空捏！"}</div>
                            <div className="tags flex items-center">
                                {post.post_tags.length > 0 && (
                                    <div className="tags-item flex">
                                        {/* <Icon icon="famicons:pricetags-sharp" width="15px" height="15px" /> */}
                                        {post.post_tags.map((tag: any) => (
                                            <span key={tag.id} style={{ marginRight: '8px' }}>
                                                #{tag.name}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <Divider type="vertical" variant="solid" />
                                {/* {post.post_categories.length > 0 && (
                  <div className="flex">
                    {post.post_categories.map((category: any) => (
                      <span key={category.id} style={{ marginRight: '8px' }}>
                        {category.name}
                      </span>
                    ))}
                  </div>
                )} */}
                            </div>
                            <div className="text-sm">阅读量：{post.view_count} | 阅读时间：{post.reading_time}分钟</div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    );
}
