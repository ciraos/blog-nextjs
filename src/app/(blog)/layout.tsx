import NextTopLoader from "nextjs-toploader";

import { ConfigProvider } from "antd";
import Navbar from "@/components/navbar";
import Aside from "@/components/aside";
import Footer from "@/components/footer";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <section id="BLOG">
            <NextTopLoader color="#39c5bb" easing="ease" shadow="0 0 10px #2299DD,0 0 5px #2299DD" showSpinner={false} />
            <ConfigProvider
                theme={{
                    token: {
                        // Seed Token，影响范围大
                        colorPrimary: '#ED4192',
                        borderRadius: 12,

                        // 派生变量，影响范围小
                        colorBgContainer: '#39C5BB',
                    },
                }}
            >
                <Navbar />
                <div className="w-full max-w-5xl my-5 mx-auto flex max-425:px-4 max-425:flex-col">
                    {children}
                    <Aside />
                </div>
                <Footer />
            </ConfigProvider>
        </section>
    );
}
