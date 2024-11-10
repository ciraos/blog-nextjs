import { unified } from 'unified';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRemark from 'rehype-remark';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

// 更严格的 sanitize 配置
const sanitizeConfig = {
    allowElement: ['a', 'b', 'i', 'em', 'strong', 'p', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre', 'code', 'table', 'thead', 'tbody', 'tr', 'th', 'td'],
    allowAttribute: ['href', 'title']
};

const processer = unified()
    .use(remarkGfm, { tablePipeAlign: true, tableCellPadding: true })
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeRemark)
    .use(rehypeSanitize)
    .use(rehypeStringify);

export default async function markdown2html(markdown: string): Promise<string> {
    if (typeof markdown !== 'string' || markdown.trim() === '') {
        return '';
    }

    try {
        const file = await processer.process(markdown);
        return String(file);
    } catch (error) {
        console.error('Error processing markdown:', error);
        return '';
    }
}
