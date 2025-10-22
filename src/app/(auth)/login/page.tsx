import { Metadata } from "next";
import LoginPage from "@/components/(auth)/loginpage";

export const metadata: Metadata = {
    title: "葱苓小筑 | 登录",
};

export default function Login() {
    return (
        <>
            <LoginPage />
        </>
    );
}
