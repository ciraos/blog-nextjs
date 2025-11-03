'use client';
import { useState, useEffect, useCallback } from 'react';

import {
    Alert,
    Spin
} from "antd";
import { CloseSquareOutlined } from '@ant-design/icons';
import "@ant-design/v5-patch-for-react-19";

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

    if (loading) return (<Spin size='large' />);
    if (error) return (<Alert message="哦不！文章加载出错啦！请查看控制台！！！" type='warning' closable />);
    if (!article) return <div>文章不存在</div>;

    const markdown = article.data.content_md;

    return (
        <>
            <ReactMarkdown
                children={markdown}
                rehypePlugins={[rehypeRaw, rehypeKatex]}
                remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
            />
        </>
    );
}
