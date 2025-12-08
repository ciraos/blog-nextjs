/*
 * Server page 
*/
import Link from "next/link";
import type { Metadata } from "next";
import {
    LinkCategoriesResponse,
    LinkResponse
} from "@/types/links";

export const metadata: Metadata = {
    title: "友情链接",
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getLinkCategories() {
    try {
        const g = await fetch(`${baseUrl}/public/link-categories`);
        if (!g.ok) {
            throw new Error('获取分类失败');
        };
        const res = await g.json() as LinkCategoriesResponse;
        const categoryIds = res.data.map((item) => item.id);
        // console.log(res);
        // console.log(res.data);
        // console.log(categoryIds);
        return categoryIds;
    } catch (error) {
        console.error('获取友链分类出错:', error);
        return [];
    }
}

async function getLinks() {
    try {
        const categoryIds = await getLinkCategories();
        const v = await fetch(`${baseUrl}/public/links?${categoryIds}`);
        if (!v.ok) {
            throw new Error('获取友链失败');
        };
        const res = await v.json() as LinkResponse;
        // console.log(res);
        return res.data
    } catch (error) {
        console.error('获取友链出错:', error);
        return [];
    }
}

export default async function LinkPage() {
    const links = await getLinks();
    // console.log(links);

    return (
        <>
            <h2>友情链接</h2>

            {/* {links.map((item, index) => ())} */}
        </>
    )
}
