import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "葱苓小筑 | 隐私政策"
};

const markdownContent = `
## 隐私政策
本隐私政策描述了本站如何收集、使用和保护您的个人信息。

## 信息收集
我们可能收集以下类型信息：
- 您主动提供的信息
- 自动收集的技术信息
- 第三方来源的信息

## 信息使用
我们使用收集的信息来：
- 提供和改进服务
- 个性化用户体验
- 发送通知和更新

## 信息保护
我们采取适当安全措施来保护您的个人信息。

`;

export default function Privacy() {
    return (
        <>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </>
    )
}
