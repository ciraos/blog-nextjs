import { Metadata } from "next";

export const metadata: Metadata = {
    title: "关于本站"
};

export const pageConfig = {
    hideAside: true,
}

export default function About() {
    return (
        <>
            <h2>关于本站</h2>
        </>
    );
}
