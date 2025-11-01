import type { Metadata } from "next";
import { LinkCategoriesResponse, LinkCategoreiesItem } from "@/types/links";

export const metadata: Metadata = {
    title: "葱苓小筑 | 友人帐",
};

async function getLinkCategoriesIds(): Promise<number[] | null> {
    try {
        const response = await fetch("https://blog.ciraos.top/api/public/link-categories", {});

        if (!response.ok) {
            throw new Error(`获取友链分类数据出错：${response.status}`);
        }

        const result: LinkCategoriesResponse = await response.json();
        // console.log(result);

        const ids = result.data.map((item: LinkCategoreiesItem) => item.id);
        // console.log(ids);

        return ids;
    } catch (error) {
        console.error("获取友链数据出错：", error);
        return null;
    }
}

async function getLinksByIds(ids: number[]) {
    if (ids.length === 0) return [];

    const params = new URLSearchParams();
    ids.forEach(id => params.append('link-categories', String(id)));

    try {
        const response = await fetch(`https://blog.ciraos.top/api/public/links?${params.toString()}`);
        if (!response.ok) throw new Error(`HTTP错误！状态码： ${response.status}`);
        const result = await response.json();
        // console.log(result);

        return result;
    } catch (error) {
        console.error("Failed to fetch links:", error);
        return null;
    }
}

export default async function Link() {
    const categoriesID = await getLinkCategoriesIds();
    // const link = await fetchLinksByIds(categoriesID);

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-8">友情链接</h2>
        </div>
    );
}
