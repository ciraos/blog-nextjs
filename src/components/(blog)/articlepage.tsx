'use client';
import { useState, useEffect, useCallback } from 'react';

import {
    Alert,
    Spin
} from "antd";
// import { CloseSquareOutlined } from '@ant-design/icons';
import "@ant-design/v5-patch-for-react-19";

import ReactMarkdown from 'react-markdown';
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomDark, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeSanitize from 'rehype-sanitize';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import "katex/dist/katex.min.css"

import { ArticleContentResponse } from '@/types/articles';

// const baseUrl = process.env.apiKey;

export default function ArticlePage({ params }: { params: { id: string } }) {
    const [article, setArticle] = useState<ArticleContentResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchArticle = useCallback(async (signal: AbortSignal) => {
        if (!params.id) {
            setError('文章 ID 无效');
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            // const response = await fetch(`${baseUrl}/public/articles/${params.id}`, { signal });
            const response = await fetch(`https://blog.ciraos.top/api/public/articles/${params.id}`, { signal });

            if (!response.ok) { throw new Error(`请求失败`); }

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
                } else { throw new Error(data.message || '文章内容为空'); }
            } else { throw new Error('接口返回数据格式异常'); }
        } catch (err) {
            if (signal.aborted) return; // 忽略取消的请求
            const message = err instanceof Error ? err.message : '未知错误';
            setError(message.includes('请求失败') ? '无法加载文章，请稍后再试' : message);
        } finally {
            if (!signal.aborted) { setLoading(false); }
        }
    }, [params.id]);

    useEffect(() => {
        const controller = new AbortController();
        fetchArticle(controller.signal);
        return () => { controller.abort(); };
    }, [fetchArticle]);

    if (loading) return (<Spin size='large' />);
    if (error) return (<Alert style={{ margin: '20px 0' }} message="文章加载失败，请稍后再试" type='warning' closable />);
    if (!article) return <div>文章不存在</div>;

    return (
        <>
            <div className="my-5 px-5">
                <ReactMarkdown
                    components={{}}
                    rehypePlugins={[rehypeKatex, rehypeSanitize]}
                    remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
                >
                    {article.data.content_md}
                </ReactMarkdown>
            </div>
        </>
    );
}
