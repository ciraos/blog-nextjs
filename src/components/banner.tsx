import Image from "next/image";
import Link from "next/link";

import Navbar from "./navbar";

export default function Banner(){
    return (
        <>
            <div className="banner w-full h-screen bg-ganyu5 bg-cover bg-center bg-no-repeat flex flex-col justify-between">

                <Navbar />

                <div className="site-info w-full text-center">
                    <p className="text-white text-4xl">葱苓samaの博客</p>
                    <div className="text-white text-lg">宝剑锋从磨砺出，梅花香自苦寒来。</div>
                </div>

                <div className="scroll-down w-full animate-bounce text-white text-2xl text-center">V</div>

            </div>
        </>
    )
}
