'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import moment from "moment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import { Icon } from "@iconify/react";
import { sslist } from "@/config/moments";

export default function SSBar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    return (
        <>
            <div style={{ display: isHomePage ? 'flex' : 'none' }} className="w-full h-12 py-2 px-4 mb-8 rounded-b-xl items-center shadow-md hover:shadow-lg bg-white dark:bg-[#2c303f]">

                <div className="basis-1/4"><Icon icon="material-symbols-light:speaker-group-outline-rounded" className="w-6 h-6" /></div>

                <Swiper
                    spaceBetween={0}
                    slidesPerView="auto"
                    virtual
                    autoplay
                    navigation={false}
                    className="truncate basis-1/2">
                    {sslist?.map((item, index) => (
                        <SwiperSlide key={index} className="">
                            <Link href="/moments" className="">
                                <span>{moment(item.time).format('YYYY-MM-DD')}:</span>
                                <span className="ml-5">{item.content}</span>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="basis-1/4 text-right">a</div>

            </div>
        </>
    )
}
