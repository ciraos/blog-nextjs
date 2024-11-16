'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { navList } from "@/config/navlist";
import avatar1 from "@/app/images/avatar1.avif";

export default function Navbar() {
  const [comment, setComment] = useState(false);
  return (
    <>
      <div id="navbar" className="w-full max-w-6xl h-16 my-0 mx-auto py-0 px-2 flex rounded-b-xl shadow-lg hover:shadow-xl dark:bg-dacard">

        <Link href="/" className="w-32 h-16 text-left text-base text-black content-center transition-all max-425:w-max dark:text-white">葱苓sama<sup className="ml-1 text-orange-600">2.0</sup></Link>

        <ul className="navlink w-[calc(100%-128px-240px)] h-16 flex items-center gap-0 dark:text-white">
          {navList?.map((item, index) => (
            <li key={index} className="btli w-24 text-center">
              <div className="no-underline hover:underline hover:underline-offset-2">
                <div className="text-base">{item.list}</div>
                <ul className="droplist hidden absolute w-24 mx-auto rounded-lg overflow-hidden divide-y-2 divide-solid divide-gray-400 bg-white">
                  {item.child.map((link, index) => (
                    <li key={index} className="w-full h-10 flex items-center text-base justify-center cotnent-center text-black hover:text-purple-500 text-[15.8px]"><Link href={link.link} className="flex items-center justify-center gap-1">{link.icon}{link.name}</Link></li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </>
  );
}
