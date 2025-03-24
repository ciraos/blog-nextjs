import { Metadata } from "next";
import DBSider from "@/components/_dashboard/dbsider";

export const metadata: Metadata = {
    title: "仪表盘 | 葱苓小筑",
};

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <section id="ADMIN" className="flex">
                <DBSider />
                <div id="ADMIN-main" className="w-full px-5">
                    {children}
                </div>
            </section>
        </>
    )
}
