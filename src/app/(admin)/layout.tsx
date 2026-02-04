/*
 * @author: 葱苓sama
 * Server Layout
*/
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import {
    ConfigProvider,
    Image
} from "antd";
import {
    AppstoreOutlined,
    BookOutlined,
    CommentOutlined,
    HomeOutlined,
    LinkOutlined,
    PictureOutlined,
    ProfileOutlined,
    RedEnvelopeOutlined,
    SettingOutlined,
    ShoppingCartOutlined,
    ShopOutlined,
    UserOutlined
} from '@ant-design/icons';
import LogoutButton from "@/components/buttons/logout";

const imageFallbackPath = "https://cdn.jsdmirror.com/gh/ciraos/ciraos-static@main/img/404_1.avif";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <html lang="zh-CN">
                <body>
                    <ConfigProvider theme={{
                        components: {
                            Layout: {
                                lightTriggerBg: '#f4f4f4',
                                lightTriggerColor: '#aaa',
                                lightSiderBg: '#fff',
                                triggerBg: '#f4f4f4',
                                triggerColor: '#aaa',
                                siderBg: '#fff',
                            }
                        }
                    }}
                    >
                        <div id="CIRAOS" className="flex">

                            <NextTopLoader
                                easing="ease"
                                shadow="box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"
                                showSpinner={false}
                            />

                            <div className="left-aside h-screen bg-white">
                                <div className="py-1 flex items-center justify-center gap-0.5">
                                    <Image
                                        alt="site-logo"
                                        width={62}
                                        height={50}
                                        src="error"
                                        fallback={imageFallbackPath}
                                        preview={false}
                                    />
                                    <div>葱苓小筑Admin</div>
                                </div>
                                <ul className="left-aside-menu">
                                    <li className="left-aside-menu-item"><HomeOutlined /><Link href="/dashboard" className="ml-4">仪表盘</Link></li>
                                    <li className="left-aside-menu-item"><ShoppingCartOutlined /><Link href="/order-management" className="ml-4">订单管理</Link></li>
                                    <li className="left-aside-menu-item"><BookOutlined /><Link href="/post-management" className="ml-4">文章管理</Link></li>
                                    <li className="left-aside-menu-item"><ProfileOutlined /><Link href="/file-management" className="ml-4">文件管理</Link></li>
                                    <li className="left-aside-menu-item"><ShopOutlined /><Link href="/theme-mall" className="ml-4">主题商城</Link></li>
                                    <li className="left-aside-menu-item"><PictureOutlined /><Link href="/album-management" className="ml-4">相册管理</Link></li>
                                    <li className="left-aside-menu-item"><AppstoreOutlined /><Link href="/storage-policy" className="ml-4">存储策略</Link></li>
                                    <li className="left-aside-menu-item"><CommentOutlined /><Link href="/comment-management" className="ml-4">评论管理</Link></li>
                                    <li className="left-aside-menu-item"><CommentOutlined /><Link href="/essay-management" className="ml-4">说说管理</Link></li>
                                    <li className="left-aside-menu-item"><LinkOutlined /><Link href="/flink-management" className="ml-4">友链管理</Link></li>
                                    <li className="left-aside-menu-item"><UserOutlined /><Link href="/user-management" className="ml-4">用户管理</Link></li>
                                    <li className="left-aside-menu-item"><RedEnvelopeOutlined /><Link href="/donation-management" className="ml-4">打赏管理</Link></li>
                                    <li className="left-aside-menu-item"><SettingOutlined /><Link href="/settings-management" className="ml-4">系统设置</Link></li>
                                    <li className="left-aside-menu-item"><BookOutlined /><Link href="/" className="ml-4" target="_blank">博客首页</Link></li>
                                </ul>
                                <div className="py-0 px-1 flex items-center justify-start">
                                    <LogoutButton />
                                </div>
                            </div>

                            <div className="right-content w-[calc(100%-200px)] overflow-y-scroll">
                                {/* <div className="right-content-header h-16 bg-white shadow-md"></div> */}
                                <div className="right-content-content m-0 py-3 px-6">{children}</div>
                                {/* <div className="right-content-footer"></div> */}
                            </div>

                        </div>
                    </ConfigProvider>
                </body>
            </html>
        </>
    );
}
