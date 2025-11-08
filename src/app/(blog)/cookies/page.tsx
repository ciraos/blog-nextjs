import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "葱苓小筑 | Cookies",
}

const markdownContent = `
## Cookie 政策
本Cookie政策说明了本站如何使用Cookie和类似技术。

## 什么是Cookie
Cookie是存储在您设备上的小型文本文件，用于记住您的偏好设置和登录状态。

## 我们使用的Cookie类型

- **必要Cookie**：网站正常运行所必需
- **功能Cookie**：记住您的偏好设置
- **分析Cookie**：帮助我们了解网站使用情况

## 管理Cookie
您可以通过浏览器设置来管理Cookie，但禁用某些Cookie可能会影响网站功能。
`;

export default function Cookies() {
    return (
        <>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </>
    )
}
