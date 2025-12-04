/*
 * @Author: ciraos
 * Server Component file.
*/
import { cookies } from "next/headers";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import "../page-content.css";
import {
  ConfigProvider,
} from "antd";

// import JiKe from "@/components/(blog)/jike";
import Header from "@/components/header";
import Aside from "@/components/(blog)/aside";
import { SiteConfigResponse } from "@/types/site-config";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getSiteConfig() {
  const k = await fetch(`${baseUrl}/public/site-config`);
  const res = await k.json() as SiteConfigResponse;
  return res.data;
}

export default async function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const isLogin = !!token;
  const config = await getSiteConfig();

  return (
    <html lang="zh-CN">
      <body>
        <ConfigProvider
          theme={{
            token: {
              borderRadius: 12,
              colorBgContainer: '#fff',
              colorPrimary: '#000',
            }
          }}
        >
          <div id="CIRAOS">

            <NextTopLoader
              easing="ease"
              shadow="box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"
              showSpinner={false}
            />

            {/* header */}
            <Header isLogin={isLogin} />

            {/* home-banner */}

            {/* content */}
            <div className="blog-container w-full my-10 mx-auto flex">
              <div className="blog-container-content w-[76%]">{children}</div>
              <Aside />
              {/* <FloatButton.BackTop duration={450} visibilityHeight={1} /> */}
            </div>

            {/* footer */}
            <div className="blog-footer w-full h-max py-0 content-center text-center leading-7.5">
              <div>created by
                <Link className="px-2 border-b-2 hover:bg-blue-400" href="https://github.com/anzhiyu-c/anheyu-app" target="_blank">anheyu-app</Link>with
                <Link className="px-2 border-b-2 hover:bg-blue-400" href="https://github.com/ciraos/blog-nextjs" target="_blank">anheyu-theme-ciraos</Link>together and&nbsp;
                <span className="animate-pulse text-red-500">❤</span>.
              </div>
              {/* <div>created by <Link className="pt-1 px-2 border-b-2 hover:bg-blue-400" href="https://github.com/ciraos" target="_blank">葱苓sama</Link> with <span className="animate-pulse">❤</span> at {new Date().getFullYear()}</div> */}
              <Link className="pt-1 px-2 border-b-2 hover:bg-blue-400" href="https://beian.miit.gov.cn" target="_blank">{config.ICP_NUMBER}</Link>
            </div>

          </div>
        </ConfigProvider>
      </body>
    </html>
  );
}
