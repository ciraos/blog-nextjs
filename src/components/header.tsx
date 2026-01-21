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
import {
    MenuOutlined
} from "@ant-design/icons";

import { Icon } from "@iconify/react";
import SearchButton from "./buttons/search";
import { SiteConfigResponse } from "@/types/site-config";

interface HeaderProps {
    isLogin: boolean;
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getSiteConfig() {
    const p = await fetch(`${baseUrl}/public/site-config`);
    const res = await p.json() as SiteConfigResponse;
    // console.log(res.data.header.menu);
    return res.data;
    // return res.data.header.menu;
}

export default async function Header({ isLogin }: HeaderProps) {
    const config = await getSiteConfig();

    return (
        <>
            <div className="header w-full h-16 bg-white shadow-sm hover:shadow-md">
                <div className="header-wrapper h-full w-4/5 mx-auto flex items-center justify-around">
                    <Link className="w-18 h-full text-center content-center px-1 text-md text-black" href="/">葱苓小筑</Link>

                    {/* menu */}
                    <div className="menu">
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
                    <div className="w-max flex px-1 items-center gap-1.5">
                        <Tooltip title="随机前往一篇文章"><Icon icon="game-icons:card-random" width={25} height={25} className="hover:cursor-pointer" /></Tooltip>
                        <SearchButton />
                        {isLogin ? (
                            <Tooltip title="前往仪表盘"><Link href="/dashboard" target="_blank"><Avatar size={25} className="hover:cursor-pointer">U</Avatar></Link></Tooltip>
                        ) : (
                            <Tooltip title="登录/注册"><Button type="primary" href="/login" className="hover:cursor-pointer">登录/注册</Button></Tooltip>
                        )}
                        <Tooltip
                            title="菜单"
                        >
                            <MenuOutlined
                                className="menu-btn"
                                // onClick={ }
                                style={{ fontSize: 20 }}
                            />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    );
}
