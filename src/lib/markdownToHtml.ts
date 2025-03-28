import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkToc from "remark-toc";

export default async function markdownToHtml(markdown: string) {
    const result = await remark()
        .use(html)
        .use(remarkGfm)
        .use(remarkParse)
        .use(remarkStringify)
        .use(remarkToc)
        .process(markdown);

    return result.toString();
}
