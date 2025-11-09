import Link from "next/link";
import type {
    Metadata,
    // ResolvingMetadata
} from 'next';
import {
    Divider,
    // Typography
} from "antd";
import "@ant-design/v5-patch-for-react-19";
import { Icon } from "@iconify/react";
import moment from "moment";
import ArticlePage from "@/components/(blog)/articlepage";

type Props = {
    params: Promise<{ id: string, title: string, description: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const res = await fetch(`https://blog.ciraos.top/api/public/articles/${id}`).then((res) => res.json());
    const title = res.data.title;
    const description = res.data.description || "OOPS! 描述为空喵~";
    return {
        title: `${title} - ${description}`,
    }
};

export default async function Post(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;
    const res = await fetch(`https://blog.ciraos.top/api/public/articles/${id}`).then((res) => res.json());
    const created_at = moment(res.data.created_at).format('YYYY-MM-DD hh:mm:ss');
    const updated_at = moment(res.data.updated_at).format('YYYY-MM-DD hh:mm:ss');

    return (
        <>
            <div className="post-container">

                <div className="post-header h-45 py-3 px-7 rounded-xl bg-white shadow-xl hover:shadow-md">
                    <div className="text-2xl">{res.data.title}</div>
                    <div className="mt-3 flex items-center text-sm">
                        <span className="flex"><Icon icon="icon-park-outline:time" width={18} height={18} className="mr-1" />
                            <span className="mr-1">创建于</span>
                            {created_at}
                            {/* {moment(post.meta?.created).format('YYYY-MM-DD, h:mm:ss')} */}
                        </span>
                        <Divider type="vertical" variant="solid" />
                        <span className="flex"><Icon icon="icon-park-outline:time" width={18} height={18} className="mr-1" />
                            <span className="mr-1">更新于</span>
                            {updated_at}
                            {/* {moment(post.meta?.updated).format('YYYY-MM-DD, h:mm:ss')} */}
                        </span>
                    </div>
                    {/* <div className="tags flex items-center">
                        {res.data.post_tags.length > 0 && (
                            <div className="tags-item flex">
                                {res.post_tags.map((tag: any, index: any) => (
                                    <span key={index} style={{ marginRight: '8px' }}>
                                        #{tag.name}
                                    </span>
                                ))}
                            </div>
                        )}
                        <Divider type="vertical" variant="solid" />
                        {res.data.post_categories.length > 0 && (
                            <div className="flex">
                                {res.data.post_categories.map((category: any) => (
                                    <span key={category.id} style={{ marginRight: '8px' }}>
                                        {category.name}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div> */}
                </div>

                <ArticlePage params={{ id }} />

                <div className="post-footer py-3 px-7 border-l-4 border-pink-400 rounded-r-xl bg-slate-50 shadow-sm hover:shadow-md">
                    <div className="post-footer-article-info">
                        <div className="flex items-center">
                            <span className="w-20 text-[#39c5bb] font-semibold">文章作者:&nbsp;</span>
                            <span className="text-sm">葱苓sama</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-20 text-[#39c5bb] font-semibold">文章标题:&nbsp;</span>
                            <span className="text-sm">{res.data.title}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-20 text-[#39c5bb] font-semibold">文章链接:&nbsp;</span>
                            <Link className="text-sm border-b-2 hover:bg-blue-400" href={`https://blog.ciraos.top/posts/${id}`}>{`https://blog.ciraos.top/posts/${id}`}</Link>
                        </div>
                        <div className="flex items-center">
                            <span className="w-20 text-[#39c5bb] font-semibold">发布时间:&nbsp;</span>
                            <span className="text-sm">{moment(res.data.created_at).format('YYYY-MM-DD')}</span>
                        </div>
                        <div>
                            <span className="w-20 text-[#39c5bb] font-semibold">版权声明:&nbsp;</span>
                            <span className="text-sm break-all">除特别声明外，本博客所有文章均采用<Link className="border-b-2 hover:bg-blue-400" target="_blank" rel="noopener external nofollow noreferrer" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">&nbsp;CC&nbsp;BY-NC-SA&nbsp;4.0&nbsp;</Link>授权协议。转载请注明出处：<Link className="border-b-2 hover:bg-blue-400" href="https://blog.ciraos.top">&nbsp;葱苓小筑&nbsp;</Link>。</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
