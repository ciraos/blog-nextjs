/*
 * @author: 葱苓sama
 * Server page
*/
import { Metadata } from "next";
import { cookies } from "next/headers";
import {
    Card,
    Divider,
    Flex,
    Masonry
} from "antd";
import {
    CommentOutlined
} from "@ant-design/icons";
import { EssayResponse } from "@/types/essay";
import moment from "moment";

export const metadata: Metadata = {
    title: "即刻",
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getEssays() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const g = await fetch(`${baseUrl}/pro/essays?page=1&page_size=10`, {
        "headers": {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json",
            "Origin": "https://blog.ciraos.top"
        },
    });
    const res = await g.json() as EssayResponse;
    // console.log(token);
    // console.log(res);
    return res.data;
}

export default async function Essay() {
    const essays = await getEssays();

    return (
        <>
            <Flex
                wrap
                className="essay-container"
                style={{ listStyleType: 'none' }}
            >
                {essays.list.map((item, index) => (
                    <div
                        className="w-72 h-max py-2 px-4 bg-white rounded-xl shadow-sm hover:shadow-md"
                        key={index}
                    >
                        <div
                            className="font-medium"
                            style={{}}
                        >
                            {item.content}
                        </div>
                        <Divider size="small" />
                        <div className="flex items-center text-slate-600">
                            <div className="text-sm">
                                <span>{moment(item.created_at).format('YYYY-MM-DD')}</span>
                                <span>{item.from}</span>
                                <span>{item.address}</span>
                            </div>
                            <CommentOutlined />
                        </div>
                    </div>
                ))}
            </Flex>
        </>
    )
}
