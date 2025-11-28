/*
 * Server page 
*/
import type { Metadata } from "next";
import {
    LinkCategoriesResponse,
    LinkCategoriesItem
} from "@/types/links";

export const metadata: Metadata = {
    title: "友情链接",
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getLinkCategories() {
    const categoryRes = await fetch(`${baseUrl}/api/public/link-categories`, {
        "method": "GET"
    });
    if (!categoryRes.ok) { throw new Error('获取分类失败'); };
    const data: LinkCategoriesResponse = await categoryRes.json();
    const categoryIds = data.data.map((item: LinkCategoriesItem) => item.id);
    return categoryIds;
}

export default async function Link() {
    return (
        <>
            <h2>友情链接</h2>
        </>
    )
}
