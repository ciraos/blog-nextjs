/*
 * @Author: Ciraos
 * Client Component file.
*/
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Avatar,
    Button,
    // Divider,
    Dropdown
} from "antd";
import type {
    MenuProps
} from "antd";
import {
    DownOutlined,
    HomeOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";
import { Icon } from "@iconify/react";
// import moment from "moment";
import LogoutButton from "./buttons/logout";

interface BannerProps {
    isLogin: boolean;
}

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (<Link href="/dashboard">仪表盘</Link>),
        icon: (<HomeOutlined />)
    },
    {
        key: '2',
        label: (<LogoutButton />),
        icon: (<LogoutOutlined />)
    }
];

export default function Banner({ isLogin }: BannerProps) {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const isPostPage = pathname.startsWith("/posts");

    const bannerHeight = isHomePage ? "100vh" : isPostPage ? "30rem" : "30rem";
    const backgdimg = isHomePage ? "url('https://cdn.smartcis.cn/gh/ciraos/ciraos-static@main/img/erciyuan/ganyu5.avif')" : isPostPage ? "url('https://cdn.smartcis.cn/gh/ciraos/ciraos-static@main/img/default_cover.avif')" : "none";

    return (
        <>
            <div className="banner flex flex-col justify-between"
                style={{
                    width: "100%",
                    height: bannerHeight,
                    backgroundAttachment: "fixed",
                    backgroundImage: backgdimg,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >
                <div className="header w-full h-16 mx-0 px-5 flex items-center justify-between">
                    <Link className="text-md text-black" href="/">葱苓小筑</Link>
                    <div className="flex items-center justify-center">
                        {isLogin ?
                            <Dropdown menu={{ items }}>
                                <Avatar
                                    className="hover:cursor-pointer"
                                >
                                    User
                                </Avatar>
                            </Dropdown>
                            :
                            <Button type="primary" href="/login">登录/注册</Button>
                        }
                        <div className="menu-btn">
                            <Icon icon="mdi:menu" width="30" height="30" />
                        </div>
                    </div>
                </div>

                {isHomePage ? (
                    <>
                        <div className="site-title w-full h-max text-center text-white">
                            <p className="text-6xl">葱苓小筑</p>
                            <p className="mt-1 text-md font-light">宝剑锋从磨砺出，梅花香自苦寒来。</p>
                        </div>
                        <div id="scrill-down" className="pb-2 text-white text-3xl text-center animate-bounce"><DownOutlined /></div>
                    </>
                ) : (
                    <></>
                )}

            </div>
        </>
    )
}
