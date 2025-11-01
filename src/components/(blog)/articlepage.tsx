'use client';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';
import { ArticleContentResponse } from '@/types/articles';

export default function ArticlePage(
    { params }: { params: { id: string } }) {
    const [article, setArticle] = useState<ArticleContentResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // 1. 页面加载时请求API
    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setLoading(true);
                // 拼接API地址，使用路由参数中的id
                const response = await fetch(`https://blog.ciraos.top/api/public/articles/${params.id}`);

                if (!response.ok) {
                    throw new Error(`请求失败：${response.status}`);
                }

                const data: ArticleContentResponse = await response.json();
                // console.log(data);

                // 2. 验证API返回状态，提取content_md
                if (data.code === 200 && data.data.content_md) {
                    setArticle(data);
                } else {
                    throw new Error(`API错误：${data.message}`);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : '未知错误');
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [params.id]); // 依赖路由id，id变化时重新请求

    // 3. 处理加载、错误、成功三种状态
    if (loading) return <div>加载中...</div>;
    if (error) return <div>出错了：{error}</div>;
    if (!article) return <div>文章不存在</div>;

    // 4. 渲染文章（content_md通过ReactMarkdown转为HTML）
    return (
        <>
            {/* <MDXRemote source={article.data.content_md} components={{}} options={{}} /> */}
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
            >
                {article.data.content_md}
            </ReactMarkdown>
        </>
    );
}
