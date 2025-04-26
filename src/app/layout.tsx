import type { Metadata } from "next";
import "./globals.css";
import "./twikoo.css";
import "./fclite.css";

export const metadata: Metadata = {
  title: "葱苓小筑",
  description: "a small blog station.",
  icons: "/avatar.avif"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="zh-CN">
      <body>
        <div id="CIRAOS">{children}</div>
      </body>
    </html>
  );
}
