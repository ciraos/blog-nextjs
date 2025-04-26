import remarkGfm from "remark-gfm";
import html from "remark-html";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkToc from "remark-toc";
import { unified } from "unified";

export default async function markdownToHtml(markdown: string) {
    const res = await unified()
        .use(remarkParse)  // 首先解析 Markdown
        .use(remarkGfm)    // 支持 GitHub Flavored Markdown
        .use(remarkToc)    // 生成目录
        .use(html)         // 转换为 HTML
        .use(remarkStringify)  // 最后序列化
        .process(markdown);
    return res.toString();
}
