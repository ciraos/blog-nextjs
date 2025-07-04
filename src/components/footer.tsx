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

        <div className="w-3/5 my-1 mx-auto px-0 text-left gap-5 flex flex-wrap justify-between max-425:w-full max-425:px-5">
          {footernav?.map((a, index) => (
            <div key={index} className="w-20">
              <div className="mb-[1px] select-none text-lg font-semibold text-slate-500 dark:text-slate-400">{a.list}</div>
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

        <p className="dark:text-slate-400 max-425:text-md">All rights reserved to ©葱苓小筑 2024 - {new Date().getFullYear()}.</p>
        <Link href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" className="text-slate-600">皖ICP备2023018992号-1</Link>
        <p className="max-425:text-md"><span className="dark:text-white">自豪地使用</span><Link href="https://zh-hans.react.dev/" target="_blank" rel="noopener noreferrer" className="ml-1 text-slate-600">React</Link><span className="mx-1"><span className="dark:text-white">and</span></span><Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-slate-600">Nextjs</Link></p>

      </div>
    </>
  );
}
