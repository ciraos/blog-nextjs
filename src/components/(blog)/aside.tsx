/*
 * @description: 侧边栏
 * @author: ciraos
 * Server Component
*/
import Link from "next/link";
import {
    Image,
} from "antd";
// import type { } from "antd";

import { Icon } from "@iconify/react";
import { fetchPostList } from "@/utils/articles";
import { PostListResponse } from "@/types/articles";
import { SiteConfigResponse } from "@/types/site-config";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getSiteConfig() {
    const k = await fetch(`${baseUrl}/public/site-config`);
    const res = await k.json() as SiteConfigResponse;
    return res.data;
}

export default async function Aside() {
    const postData: PostListResponse = await fetchPostList();
    const { code, message, data } = postData;
    const { list:
        postList,
        // total,
        // page,
        // pageSize
    } = data;
    const config = await getSiteConfig();

    if (code !== 200) {
        return <div>获取失败：{message}</div>;
    }

    return (
        <>
            <aside className="aside w-[24%] h-auto pl-4">

                <div
                    className="aside-item info h-82"
                >
                    <div className="w-4/5 h-8 mx-auto bg-slate-100 rounded-xl text-sm text-center font-semibold font-mono content-center shadow-xs text-slate-600">Don&apos;t worry, be happy.</div>
                    <div className="w-full h-[calc(100%-32px-32px)] flex items-center justify-center">
                        <Image
                            alt="avatar"
                            style={{ width: 120, height: "calc(100%-32px-32px)" }}
                            className="rounded-full border-2 border-slate-200"
                            preview={false}
                            src={config.about.avatar_img}
                            fallback="data:image/png;base64,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"
                        />
                    </div>
                    <div className="h-8 flex items-end justify-between">
                        <div className="">{config.frontDesk.siteOwner.name}</div>
                        <div className="flex items-center gap-1">
                            <Link href="https://github.com/ciraos" target="_blank" rel="noopener noreferrer"><Icon icon="pajamas:github" width="20" height="20" /></Link>
                            <Link href="https://space.bilibili.com/142450786" target="_blank" rel="noopener noreferrer"><Icon icon="ant-design:bilibili-filled" width="26" height="26" style={{ color: '#e87c93' }} /></Link>
                        </div>
                    </div>
                </div>

                <div className="aside-item">
                    <div className="aside-item-title"><Icon icon="icon-park:volume-notice" width="20" height="20" /><span className="pl-1">公告</span></div>
                    <p>欢迎来到我的博客呀！</p>
                </div>

                <div className="aside-item">
                    <div className="aside-item-title"><Icon icon="grommet-icons:article" width="20px" height="20px" /><span className="pl-1">最新文章</span></div>
                    <div className="pr-1 flex flex-col gap-1">
                        {postList.map((post, index) => (
                            <Link href={`/posts/${post.id}`} key={index} className="h-6 overflow-hidden">
                                <span className="text-sm">{post.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="aside-item"></div>

                <div className="aside-item">
                    <div className="aside-item-title"><Icon icon="bi:clipboard-data-fill" width="14px" height="14px" style={{ color: '#48b0db' }} /><span className="pl-1">统计</span></div>
                    <div>
                        <div className="text-sm m-0 flex items-center justify-between">文章总数:<span>{config.sidebar.siteinfo.totalPostCount}&nbsp;篇</span></div>
                        <div className="text-sm mt-1 flex items-center justify-between">建站天数:<span>0&nbsp;天</span></div>
                        <div className="text-sm mt-1 flex items-center justify-between">全站字数:<span>{config.sidebar.siteinfo.totalWordCount}&nbsp;字</span></div>
                    </div>
                </div>

            </aside>
        </>
    );
}
