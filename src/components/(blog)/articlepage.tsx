'use client';
import {
    useCallback,
    useEffect,
    useState,
} from 'react';

import {
    Alert,
    Spin
} from "antd";
import "@ant-design/v5-patch-for-react-19";

import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeSanitize from 'rehype-sanitize';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import "katex/dist/katex.min.css"

import { ArticleContentResponse } from '@/types/articles';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
if (!baseUrl) {
    throw new Error("环境变量 NEXT_PUBLIC_API_URL 未配置");
}

const CodeBlock = ({ node, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
        <SyntaxHighlighter
            {...props}
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            PreTag="div"
            showInlineLineNumbers
            showLineNumbers
            style={oneDark}
            wrapLines={false}
            wrapLongLines={false}
        />
    ) : (
        <code {...props} className={className}>
            {children}
        </code>
    );
};

export default function ArticlePage({ params }: { params: { id: string } }) {
    const [article, setArticle] = useState<ArticleContentResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchArticle = useCallback(async (signal: AbortSignal) => {
        if (!params.id || !/^[a-zA-Z0-9\-_]+$/.test(params.id)) {
            setError('文章 ID 无效');
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(`${baseUrl}/public/articles/${params.id}`, { signal });

            if (!response.ok) {
                throw new Error(`请求失败`);
            }

            const data: ArticleContentResponse = await response.json();

            if (typeof data === 'object' && data !== null && 'code' in data && 'data' in data && typeof data.data === 'object' && data.data !== null && 'content_md' in data.data) {
                if (data.code === 200 && data.data.content_md) {
                    setArticle(data);
                } else {
                    throw new Error(data.message || '文章内容为空');
                }
            } else {
                throw new Error('接口返回数据格式异常');
            }
        } catch (err) {
            if (signal.aborted) return;
            const message = err instanceof Error ? err.message : '未知错误';
            setError(message.includes('请求失败') ? '无法加载文章，请稍后再试' : message);
        } finally {
            if (!signal.aborted) {
                setLoading(false);
            }
        }
    }, [params.id]);

    useEffect(() => {
        const controller = new AbortController();
        fetchArticle(controller.signal);
        return () => {
            controller.abort();
        };
    }, [fetchArticle]); // 明确依赖项

    if (loading) return <Spin size='large' />;
    if (error) return <Alert style={{ margin: '20px 0' }} message="文章加载失败，请稍后再试" type='warning' closable />;
    if (!article) return <div>文章不存在</div>;

    return (
        <>
            <div className="post-content my-5 px-2">
                <Markdown
                    components={{
                        code: CodeBlock
                    }}
                    rehypePlugins={[rehypeKatex, rehypeSanitize]}
                    remarkPlugins={[[remarkGfm, { singleTilde: true }]]}
                >
                    {article.data.content_md}
                </Markdown>
            </div>
        </>
    );
}
