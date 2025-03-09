import type { Metadata } from "next";

import Dbsider from "@/components/_dashboard/dbsider";
import Dbheader from "@/components/_dashboard/dbheader";
import Dbfooter from "@/components/_dashboard/dbfooter";

export const metadata: Metadata = {
    title: "Ciraos Console",
    description: "a small blog console.",
    icons: "/avatar.avif"
    // icons: "/avatar1.avif"
};

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <section className="DASHBOARD flex">
            <Dbsider />
            <div className="db-main w-[calc(100%-240px)] flex flex-col justify-between max-425:w-full">
                <Dbheader />
                <div className="my-2 mx-4 py-4 px-6 bg-white rounded-xl shadow-md hover:shadow-lg">{children}</div>
                <Dbfooter />
            </div>
        </section>
    );
}
