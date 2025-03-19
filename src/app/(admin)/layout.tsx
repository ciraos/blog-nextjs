import DBSider from "@/components/_dashboard/dbsider";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <section id="ADMIN" className="flex">
                <DBSider />
                <div className="ADNIN-main w-full px-5 relative">{children}</div>
            </section>
        </>
    )
}
