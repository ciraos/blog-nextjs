/*
 * @Author: Ciraos
 * Client Component file.
*/

"use client";
import {
    useEffect,
    useState
} from "react";
import Link from "next/link";

import {
    Avatar,
    Button,
    Drawer,
    Dropdown
} from "antd";
import type {
    MenuProps
} from "antd";
import {
    HomeOutlined,
    LogoutOutlined,
    UserOutlined
} from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";

import LogoutButton from "./buttons/logout";

interface HeaderProps {
    isLogin: boolean;
}

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (<Link href="/dashboard" target="_blank">仪表盘</Link>),
        icon: (<HomeOutlined />)
    },
    {
        key: '2',
        label: (<LogoutButton />),
        icon: (<LogoutOutlined />)
    }
];

export default function Header({ isLogin }: HeaderProps) {
    const [open, setOpen] = useState(false);
    const [currentInnerWidth, setCurrentInnerWidth] = useState<number | undefined>(undefined);
    const isMobile = currentInnerWidth !== undefined && currentInnerWidth <= 768;

    const showDrawer = () => { setOpen(true); };

    const onDrawerClose = () => { setOpen(false); };

    useEffect(() => {

        const updateWidth = () => setCurrentInnerWidth(window.innerWidth);
        updateWidth();

        const handleResize = () => {
            updateWidth();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="header w-full h-16 mx-0 px-5 bg-white flex items-center justify-between shadow-sm hover:shadow-md">
                <Link className="text-md text-black" href="/">葱苓小筑</Link>

                {!isLogin ? (
                    <Button className="w-24" type="primary" href="/login">登录/注册</Button>
                ) : isMobile ? (
                    <Avatar
                        className="hover:cursor-pointer"
                        icon={<UserOutlined />}
                        onClick={showDrawer}
                        size='large'
                    >
                        user
                    </Avatar>
                ) : (
                    <Dropdown arrow menu={{ items }}>
                        <Avatar
                            className="hover:cursor-pointer"
                            icon={<UserOutlined />}
                            onClick={showDrawer}
                            size='large'
                        >
                            user
                        </Avatar>
                    </Dropdown>
                )}

                <Drawer
                    closable
                    destroyOnHidden
                    keyboard
                    mask
                    maskClosable
                    onClose={onDrawerClose}
                    open={open}
                    title="这是一个可爱的菜单呢喵！"
                >
                </Drawer>

            </div>
        </>
    );
}
