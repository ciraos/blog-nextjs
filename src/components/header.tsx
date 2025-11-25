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

interface HeaderProps {
    isLogin: boolean;
};

export default function Header({ isLogin }: HeaderProps) {
    return (
        <>
            <div className="header w-full h-16 bg-white shadow-sm hover:shadow-md">
                <div className="header-wrapper h-full w-4/5 mx-auto flex items-center justify-between">

                    <div className="w-max px-1 flex items-center">
                        <Link className="text-md text-black" href="/">葱苓小筑</Link>
                    </div>

                    {/* menu */}
                    <div className="menu"></div>

                    {/* right menu */}
                    <div className="flex px-1 items-center gap-1.5">
                        <Tooltip title="随机前往一篇文章"><Icon icon="game-icons:card-random" width={25} height={25} className="hover:cursor-pointer" /></Tooltip>
                        <SearchButton />
                        <Tooltip title="登录/注册">
                            {isLogin ? (
                                <Avatar size={25} className="hover:cursor-pointer">U</Avatar>
                            ) : (
                                <Button type="primary" href="/login" className="hover:cursor-pointer">登录/注册</Button>
                            )}
                        </Tooltip>
                        <DrawerButton />
                    </div>
                </div>
            </div>
        </>
    );
}
