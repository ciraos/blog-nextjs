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

const imageFallbackPath = "data:image/png;base64,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";

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
                                <div className="py-1 flex items-center justify-center gap-1">
                                    <Image
                                        alt="site-logo"
                                        width={55}
                                        height={55}
                                        src="error"
                                        fallback={imageFallbackPath}
                                        preview={false}
                                    />
                                    <div>葱苓小筑Admin</div>
                                </div>
                                <ul className="left-aside-menu">
                                    <li className="left-aside-menu-item"><HomeOutlined />           <Link href="/dashboard" className="ml-4">仪表盘</Link></li>
                                    <li className="left-aside-menu-item"><ShoppingCartOutlined />   <Link href="/order-management" className="ml-4">订单管理</Link></li>
                                    <li className="left-aside-menu-item"><BookOutlined />           <Link href="/post-management" className="ml-4">文章管理</Link></li>
                                    <li className="left-aside-menu-item"><ProfileOutlined />        <Link href="/file-management" className="ml-4">文件管理</Link></li>
                                    <li className="left-aside-menu-item"><ShopOutlined />           <Link href="/theme-mall" className="ml-4">主题商城</Link></li>
                                    <li className="left-aside-menu-item"><PictureOutlined />        <Link href="/album-management" className="ml-4">相册管理</Link></li>
                                    <li className="left-aside-menu-item"><AppstoreOutlined />       <Link href="/storage-policy" className="ml-4">存储策略</Link></li>
                                    <li className="left-aside-menu-item"><CommentOutlined />        <Link href="/comment-management" className="ml-4">评论管理</Link></li>
                                    <li className="left-aside-menu-item"><CommentOutlined />        <Link href="/essay-management" className="ml-4">说说管理</Link></li>
                                    <li className="left-aside-menu-item"><LinkOutlined />           <Link href="/flink-management" className="ml-4">友链管理</Link></li>
                                    <li className="left-aside-menu-item"><UserOutlined />           <Link href="/user-management" className="ml-4">用户管理</Link></li>
                                    <li className="left-aside-menu-item"><RedEnvelopeOutlined />    <Link href="/donation-management" className="ml-4">打赏管理</Link></li>
                                    <li className="left-aside-menu-item"><SettingOutlined />        <Link href="/settings-management" className="ml-4">系统设置</Link></li>
                                    <li className="left-aside-menu-item"><BookOutlined />           <Link href="/" className="ml-4" target="_blank">博客首页</Link></li>
                                </ul>
                                <div>
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
