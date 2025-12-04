/*
 * @Description: 归档
 * @author: Ciraos
 * Server Component
*/
import { Metadata } from "next";
import Link from "next/link";
import {
    Image
} from "antd";
import {
    CalendarOutlined

} from "@ant-design/icons";
import { PostListResponse } from "@/types/articles";
import moment from "moment";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const metadata: Metadata = {
    title: "文章 | 归档",
};

export default async function Archives() {
    const x = await fetch(`${baseUrl}/public/articles`);
    const res = await x.json() as PostListResponse;
    const posts = res.data.list;
    // console.log(posts);

    return (
        <>
            <h2>归档</h2>
            <div className="">
                {posts.map((item, index) => (
                    <Link key={index} href={item.id} className="archives">

                        <div className="flex items-center">
                            <Image
                                alt="post-cover"
                                className="shadow-sm hover:shadow-md"
                                preview={false}
                                src={item.cover_url}
                                style={{ width: 150, height: 80 }}
                            />
                            <div className="ml-2">
                                <div className="flex items-center text-xs text-slate-500">
                                    <CalendarOutlined style={{ fontSize: 14, marginRight: 8 }} />
                                    {moment(item.created_at).format("YYYY-MM-DD")}
                                </div>
                                <div className="mt-2 text-sm">{item.title}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
