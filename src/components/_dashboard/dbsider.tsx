'use client';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import avatar from "@/app/images/avatar.avif";
import { Icon } from "@iconify/react";
import { Avatar, Button } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { dbNavlist } from "@/config/_dashboard/dbnavlist";

export default function Dbsider() {
    const router = useRouter();
    const handlerlogout = async () => {
        const c = await fetch('/api/logout', {
            method: "DELETE",
        })
        const data = await c.json();
        if (data.success) { router.push('/login') };
    };
    return (
        <>
            <div className="db-sider w-60 h-screen py-2 bg-slate-600 flex flex-col justify-start gap-5 max-425:hidden">

                <div className="py-5 text-slate-50 text-xl text-center content-center capitalize font-semibold">DashBoard <sup className="text-orange-300 text-sm">v_0.0.1</sup></div>

                <div className="db-navbar h-max">
                    <div className="mulu flex flex-col">
                        <h2 className="px-5 text-slate-100 font-bold">导航栏</h2>
                        {dbNavlist.map((item, index) => (
                            <Link key={index} href={item.link} className="mulu-item w-full h-12 text-center rounded-md content-center text-slate-200 hover:bg-slate-700">{item.name}</Link>
                        ))}
                    </div>
                    <div className="projects">
                        <h2 className="mt-1 px-5 text-slate-100 font-bold">我的项目</h2>
                        <div className="w-full h-12 text-center rounded-md content-center text-slate-200 hover:bg-slate-700">a</div>
                        <div className="w-full h-12 text-center rounded-md content-center text-slate-200 hover:bg-slate-700">b</div>
                        <div className="w-full h-12 text-center rounded-md content-center text-slate-200 hover:bg-slate-700">c</div>
                        <div className="w-full h-12 text-center rounded-md content-center text-slate-200 hover:bg-slate-700">d</div>
                        <div className="w-full h-12 text-center rounded-md content-center text-slate-200 hover:bg-slate-700">e</div>
                    </div>
                </div>

                <div className="w-full h-8 px-1 flex justify-between items-center">
                    <div className="flex">
                        <Image src={avatar} alt="avatar" title="avatar" className="w-8 h-8 mx-auto rounded-full shadow-md hover:shadow-xl" />
                        <div className="ml-1">
                            <div className="user-name text-sm text-white font-semibold">ciraos</div>
                            <div className="user-email text-xs text-white overflow-hidden">ciraos@yeah.net</div>
                        </div>
                    </div>
                    <div className=""><Button type="primary" onClick={handlerlogout} className=""><Icon icon="heroicons-outline:logout" width="20" height="20" />登出</Button></div>
                </div>

            </div>
        </>
    )
}
