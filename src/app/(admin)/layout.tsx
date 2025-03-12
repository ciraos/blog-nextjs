
import { Metadata } from "next";

import Dbsider from "@/components/_dashboard/dbsider";

export const metadata: Metadata = {
    title: "Dashboard - 葱苓sama",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <section id="DASHBOARD" className="w-full flex">
            <Dbsider />
            <div className="dbmain py-2 px-4">
                {children}
            </div>
        </section>
    );
}
