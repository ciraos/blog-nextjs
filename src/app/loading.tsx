import Image from "next/image";
import avatar1 from "@/app/images/avatar1.avif";

export default function Loading() {
    return (
        <div className="w-full h-screen absolute t-0 left-0 bottom-0 right-0 z-[9999] bg-white flex justify-center items-center dark:bg-dacard">
            <Image src={avatar1} className="w-24 h-24 rounded-[50%]" alt="loadingAvatar" />
        </div>
    )
}