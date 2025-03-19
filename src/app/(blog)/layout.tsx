import Navbar from "@/components/navbar";
import Aside from "@/components/aside";
import Footer from "@/components/footer";
import Rightside from "@/components/rightside";
import PostChat from "@/components/thirdParty/postchat";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <section id="BLOG">
                <Navbar />
                <div id="BLOG-main" className="w-full max-w-5xl my-10 mx-auto flex max-425:flex-col max-425:px-0">
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
