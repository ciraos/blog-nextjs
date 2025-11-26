/*
 * @Author: Ciraos
 * Server Component file.
*/
import Link from "next/link";
import {
    Avatar,
    Button,
    Tooltip
} from "antd";
// import type { MenuProps } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { Icon } from "@iconify/react";

import SearchButton from "./buttons/search";
import DrawerButton from "./buttons/drawer";
import { SiteConfigResponse } from "@/types/site-config";

interface HeaderProps {
    isLogin: boolean;
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getSiteeConfig() {
    const p = await fetch(`${baseUrl}/public/site-config`);
    const res = await p.json() as SiteConfigResponse;
    // console.log(res.data.header.menu);
    return res.data;
    // return res.data.header.menu;
}

export default async function Header({ isLogin }: HeaderProps) {
    const config = await getSiteeConfig();

    return (
        <>
            <div className="header w-full h-16 bg-white shadow-sm hover:shadow-md">
                <div className="header-wrapper h-full w-4/5 mx-auto">
                    <Link className="w-18 h-full px-1 text-md text-black" href="/">葱苓小筑</Link>

                    {/* menu */}
                    <div className="menu w-[calc(100%-72px-136px)]">
                        {config.header.menu.map((item, index) => (
                            <ul key={index} className="navlist hover:cursor-pointer">
                                <li className="btli"><div>{item.title}</div>
                                    <ul className="droplist shadow-xs hover:shadow-ms">
                                        {item.items.map((child, index) => (
                                            <li key={index} className="">
                                                <Link href={child.path}>{child.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        ))}
                    </div>

                    {/* right menu */}
                    <div className="w-34 flex px-1 items-center gap-1.5">
                        <Tooltip title="随机前往一篇文章"><Icon icon="game-icons:card-random" width={25} height={25} className="hover:cursor-pointer" /></Tooltip>
                        <SearchButton />
                        {isLogin ? (
                            <Avatar size={25} className="hover:cursor-pointer">U</Avatar>
                        ) : (
                            <Tooltip title="登录/注册"><Button type="primary" href="/login" className="hover:cursor-pointer">登录/注册</Button></Tooltip>
                        )}
                        <DrawerButton />
                    </div>
                </div>
            </div>
        </>
    );
}
