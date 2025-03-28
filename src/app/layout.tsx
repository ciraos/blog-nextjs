import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import "./twikoo.css";
import "./fclite.css";

import Navbar from "@/components/navbar";
import Aside from "@/components/aside";
import Footer from "@/components/footer";
import Rightside from "@/components/rightside";
import PostChat from "@/components/thirdParty/postchat";

export const metadata: Metadata = {
  title: "葱苓小筑",
  description: "a small blog station.",
  icons: "/avatar.avif"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="zh-CN">
      <body>
        <div id="CIRAOS">
          <NextTopLoader color="#39c5bb" easing="ease" shadow="0 0 10px #2299DD,0 0 5px #2299DD" showSpinner={false} />
          <Navbar />
          <div className="main w-full max-w-5xl my-10 mx-auto flex max-425:flex-col max-425:px-2">
            {children}
            <Aside />
          </div>
        </div>
        <Footer />
        <Rightside />
        <PostChat />
      </body>
    </html>
  );
}
