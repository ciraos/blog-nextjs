import Image from "next/image";
import type { Metadata } from "next";
import ciraos from "@/app/images/avatar.avif";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import "@ant-design/v5-patch-for-react-19";

export const metadata: Metadata = {
  title: "关于窝 - 葱苓小筑",
  icons: "/avatar.avif",
};

export default function About() {
  return (
    <>
      <div className="w-3/4 mx-auto dark:text-white ">
        <div className="about-avatar w-32 h-32 mx-auto">
          <Image src={ciraos} alt="avatar" className="w-32 h-32 my-0 mx-auto border-[1px] border-solid border-white rounded-[50%]" priority={true} />
        </div>
        <div className="w-max h-max mt-5 text-4xl content-center mx-auto dark:text-white">葱苓小筑</div>
        <div className="w-max text-base content-center mx-auto dark:text-white">宝剑锋从磨砺出，梅花香自苦寒来。</div>
        <div className="main-container">
          <h2>Who am I</h2>
          <p>葱苓sama - 一个对写代码灰常感兴趣的机车乘务员</p>
          <Timeline mode="alternate" className="mx-10 dark:text-slate-300"
            items={[
              {
                color: 'blue',
                children: 'year 2025 - 开始使用ciraos.top域名并备案。',
              },
              {
                color: 'pink',
                children: 'year 2025 - 开始接触react、nextjs框架，并尝试使用其编写静态博客。',
              },
              {
                dot: <ClockCircleOutlined className="text-4" />,
                children: '······',
              },
              {
                color: 'black',
                children: '再后来在静态和动态之间来回横跳，也因为部署时遇到过这样或那样的问题，不过好在后来都坚持了下来。'
              },
              {
                color: 'red',
                children: '后来尝试接入备案，把博客部署到服务器，以便于提升博客访问速度和体验。'
              },
              {
                color: 'orange',
                children: '后来又换到了安知鱼主题（据说这可是一位设计师设计的hexo主题哦，炒鸡好看！）'
              },
              {
                color: 'purple',
                children: '后来尝试了很多主题：butterfly、volantis、stellar、fluid等等。'
              },
              {
                color: '#39c5bb',
                children: '第一次接触博客，认识了hexo，部署了butterfly主题，开始了我的博客之旅。',
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
