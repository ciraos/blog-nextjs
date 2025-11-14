"use client";
import { usePathname } from "next/navigation";

import {
    Button
} from "antd";
import {
    CaretRightOutlined
} from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";

export default function JiKe() {
    const pathname = usePathname();
    const isHomepage = pathname === "/";

    return (
        <>
            {isHomepage ? (
                <div className="jike w-full h-10 py-1 px-3 flex items-center justify-between bg-white rounded-2xl shadow-lg hover:shadow-2xl">
                    <p className="font-extrabold">即刻</p>
                    <Button type="text"><CaretRightOutlined /></Button>
                </div>
            ) : (
                <div className="hidden jike w-full h-10 py-1 px-3 bg-white rounded-2xl shadow-lg hover:shadow-2xl">
                    <p className="font-extrabold">即刻</p>
                    <Button type="text"><CaretRightOutlined /></Button>
                </div>
            )}
        </>
    )
}
