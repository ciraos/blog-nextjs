import { Metadata } from "next";
import RegisterPage from "@/components/(auth)/registerpage";

export const metadata: Metadata = {
    title: "葱苓小筑 | 注册",
};

export default function Register() {
    return (
        <>
            <RegisterPage />
        </>
    );
}
