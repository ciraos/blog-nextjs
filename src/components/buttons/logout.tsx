"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    const handlerLogout = async () => {
        const e = await fetch("/api/logout", {
            method: "DELETE"
        });
        const data = await e.json();
        if (data.success) {
            router.refresh();
        }
    }
    return (
        <>
            <div
                onClick={handlerLogout}
            >
                登出
            </div>
        </>
    );
}
