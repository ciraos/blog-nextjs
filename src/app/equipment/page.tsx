import Image from "next/image";
import Link from "next/link";
import { equipmentList } from "@/config/equipment";

export default function Equipment() {
    return (
        <>
            <div className="w-full max-w-6xl py-[40px] px-[15px] mx-auto">
                <div className="equipment main-container">
                    {equipmentList.map((item, index) => (
                        <div key={index} className="">
                            <h2 key={index} className="dark:text-white">{item.category}</h2>
                            <ul className="equipment-item-list flex gap-5 max-425:flex-col">
                                {item.child.map((staff, index) => (
                                    <li key={index} className="equipment-item w-60 h-max bg-white rounded-xl shadow-sm hover:shadow-md max-425:w-full dark:bg-dacard dark:text-[whitesmoke]">
                                        <div className="h-44 flex justify-center">{staff.images}</div>
                                        <div className="h-[72px] mt-1 px-2">
                                            <div className="text-sm">{staff.name}</div>
                                            <div className="flex justify-between items-center">
                                                <div className="before:content-['￥']">{staff.price}</div>
                                                <Link href={staff.link} target="_blank" rel="noopener noreferrer" className="">传送门</Link>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
