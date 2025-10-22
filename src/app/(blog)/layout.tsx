import Link from "next/link";
import "../globals.css";
import {
  Button
} from "antd";
import "@ant-design/v5-patch-for-react-19";

import Aside from "@/components/(blog)/aside";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="zh-CN">
      <body>
        <div id="CIRAOS" className="">

          <div className="header w-4/5 h-16 mx-auto px-5 flex items-center justify-between bg-white rounded-xl shadow-sm hover:shadow-md">
            <Link href="/">葱苓小筑</Link>
          </div>

          <div className="blog-container w-full mt-10 mb-5 mx-auto flex ">
            <div className="content w-[76%]">{children}</div>
            <Aside />
          </div>

          <div className="footer w-full h-10 content-center text-center leading-7.5">
            <div>created by <Link className="pt-1 px-2 border-b-2 hover:bg-blue-400" href="https://github.com/ciraos" target="_blank">葱苓sama</Link> with <span className="animate-pulse">❤</span> at {new Date().getFullYear()}</div>
            <Link className="pt-1 px-2 border-b-2 hover:bg-blue-400" href="https://beian.miit.gov.cn" target="_blank">皖ICP备2023018992号-1</Link>
          </div>

        </div>
      </body>
    </html>
  );
}
