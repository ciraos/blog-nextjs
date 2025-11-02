'use client';
import { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    oneDark
} from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import "katex/dist/katex.min.css"
import { ArticleContentResponse } from '@/types/articles';

export default function ArticlePage({ params }: { params: { id: string } }) {
    const [article, setArticle] = useState<ArticleContentResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchArticle = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://blog.ciraos.top/api/public/articles/${params.id}`);

            if (!response.ok) {
                throw new Error(`请求失败`);
            }

            const data: ArticleContentResponse = await response.json();

            if (
                typeof data === 'object' &&
                data !== null &&
                'code' in data &&
                'data' in data &&
                typeof data.data === 'object' &&
                data.data !== null &&
                'content_md' in data.data
            ) {
                if (data.code === 200 && data.data.content_md) {
                    setArticle(data);
                } else {
                    throw new Error(data.message || '文章内容为空');
                }
            } else {
                throw new Error('接口返回数据格式异常');
            }
        } catch (err) {
            const message = err instanceof Error ? err.message : '未知错误';
            setError(message.includes('请求失败') ? '无法加载文章，请稍后再试' : message);
        } finally {
            setLoading(false);
        }
    }, [params.id]);

    useEffect(() => {
        if (!params.id) return;
        fetchArticle();
    }, [fetchArticle, params.id]);

    if (loading) return <div>加载中...</div>;
    if (error) return <div>出错了：{error}</div>;
    if (!article) return <div>文章不存在</div>;

    const markdown = article.data.content_md;

    return (
        <>
            <ReactMarkdown
                children={markdown}
                rehypePlugins={[rehypeRaw, rehypeKatex]}
                remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
                components={{
                    code(props) {
                        const { children, className, node, ...rest } = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                            <SyntaxHighlighter
                                {...rest}
                                children={String(children).replace(/\n$/, '')}
                                language={match[1] || "PlainText"}
                                PreTag="div"
                                style={oneDark}
                            />
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        )
                    }
                }}
            />
        </>
    );
}
