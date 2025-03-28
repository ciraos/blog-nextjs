// import Link from "next/link";
import { Metadata } from "next";
import FcLite from "@/components/thirdParty/fclite";

export const metadata: Metadata = {
  title: "友链朋友圈 - 葱苓sama",
};

export default function Fcircle() {
  return (
    <>
      <div className="w-3/4 max-425:w-full">
        <div className="text-5xl text-gray-500 font-semibold py-5 px-5">友链朋友圈</div>
        <FcLite />
      </div>
    </>
  )
}
