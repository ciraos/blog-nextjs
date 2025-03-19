import Link from "next/link";
import type { Metadata } from "next";
import Twikoo from "@/components/thirdParty/twikoo";
import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import { Image } from "antd";
import { friendlink } from "@/config/link";
import "@ant-design/v5-patch-for-react-19";

export const metadata: Metadata = {
    title: "友人帐 - 葱苓sama",
};

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: '约法三章',
        children: <><ol><li>因为我的网站经常炸掉，所以我建议你的链接<strong>不要挂掉</strong>哦；</li><li>网站必须有<strong>强制https协议头</strong>；</li><li>已经添加<strong>葱苓samaの博客</strong>；</li><li>博客内容与生活、科技等等有关，请勿上传违反<strong>大陆法律、法规</strong>的内容；</li><li>网站主体为<strong>个人</strong>，网站类型为<strong>博客</strong>；</li><li>网站现在可以在<strong>中国大陆区域</strong>正常访问；</li><li>网站内容符合中国大陆<strong>法律法规</strong>；</li></ol></>,
    }
];

// const friendLater = [] {
//     friendlink.map((e) => {
//         e.child.map((e) => {
//             const data = []
//             data.push(e.name, e.link, e.avatar)
//             friendLater.push(data)
//             console.log(data)
//         })
//     })
// }

export default async function Friends() {
    return (
        <>
            <div className="w-3/4 max-425:w-full">
                <div className="text-5xl text-gray-500 font-semibold py-5 px-5">友人帐</div>
                {/* 友人帐map */}
                {friendlink.map((group, index) => (
                    <div key={index} className="">
                        <div className="my-2 dark:text-white">
                            <h2 className="text-md">{group.groupName}{"(" + group.child.length + ")"}</h2>
                            <div className="text-sm text-slate-600 dark:text-slate-200">{group.groupDescr}</div>
                        </div>
                        <div className="flink flex flex-wrap justify-between gap-2 transition-all max-425:w-full">
                            {group.child.map((child, index) => (
                                <Link key={index} href={child.link} target="_blank" rel="noopener noreferrer" className="w-44 h-20 overflow-hidden bg-white rounded-xl py-1 px-2 flex items-center justify-evenly transition-all relative dark:bg-[#2c303f] max-425:w-full">
                                    <div style={{ display: child.tag ? 'block' : 'none' }} className="absolute w-fit h-4 top-0 left-0 pl-3 pr-2 rounded-br-lg z-1 text-white text-xs font-bold bg-orange-400">{child.tag}</div>
                                    <Image src={child.avatar} alt="friend_avtar" preview={false} width={40} height={40} className="rounded-[50%]" fallback="https://cdn.smartcis.cn/gh/ciraos/ciraos-static@main/img/404_1.avif" />
                                    <div className="w-[calc(100%-40px)] h-16 ml-2 flex flex-col justify-center overflow-hidden">
                                        <div className="text-base truncate text-slate-800 overflow-hidden dark:text-slate-300">{child.name}</div>
                                        <div className="text-sm truncate text-slate-600 dark:text-slate-200">{child.descr}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
                <hr className="my-5 mx-auto" />
                <Collapse accordion items={items} activeKey={1} />
                <Twikoo />
            </div>
        </>
    )
}
