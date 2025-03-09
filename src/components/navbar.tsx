'use client';
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { navList } from "@/config/navlist";
import avatar from "@/app/images/avatar.avif";

export default function Navbar() {
  return (
    <>
      <div id="navbar" className="w-full max-w-6xl h-14 mx-auto px-5 rounded-md transition-all flex items-center justify-between bg-white shadow-md hover:shadow-xl dark:bg-[#2c303f] max-425:mt-0">

        {/* 导航栏左侧标题 */}
        <Link href="/" className="w-32 h-14 text-left text-base flex items-center dark:text-white max-425:w-max">葱苓语畔<sup className="ml-1 text-orange-600 font-semibold">2.0</sup></Link>

        {/* 导航栏中部链接 */}
        <ul className="navlink w-max h-14 flex items-center dark:text-white max-425:hidden">
          {navList?.map((item, index) => (
            <li key={index} className="btli w-24 text-center">
              <div className="no-underline hover:underline hover:underline-offset-2">
                <div className="text-base">{item.list}</div>
                <ul className="droplist hidden absolute w-24 mx-auto rounded-lg overflow-hidden z-10 divide-y-2 divide-solid divide-gray-400 bg-white">
                  {item.child.map((link, index) => (
                    <li key={index} className="w-full h-10 flex items-center text-base justify-center cotnent-center text-black hover:text-purple-500 text-[15.8px]"><Link href={link.link} className="flex items-center justify-center gap-1">{link.name}</Link></li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        {/* 导航栏右侧按钮 */}
        <div className="buttons max-425:flex max-425:gap-1">
          <button className="search"><Icon icon="material-symbols:search" className="w-6 h-6" /></button>
          <div onClick={() => { const a = document.getElementById("mobile") as HTMLElement; const b = document.getElementById('menu-mask') as HTMLElement; a.style.display = "block"; b.style.display = "block"; }} id="mobile-btn" className="mobile-btn hidden max-425:block"><Icon icon="material-symbols-light:menu" width="26.6666" height="26.6666" /></div>
        </div>

        {/* 移动端侧边导航栏遮罩 */}
        <div onClick={() => { const a = document.getElementById("mobile") as HTMLElement; const b = document.getElementById('menu-mask') as HTMLElement; a.style.display = "none"; b.style.display = "none"; }} id="menu-mask" className=""></div>

        {/* 移动端侧边导航栏  */}
        <ul id="mobile" className="mobile dark:bg-slate-600">
          <Image src={avatar} alt="avatar" className="w-20 h-20 my-4 mx-auto rounded-full" />
          <hr className="w-4/5 my-2 mx-auto text-slate-600" />
          {navList?.map((item, index) => (
            <li key={index} className="">
              <div className="">
                <div className="mb-1 ml-2 text-slate-500 text-sm dark:text-slate-200">{item.list}</div>
                <ul className="flex flex-wrap">
                  {item.child.map((link, index) => (
                    <li onClick={() => { const a = document.getElementById("mobile") as HTMLElement; const b = document.getElementById('menu-mask') as HTMLElement; a.style.display = "none"; b.style.display = "none"; }} key={index} className="w-[calc(50%-15px)] h-14 my-1 mx-1 border-[1px] border-solid border-black rounded-lg py-0 px-0 content-center bg-white dark:bg-slate-800">
                      <Link href={link.link} className="flex flex-col justify-center items-center">
                        <div className="text-sm dark:text-slate-300"></div>
                        <div className="text-sm dark:text-slate-300">{link.name}</div>
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
