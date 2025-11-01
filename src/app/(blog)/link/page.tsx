import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "葱苓小筑 | 友人帐",
};

export default function Link() {
    return (
        <div>
            <h2 className="text-3xl font-semibold mb-8">友情链接</h2>
        </div>
    );
}
