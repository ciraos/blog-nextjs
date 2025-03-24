import NextTopLoader from "nextjs-toploader";

import Navbar from "@/components/navbar";
import Aside from "@/components/aside";
import Footer from "@/components/footer";
import Rightside from "@/components/rightside";
import PostChat from "@/components/thirdParty/postchat";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <section id="BLOG">
                <NextTopLoader color="#39c5bb" easing="ease" shadow="0 0 10px #2299DD,0 0 5px #2299DD" showSpinner={false} />
                <Navbar />
                <div id="BLOG-main" className="w-full max-w-5xl my-10 mx-auto flex max-425:px-2 max-425:flex-col">
                    {children}
                    <Aside />
                </div>
                <Footer />
                <Rightside />
                <PostChat />
            </section>
        </>
    )
}
