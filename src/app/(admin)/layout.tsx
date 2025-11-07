/*
 * @author: 葱苓sama
 * Client Layout.tsx 
*/

"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../globals.css";

import {
    Button,
    ConfigProvider,
    Image,
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
    UploadOutlined,
    UserOutlined
} from '@ant-design/icons';
import "@ant-design/v5-patch-for-react-19";

interface LevelKeysProps {
    key?: string;
    children?: LevelKeysProps[];
}

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

const getLevelKeys = (items1: LevelKeysProps[]) => {
    const key: Record<string, number> = {};
    const func = (items2: LevelKeysProps[], level = 1) => {
        items2.forEach((item) => {
            if (item.key) {
                key[item.key] = level;
            }
            if (item.children) {
                func(item.children, level + 1);
            }
        });
    };
    func(items1);
    return key;
};

const levelKeys = getLevelKeys(items as LevelKeysProps[]);

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const router = useRouter();
    const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);
    const {
        token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken();

    const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
        const currentOpenKey = openKeys.find((key) => !stateOpenKeys.includes(key));
        // open
        if (currentOpenKey !== undefined) {
            const repeatIndex = openKeys
                .filter((key) => key !== currentOpenKey)
                .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

            setStateOpenKeys(
                openKeys
                    // remove repeat key
                    .filter((_, index) => index !== repeatIndex)
                    // remove current level all child
                    .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
            );
        } else {
            // close
            setStateOpenKeys(openKeys);
        }
    };

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
                                <div className="demo-logo-vertical hidden" />
                                <Menu
                                    defaultSelectedKeys={['1']}
                                    items={items}
                                    mode="inline"
                                    theme="dark"
                                />
                            </Sider>

                            <Layout>
                                <Header
                                    className="flex items-center justify-end-safe"
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
