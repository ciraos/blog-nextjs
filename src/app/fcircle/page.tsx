import Link from "next/link";
import Aside from "@/components/aside";
import Twikoo from "@/components/thirdParty/twikoo";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "友链朋友圈 - 葱苓sama",
  icons: "/avatar1.avif"
};

export default async function Fcircle() {
  let data = await fetch('https://friends.ciraos.top/all');
  let articles = await data.json();
  return (
    <>
        <div className="w-full max-w-6xl py-[40px] px-[15px] mx-auto flex max-768:flex-col">
            <div className="main-container w-3/4 max-768:w-full">
                <div className="main-container py-2 px-6">
                  <div className="text-5xl text-gray-500 font-semibold py-5 px-5">友链朋友圈</div>
                  <ul id="fcircle"></ul>
                </div>
                <Twikoo />
            </div>
            <Aside />
        </div>
    </>
  )
}
