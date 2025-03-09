import Navbar from "./navbar"

import { Icon } from "@iconify/react"

export default function HomeBanner() {
    return (
        <>
            <div className="HomePage_banner w-full h-screen flex flex-col justify-between">
                <Navbar />
                <div className="w-full h-max text-center content-center text-white">
                    <p className="text-6xl">葱苓语畔</p>
                    <p className="mt-2 text-md">宝剑锋从磨砺出，梅花香自苦寒来。</p>
                </div>
                <div id="scrollDown" className="w-full h-12"><Icon icon="mdi:keyboard-arrow-down" className="w-12 h-12 mx-auto text-white text-xl font-semibold animate-bounce" /></div>
            </div>
        </>
    )
}
