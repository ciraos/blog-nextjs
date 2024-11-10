import Image from "next/image";
import capoo from "@/app/images/capoo.gif";

export default function Capoo() {
  return (
    <>
      <div className="w-[185px] h-[150px] my-0 mx-auto">
        <Image src={capoo} alt="capoo" className="w-[185px] h-[150px] mx-auto" priority />
      </div>
    </>
  );
}
