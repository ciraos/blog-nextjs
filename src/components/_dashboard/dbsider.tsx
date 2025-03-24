'use client';
import Link from 'next/link';
import {
    useRouter,
} from "next/navigation";
import { dbnavlist } from "@/config/_dashboard/dbnavlist"
import { Icon } from "@iconify/react";
import { Avatar, Button } from 'antd';
import "@ant-design/v5-patch-for-react-19";

export default function DBSider() {
    const router = useRouter();

    const handlerLogout = async () => {
        const c = await fetch('/api/logout', {
            method: "DELETE",
        })
        const data = await c.json();
        if (data.success) {
            router.push('/login')
        };
    };

    return (
        <>
            <div className="w-64 h-screen border-r-2 bg-white max-425:hidden">
                <div className='h-16 border-b-2 flex items-center justify-center gap-2 text-center text-slate-600 border-b-1'><Icon icon="material-symbols-light:dashboard-customize-rounded" width="24" height="24" />葱苓の后台QwQ</div>

                <div className='w-64 py-3 flex flex-col'>
                    <div className='pl-5 text-slate-500'>链接</div>
                    {dbnavlist?.map((item, index) => (
                        <Link key={index} href={item.link} className='h-10 px-10 rounded-xl text-left content-center hover:bg-slate-200'>{item.name}</Link>
                    ))}
                </div>

                <div className='w-64 h-max py-1 border-t-2 mx-auto bottom-0 absolute border-t-1 flex flex-col justify-around gap-2'>
                    <div className='text-slate-600 text-center text-sm'>by ©葱苓ciraos {new Date().getFullYear()} with <span className="animate-pulse">❤</span></div>
                    <div className='flex justify-center items-center gap-2'>
                        <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>C</Avatar>
                        <Button onClick={handlerLogout} className='bg-[#f4f4f4]'><Icon icon="material-symbols-light:logout-sharp" className='w-6 h-6' /><span className='text-6'>登出</span></Button>
                    </div>
                </div>

            </div>
        </>
    )
}
