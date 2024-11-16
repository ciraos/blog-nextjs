import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ciraos from "@/app/images/avatar1.avif";

export const metadata: Metadata = {
  title: "关于窝 - 葱苓sama",
  icons: "/avatar1.avif",
};

export default function About() {
  return (
    <>
      <div className="container max-w-6xl py-[40px] px-[15px] my-0 mx-auto">

        <div className="about-avatar w-32 h-32 mx-auto">
          <Image src={ciraos} alt="avatar" className="w-32 h-32 my-0 mx-auto border-[1px] border-solid border-white rounded-[50%]" priority={true} />
        </div>
        <div className="w-max h-max mt-5 text-4xl content-center mx-auto dark:text-white">葱苓sama</div>
        <div className="w-max text-base content-center mx-auto dark:text-white">宝剑锋从磨砺出，梅花香自苦寒来。</div>

      </div>
    </>
  );
}
