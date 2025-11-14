import { Metadata } from "next";

import ArchivespPage from "@/components/(blog)/archivespage";

export const metadata: Metadata = {
    title: "文章 | 归档",
};

export default function Archives() {
    return (
        <>
            <div>
                <h2>归档</h2>
                <ArchivespPage />
            </div>
        </>
    );
}
