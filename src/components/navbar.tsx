'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { navList } from "@/config/navlist";
import avatar1 from "@/app/images/avatar1.avif";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  function addOpenClass() {}
  return (
    <>
      <div id="navbar" className="w-full max-w-6xl h-16 my-0 mx-auto py-0 px-4 flex rounded-b-xl shadow-lg hover:shadow-xl dark:bg-dacard">

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

        <div id="search" className="search w-60 h-8 bg-slate-200 my-auto content-center gap-2 rounded-lg dark:text-white">
          <form action="" className="px-4 flex items-center gap-0">
            <Icon width="1.1em" height="1.1em" icon="iconamoon:search-duotone" />
            <input type="text" placeholder="搜索..." className="bg-slate-200 ml-2 text-md" />
          </form>
        </div>

        <ul id="dd_menu" className="dd_menu">
          <li><Image src={avatar1} alt="avatar1" title="avatar1" className="w-20 h-20 mx-auto rounded-[50%]" /><hr className="my-2" /></li>
          {navList?.map((item, index) => (
            <li key={index} className="dd_menu_li">
              <div className="dd_menu_li_div">
                <div className="dd_menu_li_div_title">{item.list}</div>
                <ul className="dd_menu_li_div_ul">
                  {item.child.map((link, index) => (
                    <li key={index} className="dd_menu_li_div_ul_li">
                      <Link href={link.link} className="dd_menu_link">
                        <div className="dd_menu_link_icon">{link.icon}</div>
                        <div className="dd_menu_link_name">{link.name}</div>
                      </Link>
                    </li>
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
