import { Icon } from "@iconify/react";

export default function Dashboard() {
    return (
        <>
            <div className="my-5 flex items-center justify-start gap-1">
                <div className="bg-white rounded-xl border-2 hidden max-425:block"><Icon icon="material-symbols-light:menu-open-rounded" className="w-8 h-8" /></div>
                <p className="text-lg antialiased dark:text-white">Welcome back, commander.</p>
            </div>

            <div className="mb-5 flex flex-wrap justify-between gap-0 max-425:w-full">
                <div className="w-64 h-28 py-4 px-6 bg-white rounded-xl border-2 flex flex-col justify-between max-425:w-1/2"><span className="text-2xl">文章数量</span><div className="text-lg">0</div></div>
                <div className="w-64 h-28 py-4 px-6 bg-white rounded-xl border-2 flex flex-col justify-between max-425:w-1/2"><span className="text-2xl">评论数量</span><div className="text-lg">0</div></div>
                <div className="w-64 h-28 py-4 px-6 bg-white rounded-xl border-2 flex flex-col justify-between max-425:w-1/2"><span className="text-2xl">友链数量</span><div className="text-lg">0</div></div>
                <div className="w-64 h-28 py-4 px-6 bg-white rounded-xl border-2 flex flex-col justify-between max-425:w-1/2"><span className="text-2xl">说说数量</span><div className="text-lg">0</div></div>
            </div>

            <div className="flex justify-between gap-0 max-425:flex-col">
                <div>
                    <h2 className="mb-1 font-semibold">我的文章</h2>
                    <div id="articlelist" className="py-2 px-4 bg-white rounded-xl">a</div>
                </div>
                <div>
                    <h2 className="mb-1 font-semibold">我的说说</h2>
                    <div id="articlelist" className="py-2 px-4 bg-white rounded-xl">b</div>
                </div>
            </div>

            <div className="h-8 mt-5 content-center bottom-0">Designed by ©葱苓ciraos {'2025' + '-' + new Date().getFullYear()} with <span className="animate-pulse">❤</span></div>
        </>
    )
}
