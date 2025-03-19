import type { Metadata } from "next";
import Twikoo from "@/components/thirdParty/twikoo";

export const metadata: Metadata = {
  title: "留言板 - 葱苓sama",
  icons: "/avatar.avif",
};

export default function Comments() {
  return (
    <>
      <div className="w-3/4 max-425:w-full">
        <div className="py-2 px-4">
          <div className="text-5xl text-gray-500 font-semibold py-5 px-5">留言板</div>
          <p className="text-center text-4xl text-orange-600">有什么想说的？</p>
          <p className="text-center text-4xl text-blue-600">或者说有什么想问的？</p>
          <p className="text-center text-4xl text-green-600">或者你有什么疑问？</p>
          <p className="text-center text-4xl text-purple-600">都可以在这里提出来哦！</p>
          <p className="text-center text-4xl text-pink-600">我会耐心解答的！</p>
        </div>
        <Twikoo />
      </div>
    </>
  );
}
