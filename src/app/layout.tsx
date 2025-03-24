import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import "./twikoo.css";
import "./fclite.css";

export const metadata: Metadata = {
  title: "葱苓小筑",
  description: "a small blog station.",
  icons: "/avatar.avif"
};

const getAnalyticsTag = () => {
  return {
    __html: `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?5a3ed8a54f08b84ff2fe075c7faddbe5";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();`,
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="zh-CN">
      <body>
        <div id="CIRAOS">
          {children}
        </div>
        <Script id="baidu-Analytics" dangerouslySetInnerHTML={getAnalyticsTag()} />
      </body>
    </html>
  );
}
