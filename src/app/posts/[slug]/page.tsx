import { MDXRemote } from "next-mdx-remote/rsc";
import { Icon } from "@iconify/react";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import moment from "moment";
import Image from "next/image";
import ciraos from "@/app/images/avatar1.avif"
import Aside from "@/components/aside";
import Link from "next/link";
import Twikoo from "@/components/thirdParty/twikoo";
import Button from "./mdx/button";
import Note_default from "./mdx/note_default";
import Note_success from "./mdx/note_success";
import Note_warn from "./mdx/note_warn";

import TianliGPT from "@/components/thirdParty/tianliGPT";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getPost(params: Props["params"]) {
  const post = getPostBySlug(params.slug);
  return { post };
}

export const dynamicParams = false;
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Post({ params }: Props) {
  const { post } = await getPost(params);
  return (
    <>
      <div className="w-full max-w-6xl my-10 mx-auto max-768:px-4 max-768:py-4">

        <div className="w-full h-44 rounded-xl px-2 py-2 flex flex-col items-start justify-center dark:text-white">
          <div className="">
            <span className="h-10 flex items-center px-1 float-left"><Icon icon="mdi:tag-outline" className="mr-1" />{post.meta?.tags}</span>
            <span className="h-10 flex items-center px-1 float-left"><Icon icon="material-symbols:category-outline" className="mr-1" />{post.meta?.categories}</span>
          </div>
          <div className="text-4xl font-bold my-1">{post.meta?.title}</div>
          <div className="">
              <time className="h-10 w-max flex items-center px-1 float-left"><Icon icon="clarity:date-line" className="mr-1" />{moment(post.meta?.date).format('YYYY-MM-DD')}</time>
              <time className="h-10 w-max flex items-center px-1 float-left"><Icon icon="lets-icons:date-fill" className="mr-1" />{moment(post.meta?.updated).format('YYYY-MM-DD')}</time>
              {/* <span className="h-10 flex items-center w-max px-2 after:content-['条评论'] float-left"><Icon icon="mingcute:comment-fill" className="mr-1" />114514</span> */}
          </div>
        </div>


        <div className="flex mt-5 max-768:w-full max-768:flex-col">
          <div className="w-3/4 max-768:w-full">
            <div className="post-container bg-white rounded-t-xl px-8 py-4 shadow-sm hover:shadow-md dark:bg-dacard dark:text-white">
              {/* <TianliGPT /> */}
              <MDXRemote source={post.content} components={{Button, Note_default, Note_success, Note_warn}} options={{}} />
            </div>
            {/* <hr className="0" /> */}
            <div className="bg-white my-0 mx-auto py-5 px-0 dark:bg-dacard">
              <div className="w-[70%] bg-slate-200 my-0 mx-auto py-2 px-2 rounded-md">
                <Image src={ciraos} alt="avatar1" title="avatar1" className="w-16 h-16 my-0 mx-auto rounded-[50%]"></Image>
                <div className="w-full mt-2 mx-auto flex items-center justify-center"><Icon icon="ic:outline-article" className="mr-1 text-xl dark:text-white" /><div className="w-12 h-max mx-1 bg-orange-400 text-center content-center rounded-md">原创</div><div className="text-lg dark:text-white">{post.meta?.title}</div></div>
                <div className="text-center text-xs text-gray-400">本博客所有文章除特别声明外，均采用<Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline mx-1 text-slate-500">CC BY-NC-SA 4.0</Link>许可协议，转载请注明来自葱苓sama！</div>
              </div>
            </div>
            <Twikoo />
          </div>

          <Aside />
        </div>

      </div>
    </>
  );
}
