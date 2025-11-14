/*
 * @author: 葱苓sama
 * Client Layout.tsx 
*/

"use client";
// import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../globals.css";
import {
    Button,
    ConfigProvider,
    // Image,
    Layout,
    Menu,
    theme
} from "antd";
import type {
    MenuProps
} from 'antd';
import {
    // AppstoreOutlined,
    BookOutlined,
    HomeOutlined,
    // MailOutlined,
    SettingOutlined,
    // UploadOutlined,
    // UserOutlined
} from '@ant-design/icons';
import "@ant-design/v5-patch-for-react-19";

type MenuItem = Required<MenuProps>['items'][number];

const { Sider, Header, Content, Footer } = Layout;

const items: MenuItem[] = [
    {
        key: '1',
        icon: <HomeOutlined />,
        label: (<Link href="/dashboard">仪表盘</Link>)
    },
    {
        key: '2',
        icon: <SettingOutlined />,
        label: (<Link href="/settings">设&nbsp;&nbsp;&nbsp;置</Link>)
    },
    {
        key: '99',
        icon: <BookOutlined />,
        label: (<Link href="/">博客首页</Link>)
    }
];

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const router = useRouter();
    const {
        token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken();

    const handlerLogout = async () => {
        const b = await fetch("/api/logout", {
            "method": "DELETE",
        });
        const data = await b.json();
        if (data.success) {
            router.push("/login");
        }
    };

    return (
        <>
            <html lang="zh-CN">
                <body>
                    <ConfigProvider theme={{ components: { Layout: {} } }}>
                        <Layout
                            hasSider
                            style={{ width: "100%", height: "100vh" }}
                        >

                            <Sider
                                breakpoint="xs"
                                collapsedWidth="0"
                            // onBreakpoint={(broken) => { console.log(broken); }}
                            // onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                            >
                                <div className="demo-logo-vertical" />
                                <Menu
                                    defaultSelectedKeys={['1']}
                                    items={items}
                                    mode="inline"
                                    theme="dark"
                                />
                            </Sider>

                            <Layout>
                                <Header
                                    className="flex items-center justify-end"
                                    style={{ padding: '0 10px', background: colorBgContainer }}
                                >
                                    <Button type="primary" onClick={handlerLogout}>登出</Button>
                                </Header>

                                <Content style={{ margin: '24px 16px 0' }}>
                                    <div
                                        style={{
                                            padding: 24,
                                            minHeight: 360,
                                            background: colorBgContainer,
                                            borderRadius: borderRadiusLG,
                                        }}
                                    >
                                        {children}
                                    </div>
                                </Content>

                                <Footer style={{ textAlign: 'center' }}>
                                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                                </Footer>

                            </Layout>
                        </Layout>
                    </ConfigProvider>
                </body>
            </html>
        </>
    );
}
