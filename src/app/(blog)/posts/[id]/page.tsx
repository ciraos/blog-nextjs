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
        title: `葱苓小筑 | ${title} - ${description}`,
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
                    <div>tags · categories</div>
                    <div>descriptions</div>
                </div>

                <ArticlePage params={{ id }} />

                <div className="post-footer py-3 px-7 rounded-xl bg-slate-100 shadow-sm hover:shadow-md"></div>

            </div>
        </>
    );
}
