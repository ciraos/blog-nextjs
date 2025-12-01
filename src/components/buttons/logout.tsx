"use client";
import { useRouter } from "next/navigation";
import {
    Button
} from "antd";
import "@ant-design/v5-patch-for-react-19";

export default function LogoutButton() {
    const router = useRouter();

    const handlerLogout = async () => {
        const b = await fetch("/api/logout", {
            "method": "DELETE",
        });
        const data = await b.json();
        if (data.success) {
            router.push("/login");
        }
    };

    return (
        <>
            <Button
                onClick={handlerLogout}
                type="primary"
            >
                登出
            </Button>
        </>
    )
}
