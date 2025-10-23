import { cookies } from "next/headers";
import Link from "next/link";
import "../globals.css";

import {
  Avatar,
  Button,
  Dropdown
} from "antd";
import type {
  MenuProps
} from "antd";
import {
  HomeOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";

import LogoutButton from "@/components/buttons/logout";
import Aside from "@/components/(blog)/aside";

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

export default async function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const isLogin = !!token;

  return (
    <html lang="zh-CN">
      <body>
        <div id="CIRAOS">

          <div className="header w-full h-16 mx-0 px-5 flex items-center justify-between bg-white rounded-none shadow-sm hover:shadow-md">
            <Link href="/">葱苓小筑</Link>
            {isLogin ?
              <Dropdown menu={{ items }}>
                <Avatar
                  className="hover:cursor-pointer"
                >User</Avatar>
              </Dropdown>
              :
              <Button className="" type="primary" href="/login">登录/注册</Button>
            }
          </div>

          <div className="blog-container w-full my-10 mx-auto flex ">
            <div className="content w-[76%]">{children}</div>
            <Aside />
          </div>

          <div className="footer w-full h-max py-1 content-center text-center leading-7.5">
            <div>created by <Link className="pt-1 px-2 border-b-2 hover:bg-blue-400" href="https://github.com/ciraos" target="_blank">葱苓sama</Link> with <span className="animate-pulse">❤</span> at {new Date().getFullYear()}</div>
            <Link className="pt-1 px-2 border-b-2 hover:bg-blue-400" href="https://beian.miit.gov.cn" target="_blank">皖ICP备2023018992号-1</Link>
          </div>

        </div>
      </body>
    </html>
  );
}
