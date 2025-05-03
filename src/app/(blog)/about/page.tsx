import Image from "next/image";
import type { Metadata } from "next";

import ciraos from "@/app/images/avatar.avif";

export const metadata: Metadata = {
  title: "关于窝 - 葱苓小筑",
  icons: "/avatar.avif",
};

export default function About() {
  return (
    <>
      <div className="w-3/4 mx-auto dark:text-white ">
        <div className="about-avatar w-32 h-32 mx-auto">
          <Image src={ciraos} alt="avatar" className="w-32 h-32 my-0 mx-auto border-[1px] border-solid border-white rounded-[50%]" priority={true} />
        </div>
        <div className="w-max h-max mt-5 text-4xl content-center mx-auto dark:text-white">葱苓小筑</div>
        <div className="w-max text-base content-center mx-auto dark:text-white">宝剑锋从磨砺出，梅花香自苦寒来。</div>
        <div className="main-container">
          <h2>Who am I</h2>
          <p>葱苓sama - 一个对写代码灰常感兴趣的机车乘务员。</p>
        </div>
      </div>
    </>
  );
}
