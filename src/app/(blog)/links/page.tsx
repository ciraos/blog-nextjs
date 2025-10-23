import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "葱苓小筑 | 友人帐"
};

interface LinkItem {
    code: number;
    message: string;
    data: string;
    list?: string[];
    id: number;
    name: string;
    url: string;
    logo: string;
    description: string;
    siteshot?: string;
    sort_order?: number;
    skip_health_check?: boolean;
    category: string[];
    tag?: string;
    category_id?: string;
    tag_id?: number;
    [property: string]: any;
}

async function getLinks() {
    const dd = await fetch('/api/links', {
        method: 'GET'
    })

    if (!dd.ok) {
        throw new Error('获取友链数据失败！');
    }

    const data = await dd.json();
    // console.log(data);

    return data as Promise<LinkItem[]>;
};

export default async function Links() {
    try {
        const links = await getLinks();

        return (
            <div>
                {links.length === 0 ? (
                    <p>暂无链接数据</p>
                ) : (
                    <ul className="space-y-4">
                        {links.map((link, index) => (
                            <li key={index} className="">
                                <Link
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=""
                                >
                                    {link.id}
                                    {link.list?.map((item, index) => (
                                        <li key={index}>
                                            {/* {item.} */}
                                        </li>
                                    ))}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    } catch (error) {
        return (
            <div className="">
                <p className="text-red-500">加载失败: {error instanceof Error ? error.message : '未知错误'}</p>
            </div>
        );
    }
}
