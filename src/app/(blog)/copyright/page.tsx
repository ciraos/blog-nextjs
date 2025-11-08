import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "葱苓小筑 | 版权协议",
}

const markdownContent = `
## 版权声明 
本版权声明适用于本站的所有内容。

## 版权保护
本站的所有内容，包括但不限于文字、图片、音频、视频等，均受版权法保护。

## 使用许可
未经许可，禁止复制、分发、展示或创建衍生作品。

## 例外情况
- 合理使用（如评论、教育、研究等）
- 获得明确书面许可
- 内容已进入公共领域

## 联系我们
如果您需要获得使用许可或有其他版权相关问题，请联系我们。
`;

export default function CopyRight() {
    return (
        <>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </>
    )
}
