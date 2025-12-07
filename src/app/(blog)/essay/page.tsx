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
    Image,
    Masonry
} from "antd";
import {
    CommentOutlined
} from "@ant-design/icons";
import { Icon } from "@iconify/react";
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
    // console.log(res.data.list);
    return res.data;
}

export default async function Essay() {
    const essays = await getEssays();

    return (
        <>
            <h2>即刻<span className="">{'(' + essays.total + ')'}</span></h2>
            <Flex
                className="essay-container"
                gap="small"
                justify="center"
                wrap
            >
                {essays.list.map((item, index) => (
                    <div
                        className="essay-item w-72 h-max py-2 px-4 bg-white rounded-xl shadow-sm hover:shadow-md"
                        key={index}
                    >
                        <div
                            className="font-medium"
                            style={{}}
                        >
                            {item.content}
                            {/* {item.image.map((item, index) => (<Image alt="essay-img" key={index} src={} />))} */}
                        </div>
                        <Divider size="small" />
                        <div className="flex items-center justify-between text-slate-600">
                            <div className="flex items-center text-sm">
                                <span className="flex items-center">
                                    <Icon icon="weui:time-outlined" width="16" height="16" />
                                    <span>{moment(item.created_at).format('YYYY-MM-DD')}</span>
                                </span>
                                <span className="flex items-center ml-2">
                                    <Icon icon="ant-design:user-outlined" width="16" height="16" />
                                    <span>{item.from}</span>
                                </span>
                                <span className="flex items-center ml-2">
                                    <Icon icon="mdi:address-marker-outline" width="16" height="16" />
                                    <span>{item.address}</span>
                                </span>
                            </div>
                            <CommentOutlined />
                        </div>
                    </div>
                ))}
            </Flex>
        </>
    )
}
