'use client';
import Link from "next/link";
// import { useRouter } from 'next/navigation';
// import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {
  // Avatar,
  Dropdown,
  Space
} from 'antd';
import { Icon } from "@iconify/react";
import { navList } from "@/config/navlist";

export default function Navbar() {
  // const router = useRouter();
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link href="/dashboard">仪表盘</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link href="/settings">账户设置</Link>
      ),
      // icon: <SmileOutlined />,
      // disabled: true,
    },
    {
      key: '3',
      label: '登出',
      onClick: async () => {
        const c = await fetch('/api/logout', {
          method: "DELETE",
        })
        await c.json();
      },
    },
  ];
  return (
    <>
      <div id="navbar" className="w-full max-w-6xl h-14 mx-auto px-5 rounded-md transition-all flex items-center justify-between bg-white shadow-md hover:shadow-xl dark:bg-[#2c303f] max-425:mt-0">

        {/* 导航栏左侧标题 */}
        <Link href="/" className="w-32 h-14 text-left text-base flex items-center dark:text-white max-425:w-max">葱苓小筑<sup className="ml-1 text-orange-600 font-semibold">2.0</sup></Link>

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
        <div className="buttons flex items-center gap-1 dark:text-white">
          <Dropdown menu={{ items }} className="hover:cursor-pointer">
            <a onClick={(e) => e.preventDefault()}>
              <Space>用户</Space>
            </a>
          </Dropdown>
          <button className="search"><Icon icon="material-symbols:search" className="w-6 h-6" /></button>
          <div onClick={() => {
            const a = document.querySelector('#mobile') as HTMLElement;
            const b = document.querySelector('#menu-mask') as HTMLElement;
            a.classList.add('open')
            b.classList.add('open')
          }} id="mobile-btn" className="mobile-btn hidden max-425:block"><Icon icon="material-symbols-light:menu" width="26.6666" height="26.6666" /></div>
        </div>

        {/* 移动端侧边导航栏遮罩 */}
        <div onClick={() => {
          const a = document.querySelector("#mobile") as HTMLElement;
          const b = document.querySelector('#menu-mask') as HTMLElement;
          a.classList.remove('open')
          b.classList.remove('open')
        }} id="menu-mask" className=""></div>

        {/* 移动端侧边导航栏  */}
        <ul id="mobile" className="mobile">
          <hr className="w-4/5 my-2 mx-auto text-slate-600" />
          {navList?.map((item, index) => (
            <li key={index} className="mobile-item">
              <div className="">
                <div className="mb-1 ml-2 text-slate-500 text-sm dark:text-slate-200">{item.list}</div>
                <ul className="mobile-item-item flex flex-wrap">
                  {item.child.map((link, index) => (
                    <li onClick={() => {
                      const a = document.querySelector("#mobile") as HTMLElement;
                      const b = document.querySelector('#menu-mask') as HTMLElement;
                      a.classList.remove('open')
                      b.classList.remove('open')
                    }} key={index} className="w-[calc(50%-8px)] h-max my-1 mx-1 content-center">
                      <Link href={link.link} className="mobile-link w-[7rem] h-[4.2rem] flex flex-col justify-center items-center border-2 rounded-xl">
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
