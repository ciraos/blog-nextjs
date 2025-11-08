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
import { usePathname } from "next/navigation";
import {
    Avatar,
    Button,
    Drawer,
    Dropdown
} from "antd";
import type {
    DrawerProps,
    MenuProps
} from "antd";
import {
    DownOutlined,
    HomeOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";
import LogoutButton from "./buttons/logout";

interface BannerProps {
    isLogin: boolean;
}

// 常量定义
const HOME_BG_URL = "url('https://cdn.smartcis.cn/gh/ciraos/ciraos-static@main/img/erciyuan/ganyu5.avif')";
const POST_BG_URL = "url('https://cdn.smartcis.cn/gh/ciraos/ciraos-static@main/img/default_cover.avif')";
const DEFAULT_BG_URL = "url('https://cdn.smartcis.cn/gh/ciraos/ciraos-static@main/img/erciyuan/miku3.avif')";

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
    const [open, setOpen] = useState(false);
    const [currentInnerWidth, setCurrentInnerWidth] = useState<number | undefined>(undefined); // 初始设为 undefined 更安全
    const [size, setSize] = useState<DrawerProps['size']>();
    const pathname = usePathname();
    const isMobile = currentInnerWidth !== undefined && currentInnerWidth <= 768;
    const isHomePage = pathname === "/";
    const isPostPage = pathname.startsWith("/posts");
    const bannerHeight = isHomePage ? "100vh" : "30rem";

    // console.log(currentInnerWidth);

    let backgdimg = "";
    if (isHomePage) {
        backgdimg = HOME_BG_URL;
    } else if (isPostPage) {
        backgdimg = POST_BG_URL;
    } else {
        backgdimg = DEFAULT_BG_URL;
    }

    const showDrawer = () => {
        setSize('default');
        setOpen(true);
    };

    const onDrawerClose = () => { setOpen(false); };

    const handlerScroll = () => {
        if (typeof window != 'undefined') {
            window.scrollTo({
                top: window.scrollY + window.innerHeight,
                behavior: "smooth"
            });
        }
    };

    useEffect(() => {

        const updateWidth = () => setCurrentInnerWidth(window.innerWidth);
        updateWidth(); // 立即设置一次宽度

        const handleResize = () => {
            updateWidth();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
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
                <Link className="text-md text-white" href="/">葱苓小筑</Link>
                {!isLogin ? (
                    <Button className="w-24" type="primary" href="/login">登录/注册</Button>
                ) : isMobile ? (
                    <Avatar
                        className="hover:cursor-pointer"
                        onClick={showDrawer}
                        style={{ backgroundColor: "#f56a00", fontWeight: "bold" }}
                    >
                        user
                    </Avatar>
                ) : (
                    <Dropdown arrow menu={{ items }}>
                        <Avatar
                            className="hover:cursor-pointer"
                            style={{ backgroundColor: "#f56a00", color: "black", fontWeight: "bold" }}
                        >
                            user
                        </Avatar>
                    </Dropdown>
                )}
            </div>

            {isHomePage && (
                <>
                    <div className="site-title w-full h-max text-center text-white">
                        <p className="text-6xl font-mono">葱苓小筑</p>
                        <p className="mt-1 text-md font-light">宝剑锋从磨砺出，梅花香自苦寒来。</p>
                    </div>
                    <div
                        onClick={handlerScroll}
                        id="scrill-down" className="pb-2 text-white text-3xl text-center animate-bounce hover:cursor-pointer"><DownOutlined /></div>
                </>
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
    );
}
