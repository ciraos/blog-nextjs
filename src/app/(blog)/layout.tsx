
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Rightside from "@/components/rightside";
import PostChat from "@/components/thirdParty/postchat";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <section id="BLOG">
            <Navbar />
            <div className="main-content w-full max-w-5xl my-5 mx-auto flex max-425:px-4 max-425:flex-col">
                {children}
            </div>
            <Footer />
            <Rightside />
            <PostChat />
        </section>
    );
}
