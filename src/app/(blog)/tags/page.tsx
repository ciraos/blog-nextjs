/*
 * @description: 标签页面
 * Server page
*/
import { Metadata } from "next";
import {
    Badge,
    Flex,
} from "antd";
import { PostTagsResponse } from "@/types/psottags";

export const metadata: Metadata = {
    title: "文章 | 标签",
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getPostTags() {
    const o = await fetch(`${baseUrl}/post-tags?sort=name`);
    const res = await o.json() as PostTagsResponse;
    // console.log(res.data);
    return res.data;
}

export default async function Tags() {
    const tags = await getPostTags();

    return (
        <>
            <h2>标签</h2>
            <Flex
                align="center"
                gap="middle"
                wrap
            >
                {tags.map((item, index) => (
                    <Badge
                        count={item.count}
                        key={index}
                        size="small"
                    >
                        <div>{item.name}</div>
                    </Badge>
                ))}
            </Flex>
        </>
    );
}
