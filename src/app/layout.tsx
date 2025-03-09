import type { Metadata } from "next";
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
        <div id="CIRAOS" className="">{children}</div>
      </body>
    </html>
  );
}
