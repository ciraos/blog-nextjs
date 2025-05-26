import type { Metadata } from "next";

import moment from "moment";
// import { Space } from "antd";
// import "@ant-design/v5-patch-for-react-19";
import { sslist } from "@/config/moments"
import Twikoo from "@/components/thirdParty/twikoo";

export const metadata: Metadata = {
  title: "说说 - 葱苓小筑",
};

export default function Moments() {
  return (
    <>
      <div className="w-3/4 max-425:w-full">

        <div className="flex flex-row flex-wrap gap-1 justify-start">
          {sslist.map((item) => (
            <div key={item.id} id="ss-item" className="ss-item w-60 h-max bg-white rounded-xl flex flex-col justify-between py-2 px-2 shadow-sm hover:shadow-md dark:bg-[#2c303f] dark:text-white max-425:w-full">
              <p className="">{item.content}</p>
              <div className="my-1 columns-4 hover:columns-3">{item.images}</div>
              <hr className="my-1" />
              <div className="w-full h-8 flex items-center justify-between text-sm">
                <span className="bg-slate-200 py-0 px-1 rounded-md before:content-['#'] before:mr-[1px] dark:text-slate-950">{item.tag}</span>
                <span className="text-sm">{moment(item.time).format('YYYY-MM-DD')}</span>
              </div>
            </div>
          ))}
        </div>

        <Twikoo />
      </div>
    </>
  );
}
