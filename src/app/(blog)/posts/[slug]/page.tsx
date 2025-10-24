import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/utils/posts";

export const metadata: Metadata = {
    title: "不知道怎么动态取名的小笨蛋",
};

type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function getPost(params: { slug: string }) {
    const post = getPostBySlug(params.slug);
    return { post };
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function Post(props: Props) {
    const params = await props.params;
    const { post } = await getPost(params);

    return (
        <>
            <div className="post-container">
                <h1 className="text-2xl">{post.meta.title}</h1>
                <time className="text-gray-600">{post.meta?.created.toString()}</time>
                <MDXRemote source={post.content} components={{}} options={{}} />
            </div>
        </>
    );
}
