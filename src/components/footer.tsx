import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Capoo from "@/components/capoo";

export default function Footer() {
  return (
    <>
      <div id="footer" className="footer w-full bottom-0 relative clear-both mx-auto my-0 py-2 text-center">

        <Capoo />
        <div className="mx-auto flex h-6 w-1/2 items-center justify-center gap-4 dark:text-gray-400">
          <ul className="text-2xl">
            <li><Link href="https://github.com/ciraos" target="_blank" rel="noopener noreferrer"><Icon icon="bi:github" /></Link></li>
          </ul>
          <ul className="text-2xl">
            <li><Link href="https://gitee.com/ciraos" target="_blank" rel="noopener noreferrer"><Icon icon="simple-icons:gitee" /></Link></li>
          </ul>
          <ul className="text-3xl">
            <li><Link href="mailto:ciraos@yeah.net"><Icon icon="tabler:mail-filled" /></Link></li>
          </ul>
        </div>
        <p className="dark:text-slate-400">All rights reserved to ©葱苓sama 2024.</p>
        <Link href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" className="text-orange-500">皖ICP备2023018992号-1</Link>
        <p className=""><span className="dark:text-white">自豪地使用</span><Link href="https://zh-hans.react.dev/" target="_blank" rel="noopener noreferrer" className="ml-1 text-orange-500">React</Link><span className="mx-1"><span className="dark:text-white">+</span></span><Link href="" target="_blank" rel="noopener noreferrer" className="text-orange-500">Nextjs</Link></p>

      </div>
    </>
  );
}