import Image from "next/image";
import Link from "next/link";
import Aside from "@/components/aside";
import Twikoo from "@/components/thirdParty/twikoo";
import type { Metadata } from "next";
import { friendlink } from "@/config/link";

export const metadata:Metadata = {
    title: "友人帐 - 葱苓sama",
    
};

export default function Friends(){
    return (
        <>
            <div className="w-full max-w-6xl py-[40px] px-[15px] mx-auto flex max-768:flex-col">
                <div className="w-3/4 max-768:w-full">
                    <div className="main-container py-0 px-0">
                        <div className="text-5xl text-gray-500 font-semibold py-5 px-5">友人帐</div>
                        {friendlink.map((group, index) => ( 
                            <div key={index} className="">
                                <div className="dark:text-white">
                                    <h2 className="">{group.groupName}</h2>
                                    <div className="mt-2 mb-4 mx-0 text-sm text-slate-600 dark:text-slate-200">{group.groupDescr}</div>
                                </div>
                                <div className="flink flex flex-wrap justify-around gap-0 transition-alll">
                                    {group.child.map((child, index) => (
                                        <Link key={index} href={child.link} target="_blank" rel="noopener noreferrer" className="cf-friends-link w-44 h-20 bg-white rounded-xl py-1 px-1 flex items-center justify-evenly transition-all max-425:w-full max-425:h-24 dark:bg-dacard">
                                            <img src={child.avatar} alt="friend_avatar" className="cf-friends-avatar w-10 h-10 mx-2 rounded-[50%]"></img>
                                            <div className="w-[calc(100%-40px)] h-16 flex flex-col justify-center overflow-hidden">
                                                <div className="cf-friends-name text-base truncate text-orange-400 overflow-hidden">{child.name}</div>
                                                <div className="text-sm truncate">{child.descr}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <hr className="my-5 mx-0" />
                        <pre>
                            <code className="language-yaml">
                                <span>#我的信息</span><br />
                                <span>name:</span><span> 葱苓sama</span><br />
                                <span>link:</span><span> https://blog.ciraos.top</span><br />
                                <span>avatar:</span><span>https://blog.ciraos.top/avatar1.avif</span><br />
                                <span>descr:</span><span>Do not worry, just be happy.</span>
                            </code>
                        </pre>
                    </div>
                    <Twikoo />
                </div>
                <Aside />
            </div>
        </>
    )
}
