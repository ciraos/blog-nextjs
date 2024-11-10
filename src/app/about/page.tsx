import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import ciraos from "@/app/images/avatar1.avif";
import ganyu from "@/app/images/ganyu.avif";
import ganyu1 from "@/app/images/ganyu1.avif";
import ganyu2 from "@/app/images/ganyu2.avif";
import ganyu3 from "@/app/images/ganyu3.avif";
import ganyu4 from "@/app/images/ganyu4.avif";
import ganyu5 from "@/app/images/ganyu5.avif";
import ganyu6 from "@/app/images/ganyu6.avif";

export const metadata: Metadata = {
  title: "关于窝 - 葱苓sama",
  icons: "/avatar1.avif",
};

export default function About() {
  return (
    <>
      <div className="py-[40px] px-[15px] my-0 mx-auto">

        <div className="about-avatar w-32 h-32 mx-auto">
          <Image src={ciraos} alt="avatar" className="w-32 h-32 my-0 mx-auto border-[1px] border-solid border-white rounded-[50%]" priority={true} />
        </div>

        <div className="w-max h-max mt-5 text-4xl content-center mx-auto dark:text-white">葱苓sama</div>

        <div className="w-max text-base content-center mx-auto dark:text-white">宝剑锋从磨砺出，梅花香自苦寒来。</div>

        <div className="shell">
          <div className="box">
            <Image src={ganyu} alt="ganyu" title="ganyu"></Image>
            <span>甘雨</span>
          </div>
          <div className="box">
            <Image src={ganyu1} alt="sfq-img" title="sfq-img"></Image>
            <span>甘雨</span>
          </div>
          <div className="box">
            <Image src={ganyu2} alt="sfq-img" title="sfq-img"></Image>
            <span>甘雨</span>
          </div>
          <div className="box">
            <Image src={ganyu3} alt="sfq-img" title="sfq-img"></Image>
            <span>甘雨</span>
          </div>
          <div className="box">
            <Image src={ganyu4} alt="sfq-alt" title="sfq-img"></Image>
            <span>甘雨</span>
          </div>
          <div className="box">
            <Image src={ganyu5} alt="sfq-alt" title="sfq-img"></Image>
            <span>甘雨</span>
          </div>
          <div className="box">
            <Image src={ganyu6} alt="sfq-alt" title="sfq-img"></Image>
            <span>甘雨</span>
          </div>
        </div>

      </div>
    </>
  );
}
