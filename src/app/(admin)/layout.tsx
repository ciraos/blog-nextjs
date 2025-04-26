'use client'
import Dbaside from '@/components/_dashboard/dbaside';

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <section id="ADMIN" className='flex'>
                <Dbaside />
                <div className="admin-main w-[calc(100%-256px)] flex flex-col justify-between">
                    <div className='w-full h-16 py-1 px-5 bg-white'></div>
                    <div className='h-max mx-5 py-2 px-4 bg-white rounded-xl shadow-md hover:shadow-xl'>{children}</div>
                    <div className='h-12 bg-white content-center text-center'>{new Date().getFullYear()} all by ©ciraos</div>
                </div>
            </section>
        </>
    )
}
