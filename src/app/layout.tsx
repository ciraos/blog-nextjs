
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import "./twikoo.css";
import "./fclite.css";

export const metadata: Metadata = {
  title: "葱苓语畔",
  description: "a small blog station.",
  icons: "/avatar.avif"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="zh-CN">
      <body className="">
        <div id="CIRAOS" className="">
          <NextTopLoader color="#39c5bb" easing="ease" showSpinner={false} />
          {children}
        </div>
      </body>
    </html>
  );
}
