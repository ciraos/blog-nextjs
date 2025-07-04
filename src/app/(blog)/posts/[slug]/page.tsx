// import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Icon } from "@iconify/react";
import moment from "moment";

import Twikoo from "@/components/thirdParty/twikoo";
import { getPostBySlug, getAllPosts } from "@/lib/posts";

import Del from "@/components/tagPlugins/del";
import Note_default from "@/components/tagPlugins/note_default";
import Note_success from "@/components/tagPlugins/note_success";
import Note_warn from "@/components/tagPlugins/note_warn";
import Psw from "@/components/tagPlugins/psw";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function getPost(params: Props["params"]) {
  const post = getPostBySlug((await params).slug);
  return { post };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Post({ params }: Props) {
  const { post } = await getPost(params);
  // const posts = await getSortedPosts();
  // const currentPost = posts.find(async post => post.slug === (await params).slug);
  const { prev, next } = await getAdjcentPosts((await params).slug);
  return (
    <>
      <div className="w-3/4 flex flex-col max-425:w-full">

        {/* 文章内容说明 */}
        <div className="post-header w-full max-w-6xl h-60 mx-auto px-2 py-2 flex flex-col items-start justify-center dark:text-white">
          <div className="">
            <Link href={`tags/${post.meta?.tags}`} className="h-10 flex items-center px-1 float-left"><Icon icon="mdi:tag-outline" className="mr-1" />{post.meta?.tags}</Link>
            <Link href={`categories/${post.meta?.categories}`} className="h-10 flex items-center px-1 float-left"><Icon icon="material-symbols:category-outline" className="mr-1" />{post.meta?.categories}</Link>
          </div>
          <div className="text-4xl font-bold my-1">{post.meta?.title}</div>
          <div className="">
            <div className="h-10 w-max flex items-center px-1 float-left"><Icon icon="clarity:date-line" className="mr-1" />{moment(post.meta?.date).format('YYYY-MM-DD')}</div>
            <div className="h-10 w-max flex items-center px-1 float-left"><Icon icon="lets-icons:date-fill" className="mr-1" />{moment(post.meta?.updated).format('YYYY-MM-DD')}</div>
            <span className="h-10 w-max flex items-center px-2 float-left"><Icon icon="mingcute:comment-fill" className="mr-1" />114514<span>条评论</span></span>
            <span className="h-10 w-max flex items-center px-1 float-left"><Icon icon="mdi:account" className="w-5 h-5 mr-1" />{post.meta?.author}</span>
            <span className="h-10 w-max flex items-center px-1 float-left"><Icon icon="ri:file-word-line" className="mr-1" />{'字数总计: ' + post.content.length + '字'}</span>
          </div>
        </div>

        {/* 文章 */}
        <div className="post-container rounded-xl px-8 py-4 bg-white shadow-sm transition-all hover:shadow-md dark:bg-[#2c303f] dark:text-white max-425:px-2">
          <MDXRemote source={post.content} components={{ Note_default, Note_success, Note_warn, Del, Psw }} options={{}} />
        </div>

        {/*  */}
        <div className="post-copyright w-full mt-5 mx-auto py-2 px-4 border-[1px] border-solid border-slate-400 rounded-md dark:text-white">
          <div className="text-xs">&nbsp;&nbsp;-&nbsp;&nbsp;本博客所有文章除特别声明外，均采用<Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline">CC BY-NC-SA 4.0</Link>许可协议，转载请注明来自葱苓sama！</div>
          <div className="text-sm mt-1">作者：<span>{post.meta?.author}</span></div>
          <div className="text-sm">标题：<span>{post.meta?.title}</span></div>
          <div className="text-sm">链接：<Link href={`https://blog.ciraos.top/posts/${post.slug}`} className="underline">https://blog.ciraos.top/posts/{post.slug}</Link></div>
        </div>

        {/*  */}
        <div className="h-16 mt-5 flex justify-between gap-2">
          {prev && (
            <Link href={`/posts/${prev.slug}`} className="w-1/2 bg-white rounded-l-xl flex justify-center items-center">
              <Icon icon="material-symbols-light:arrow-back-ios" className="w-10 h-10" />
              <span className="text-md">{prev.meta?.title}</span>
            </Link>
          )}

          {next && (
            <Link href={`/posts/${next.slug}`} className="w-1/2 bg-white rounded-r-xl flex justify-center items-center">
              <span className="text-md">{next.meta?.title}</span>
              <Icon icon="material-symbols-light:arrow-forward-ios-rounded" className="w-10 h-10" />
            </Link>
          )}
        </div>

        {/* Twikoo */}
        <Twikoo />

      </div >
    </>
  );
}

async function getSortedPosts() {
  const posts = await getAllPosts();

  return posts.sort((a, b) => {
    return new Date(b.meta?.date).getTime() - new Date(a.meta?.date).getTime();
  });
};

async function getAdjcentPosts(currentSlug: string) {
  const posts = await getSortedPosts();
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? posts[currentIndex - 1] : null,
    next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  }
}
