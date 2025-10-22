import { Metadata } from "next";

export const metadata: Metadata = {
  title: "葱苓小筑 | 首页",
};

export default function Home() {
  return (
    <>
      <div className="recent-posts">
        <div className="recent-posts-item"></div>
      </div>
    </>
  );
}
