import { env } from 'process'; // 假设使用 Node.js 环境变量
import { getAllPosts } from '@/lib/posts';
import RSS from 'rss';

export function GET() {
    const site_url = env.SITE_URL || 'https://blog.ciraos.top';
    try {
        const posts = getAllPosts();
        const feed = new RSS({
            title: '葱苓sama',
            description: 'a small blog station.',
            generator: 'Nextjs',
            feed_url: `${site_url}/feed.xml`,
            site_url: `${site_url}`,
            image_url: `${site_url}/avatar1.avif`,
            managingEditor: '葱苓Ciraos',
            webMaster: '葱苓Ciraos',
            copyright: "©葱苓sama 2024.",
            language: 'zh-CN',
            pubDate: new Date().toString()
        });
        for (const post of posts) {
            feed.item({
                title: post.meta?.title,
                description: post.meta?.descr!,
                url: `${site_url}/posts/${post.slug}`,
                categories: post.meta?.categories,
                author: post.meta?.author,
                date: post.meta?.date.toString(),
            });
        }
        return new Response(feed.xml(), {
            headers: {
                'content-type': 'application/xml'
            }
        });
    } catch (error) {
        console.error('Error generating feed:', error);
        return new Response('Internal Server Error', {
            status: 500,
            headers: {
                'content-type': 'text/plain'
            }
        });
    }
}
