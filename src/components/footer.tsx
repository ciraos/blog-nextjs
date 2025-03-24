import Link from "next/link";
import { Icon } from "@iconify/react";
import { footernav } from "@/config/footernav";

export default function Footer() {
  return (
    <>
      <div className="footer w-full absolute clear-both mx-auto py-0 text-center max-425:w-full">

        <div className="mx-auto flex h-6 w-1/2 items-center justify-center gap-4 dark:text-gray-400">
          <ul className="text-2xl">
            <li><Link href="https://github.com/ciraos" target="_blank" rel="noopener noreferrer"><Icon icon="bi:github" className="w-5 h-5" /></Link></li>
          </ul>
          <ul className="text-2xl">
            <li><Link href="https://gitee.com/ciraos" target="_blank" rel="noopener noreferrer"><Icon icon="simple-icons:gitee" className="w-5 h-5" /></Link></li>
          </ul>
          <ul className="text-3xl">
            <li><Link href="mailto:ciraos@yeah.net"><Icon icon="tabler:mail-filled" className="w-5 h-5" /></Link></li>
          </ul>
        </div>

        <div className="w-full my-1 px-40 text-left gap-5 flex flex-wrap justify-center">
          {footernav?.map((a, index) => (
            <div key={index} className="w-32">
              <div className="mb-1 select-none font-semibold text-slate-600 dark:text-slate-200">{a.list}</div>
              <ul>
                {a.child.map((b, index) => (
                  <li key={index}>
                    <Link href={b.link} target={b.target} rel={b.rel} className="dark:text-slate-100">{b.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="dark:text-slate-400 max-425:text-md">All rights reserved to ©葱苓sama 2024 - {new Date().getFullYear()}.</p>
        <Link href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" className="text-slate-600">皖ICP备2023018992号-1</Link>
        <span className="mx-1">|</span>
        <Link href="https://icp.gov.moe/?keyword=20230619" target="_blank" rel="noopener noreferrer" className="text-slate-600">萌ICP备20230619号</Link>
        <p className="max-425:text-md"><span className="dark:text-white">自豪地使用</span><Link href="https://zh-hans.react.dev/" target="_blank" rel="noopener noreferrer" className="ml-1 text-slate-600">React</Link><span className="mx-1"><span className="dark:text-white">+</span></span><Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-slate-600">Nextjs</Link></p>

      </div>
    </>
  );
}
