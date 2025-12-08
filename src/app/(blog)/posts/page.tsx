/*
 * server page 
*/

import type { Metadata } from "next";
import Link from "next/link";

import {
    Divider,
    Image,
    Pagination
} from "antd";

import { Icon } from "@iconify/react";
import moment from "moment";

import { fetchPostList } from "@/utils/articles";
import { PostListResponse } from "@/types/articles";

export const metadata: Metadata = {
    title: "所有文章",
};

export default async function Posts() {
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
            <div className="recent-posts">
                {postList.map((post, index) => (
                    <div key={index} style={{}} className="recent-posts-item shadow-sm">

                        <Link href={`/posts/${post.id}`} className="post-cover w-[42%] h-full">
                            <Image
                                alt="fl-avatar"
                                fallback="https://cdn.jsdmirror.com/gh/ciraos/ciraos-static@main/img/404_1.avif"
                                preview={false}
                                src={post.cover_url}
                                style={{ height: 220.8 }}
                            />
                        </Link>

                        <div className="post-meta w-[calc(100%-344px)] py-2 px-5 flex flex-col justify-center">
                            <Link href={`/posts/${post.id}`} className="text-2xl">{post.title}</Link>

                            <div className="text-sm mt-2">
                                <span className="flex items-center">
                                    <Icon icon="icon-park-outline:time" width={18} height={18} className="mr-1" />
                                    <span className="mr-1">创建于{post.created_at ? moment(post.created_at).format('YYYY-MM-DD') : '未知'}</span>
                                </span>
                                {/* <Divider orientation="vertical" variant="solid" /> */}
                                {/* <span className="flex items-center break-all">
                                    <Icon icon="icon-park-outline:time" width={18} height={18} className="mr-1" />
                                    <span className="mr-1">更新于{post.updated_at ? moment(post.updated_at).format('YYYY-MM-DD') : '未知'}</span>
                                </span> */}
                            </div>

                            <div className="text-sm m-0">{post.summaries}</div>

                            <div className="flex items-center">
                                {post.post_tags.length > 0 && (
                                    <div className="flex">
                                        {post.post_tags.map((tag, index) => (
                                            <span key={index} style={{ marginRight: '8px' }}>
                                                #{tag.name}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* <Divider orientation="vertical" variant="solid" /> */}

                                {post.post_categories.length > 0 && (
                                    <div className="flex items-center">
                                        <Icon icon="mdi:category" width="16px" height="16px" />
                                        {post.post_categories.map((category) => (
                                            <span key={category.id} style={{ marginRight: '8px' }}>
                                                {category.name}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="text-sm">阅读量：{post.view_count} | 阅读时间：{post.reading_time}分钟</div>

                        </div>
                    </div>
                ))}

                <Pagination
                    style={{ marginTop: '10px' }}
                    align="center"
                    // current={page}
                    defaultCurrent={1}
                    defaultPageSize={pageSize}
                    responsive
                    showQuickJumper
                    showTitle
                    // showTotal={ }
                    total={total}
                />

            </div>
        </>
    );
}
