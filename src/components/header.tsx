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
    MenuOutlined,
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
            <div className="header w-full h-16 bg-white shadow-sm hover:shadow-md">
                <div className="header-wrapper h-full w-4/5 mx-auto flex items-center justify-between">
                    <Link className="text-md text-black" href="/">葱苓小筑</Link>

                    <div className="w-max px-1 flex items-center">
                        {isLogin ? (
                            <Dropdown arrow menu={{ items }}>
                                <Avatar
                                    className="hover:cursor-pointer"
                                    icon={<UserOutlined />}
                                    // onClick={showDrawer}
                                    size='small'
                                >
                                    user
                                </Avatar>
                            </Dropdown>
                        ) : (
                            <Button className="w-24" type="primary" href="/login">登录/注册</Button>
                        )}

                        <MenuOutlined
                            onClick={showDrawer}
                            style={{ marginLeft: '5px' }}
                        />
                    </div>
                </div>
            </div>
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
        </>
    );
}
