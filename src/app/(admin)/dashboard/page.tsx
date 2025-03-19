import moment from "moment";
import { Icon } from "@iconify/react";
import { getAllPosts } from "@/lib/posts";

export default async function Dashboard() {
    const posts = await getAllPosts();
    return (
        <>
            <div className="my-5 flex items-center justify-start gap-1">
                <div className="bg-white rounded-xl border-1 hidden max-425:block"><Icon icon="material-symbols-light:menu-open-rounded" className="w-8 h-8" /></div>
                <p className="text-lg antialiased dark:text-white">Welcome back, commander.</p>
            </div>

            <div className="mb-5 flex flex-wrap justify-start gap-5 max-425:w-full">
                <div className="w-64 h-28 py-4 px-6 bg-white rounded-xl border-1 flex flex-col justify-between max-425:w-1/2">
                    <span className="text-2xl">文章数量</span>
                    <div className="text-lg">{posts.length}</div>
                </div>
                <div className="w-64 h-28 py-4 px-6 bg-white rounded-xl border-1 flex flex-col justify-between relative max-425:w-1/2">
                    <div>
                        <span className="text-2xl">评论数量</span>
                        <div className="text-lg">0</div>
                    </div>
                    <div className="py-1 px-2 text-slate-300 italic capitalize absolute bottom-0 right-0 select-none">twikoo</div>
                </div>
                <div className="w-64 h-28 py-4 px-6 bg-white rounded-xl border-1 flex flex-col justify-between max-425:w-1/2"><span className="text-2xl">友链数量</span><div className="text-lg">0</div></div>
                <div className="w-64 h-28 py-4 px-6 bg-white rounded-xl border-1 flex flex-col justify-between max-425:w-1/2"><span className="text-2xl">说说数量</span><div className="text-lg">0</div></div>
            </div>

            <div className="flex gap-5 max-425:flex-col">
                <div className="w-1/2">
                    <h2 className="mb-2 font-semibold">我的文章</h2>
                    <div id="articlelist" className="py-2 px-4 bg-white rounded-lg shadow-md hover:shadow-lg">
                        {posts?.map((item, index) => (
                            <div key={index} className="flex justify-between items-center text-sm">
                                <span>{item.meta?.title}</span>
                                <span>{moment(item.meta?.date).format('YYYY-MM-DD')}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/2">
                    <h2 className="mb-2 font-semibold">我的说说</h2>
                    <div id="articlelist" className="py-2 px-4 bg-white rounded-lg shadow-md hover:shadow-lg">b</div>
                </div>
            </div>

            <div className="h-8 absolute bottom-0">Designed by ©葱苓ciraos {'2025' + '-' + new Date().getFullYear()} with <span className="animate-pulse">❤</span></div>
        </>
    )
}
