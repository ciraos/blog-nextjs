import Link from "next/link";
import type {
    Metadata,
    // ResolvingMetadata
} from 'next';
import {
    Button,
    Divider,
    // Typography
} from "antd";
import "@ant-design/v5-patch-for-react-19";
import { Icon } from "@iconify/react";
import moment from "moment";

import ArticlePage from "@/components/(blog)/articlepage";
import Comment from "@/components/(blog)/comment";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

type Props = {
    params: Promise<{ id: string, title: string, description: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const res = await fetch(`${baseUrl}/public/articles/${id}`).then((res) => res.json());
    const title = res.data.title;
    const description = res.data.summaries || "";
    return {
        title: `${title}-${description}`,
    }
};

export default async function Post(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;
    const res = await fetch(`${baseUrl}/public/articles/${id}`).then((res) => res.json());
    // console.log(res);
    const created_at = moment(res.data.created_at).format('YYYY-MM-DD hh:mm:ss');
    const updated_at = moment(res.data.updated_at).format('YYYY-MM-DD hh:mm:ss');

    return (
        <>
            <div className="post-header h-45 py-3 px-7 rounded-xl bg-white shadow-xl hover:shadow-md">
                <div className="text-2xl">{res.data.title}</div>
                <div className="mt-3 flex items-center text-sm">
                    <span className="flex"><Icon icon="icon-park-outline:time" width={18} height={18} className="mr-1" />
                        <span className="mr-1">创建于</span>
                        {created_at}
                    </span>
                    <Divider type="vertical" variant="solid" />
                    <span className="flex"><Icon icon="icon-park-outline:time" width={18} height={18} className="mr-1" />
                        <span className="mr-1">更新于</span>
                        {updated_at}
                    </span>
                </div>
            </div>

            <ArticlePage params={{ id }} />

            <div className="post-footer py-3 px-7 border-l-4 border-pink-400 rounded-r-xl bg-slate-50 shadow-sm hover:shadow-md">
                <div className="post-footer-article-info">
                    <div>
                        <span className="w-20 text-[#39c5bb] font-semibold">文章作者:&nbsp;</span>
                        <span className="text-sm break-all">葱苓sama</span>
                    </div>
                    <div>
                        <span className="w-20 text-[#39c5bb] font-semibold">文章标题:&nbsp;</span>
                        <span className="text-sm break-all">{res.data.title}</span>
                    </div>
                    <div>
                        <span className="w-20 text-[#39c5bb] font-semibold">文章链接:&nbsp;</span>
                        <Link className="text-sm break-all border-b-2 hover:bg-blue-400" href={`https://blog.ciraos.top/posts/${id}`}>{`https://blog.ciraos.top/posts/${id}`}</Link>
                    </div>
                    <div>
                        <span className="w-20 text-[#39c5bb] font-semibold">发布时间:&nbsp;</span>
                        <span className="text-sm break-all">{moment(res.data.created_at).format('YYYY-MM-DD')}</span>
                    </div>
                    <div>
                        <span className="w-20 text-[#39c5bb] font-semibold">版权声明:&nbsp;</span>
                        <span className="text-sm break-all">除特别声明外，本博客所有文章均采用<Link className="border-b-2 hover:bg-blue-400" target="_blank" rel="noopener external nofollow noreferrer" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">&nbsp;CC&nbsp;BY-NC-SA&nbsp;4.0&nbsp;</Link>授权协议。转载请注明出处：<Link className="border-b-2 hover:bg-blue-400" href="https://blog.ciraos.top">&nbsp;葱苓小筑&nbsp;</Link>。</span>
                    </div>
                </div>

                <div className="mt-1 mx-auto flex items-center justify-center gap-1">
                    <Button type="primary" >打赏作者</Button>
                    <Button type="link" href="/rss.xml" target="_blank">订阅</Button>
                </div>
            </div>

            <div className="article-tags"></div>

            {/* prev or next article */}
            <div className="prev-next-article-title"></div>

            <Comment id={id} />
        </>
    );
}
