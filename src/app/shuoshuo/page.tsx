import type { Metadata } from "next";
import moment from "moment";
import {sslist} from "@/config/shuoshuo"
import Twikoo from "@/components/thirdParty/twikoo";

export const metadata:Metadata = {
    title: "说说 - 葱苓sama",
    
};

export default function Shuoshuo() {
  return (
    <>
      <div className="container max-w-6xl py-[40px] px-[15px] mx-auto">
        <wc-waterfall id="" className="wc-ss" gap={0} cols={4}>
          {sslist.map((item) => (
              <div key={item.id} className="w-60 h-max bg-white rounded-xl flex flex-col justify-between py-2 px-2 shadow-sm hover:shadow-md max-425:w-full dark:bg-dacard dark:text-[whitesmoke]">
                <p className="">{item.content}</p>
                <div className="my-1 columns-4 gap-1 hover:columns-3">{item.images}</div>
                <hr className="my-[1px]" />
                <div className="w-full h-8 flex items-center justify-between text-sm">
                  <span className="bg-slate-200 py-0 px-1 rounded-md before:content-['#'] before:mr-[1px]">{item.tag}</span>
                  <span className="text-sm">{moment(item.time).format('YYYY-MM-DD')}</span>
                </div>
              </div>
            ))}
        </wc-waterfall>
        <Twikoo />
      </div>
    </>
  );
}
