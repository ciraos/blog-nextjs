import { Image } from "antd";
// import Link from "next/link";

// import moment from "moment";
import { Button } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { getAllPosts } from "@/lib/posts";

import Busuanzi from "./_partial/aside/busuanzi";
import AsideCategories from "./_partial/aside/categories";
import AsideRuntime from "./_partial/aside/runtime";
import AsideTotalWords from "./_partial/aside/totalword";
import AsideLastUpdated from "./_partial/aside/lastupdated";

export default async function Aside() {
    const posts = await getAllPosts();
    return (
        <>
            <div id="aside" className="aside w-1/4 pl-4 max-425:w-full max-425:mt-5 max-425:pl-0">

                {/* 基本信息 */}
                <div className="h-max rounded-xl py-2 px-0 border-[1px] border-solid border-slate-400 text-center shadow-md hover:shadow-xl">
                    <div className="w-24 h-max py-1 px-2 mt-5 mx-auto text-sm font-bold font-serif rounded-xl dark:text-white">Welcome!!</div>
                    <div className="mt-5">
                        <Image src="/avatar.avif" alt="avatar" preview={false} width={96} height={96} className="mt-2 mx-auto rounded-[100%]" loading="lazy" />
                        <div className="mt-2 text-xl dark:text-white">葱苓sama</div>
                        <p className="-mt-2 text-sm dark:text-white">a small blog station.</p>
                    </div>
                    <Button type="link" href="https://ciraos.top" target="_blank" rel="noopener noreferrer" className="my-2">前往我的主页</Button>
                </div>

                {/* 公告 */}
                <div className="px-2 py-2 bg-white rounded-xl shadow-md hover:shadow-xl dark:bg-[#2c303f]">
                    <div className="flex items-center"><span className="dark:text-white">公告</span></div>
                    <p className="indent-4 text-sm text-slate-600 dark:text-white">欢迎来到我的博客🦆</p>
                </div>

                {/* 文章目录 */}
                {/* <div className="px-2 py-2 bg-white rounded-xl shadow-md hover:shadow-xl dark:bg-[#2c303f]">
                    <div className="flex items-center"><Icon icon="material-symbols:toc" width="1.4em" height="1.4em" className="mr-1 text-blue-400" /><span className="dark:text-white">目录</span></div>
                    <Toc />
                </div> */}

                {/* 最近更新的文章 */}
                <div className="px-2 py-2 bg-white rounded-xl shadow-md hover:shadow-xl dark:bg-[#2c303f]">
                    <div className="flex items-center"><span className="dark:text-white">最近更新</span></div>
                </div>

                {/*  */}
                <div className="px-2 py-2 bg-white rounded-xl shadow-md hover:shadow-xl dark:bg-[#2c303f]">
                    <div className="flex items-center"><span className="dark:text-white">最新评论</span></div>
                </div>

                {/* 统计  */}
                <div className="px-2 py-2 bg-white rounded-xl shadow-md hover:shadow-xl dark:bg-[#2c303f]">
                    <div className="flex items-center"><span className="dark:text-white">统计</span></div>
                    <AsideCategories />
                    <hr />
                    <div className="py-1 px-2">
                        <div className="flex justify-between mt-1 text-slate-600 text-sm dark:text-slate-200"><span className="flex items-center">文章总数</span><span className="">{posts.length}</span></div>
                        <div className="flex justify-between mt-1 text-slate-600 text-sm dark:text-slate-200"><span className="flex items-center">建站天数</span><span><AsideRuntime /></span></div>
                        <AsideTotalWords />
                        <Busuanzi />
                        <div>
                            <div className="flex justify-between mt-1 text-slate-600 text-sm dark:text-slate-200">
                                <span>本站访客数</span>
                                <span id="busuanzi_value_site_uv"></span>
                            </div>
                            <div className="flex justify-between mt-1 text-slate-600 text-sm dark:text-slate-200">
                                <span>本站总访问量</span>
                                <span id="busuanzi_value_site_pv"></span>
                            </div>
                        </div>
                        <AsideLastUpdated />
                    </div>
                </div>

            </div>

        </>
    )
}
