'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { navList } from "@/config/navlist";
import avatar1 from "@/app/images/avatar1.avif";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  function addOpenClass(element: HTMLElement) {
    if (!isOpen) {
      element.classList.add("open");
      setisOpen(true);
    } else {
      element.classList.remove("open");
      setisOpen(false);
    }
  }
  return (
    <>
      <div id="navbar" className="w-full max-w-6xl h-16 my-0 mx-auto px-4 flex justify-between items-center rounded-b-xl shadow-lg hover:shadow-xl dark:bg-dacard">

        <Link href="/" className="w-1/3 h-16 flex items-center text-base text-black transition-all max-425:w-max dark:text-white">葱苓samaの博客</Link>

        <ul className="navlink w-1/3 h-16 flex items-center justify-center gap-0 dark:text-white">
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

        <div className="w-1/3 h-16 flex items-center justify-end text-xl gap-2 dark:text-white">
          <div id="randonPost" className="cursor-pointer"><Icon width="1.1em" height="1.1em" icon="game-icons:perspective-dice-six-faces-random" /></div>
          <div id="search" className="cursor-pointer"><Icon width="1.1em" height="1.1em" icon="iconamoon:search-duotone" /></div>
          <div className=""><Link href="https://admin.ciraos.top" target="_blank" rel="noopener noreferrer"><Icon widths="0.9em" height="0.9em" icon="subway:admin" /></Link></div>
          <div onClick={()=>{}} className="mo-nav transition-all hidden hover:rotate-45 max-768:block"><Icon icon="hugeicons:menu-square" /></div>
        </div>

        <ul id="dd_menu" className="dd_menu open">
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
