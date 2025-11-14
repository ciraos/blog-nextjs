/*
 * @Author: ciraos
 * Server Component file.
*/
import { cookies } from "next/headers";
import Link from "next/link";
import "../globals.css";
import "../page-content.css";
import {
  ConfigProvider
} from "antd";
import "@ant-design/v5-patch-for-react-19";
import JiKe from "@/components/(blog)/jike";
import Header from "@/components/header";
import Aside from "@/components/(blog)/aside";

export default async function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const isLogin = !!token;

  return (
    <html lang="zh-CN">
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#39c5bb',
              borderRadius: 12,
              colorBgContainer: '#fff'
            }
          }}
        >
          <div id="CIRAOS">

            {/* banner */}
            <Header isLogin={isLogin} />

            <div className="home-banner w-full h-max mt-10 mx-auto flex">
              <JiKe />
            </div>

            {/* content */}
            <div className="blog-container w-full my-10 mx-auto flex">
              <div className="blog-container-content w-[76%]">{children}</div>
              <Aside />
            </div>

            {/* footer */}
            <div className="blog-footer w-full h-max py-0 content-center text-center leading-7.5">
              <div>created by <Link className="pt-1 px-2 border-b-2 hover:bg-blue-400" href="https://github.com/ciraos" target="_blank">葱苓sama</Link> with <span className="animate-pulse">❤</span> at {new Date().getFullYear()}</div>
              <Link className="pt-1 px-2 border-b-2 hover:bg-blue-400" href="https://beian.miit.gov.cn" target="_blank">皖ICP备2023018992号-1</Link>
            </div>

          </div>
        </ConfigProvider>
      </body>
    </html>
  );
}
