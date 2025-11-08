import type { Metadata } from "next";
import Link from "next/link";
import {
  Divider,
  Image,
  Pagination
} from "antd";
import "@ant-design/v5-patch-for-react-19";
import { Icon } from "@iconify/react";
import moment from "moment";
import { fetchPostList } from "@/utils/articles";
import { PostListResponse } from "@/types/articles";

export const metadata: Metadata = {
  title: "葱苓小筑 | 首页",
};

export default async function Home() {
  const postData: PostListResponse = await fetchPostList();
  const { code, message, data } = postData;
  const {
    list:
    postList,
    total,
    // page,
    pageSize
  } = data;

  if (code !== 200) {
    return <div>获取失败：{message}</div>;
  }

  return (
    <>

      <div className="recent-posts">
        {postList.map((post, index) => (
          <div key={index} style={{}} className="recent-posts-item shadow-sm">

            <Link href={`/posts/${post.id}`} className="post-cover w-[42%] h-full">
              <Image
                alt="fl-avatar"
                fallback="https://cdn.smartcis.cn/gh/ciraos/ciraos-static@main/img/default_cover.avif"
                // width={344}
                // height={220.8}
                preview={false}
                src={post.cover_url}
                style={{ height: 221 }}
              />
            </Link>

            <div className="post-meta w-[58%] py-2 px-5 flex flex-col justify-center">
              <Link href={`/posts/${post.id}`} className="text-2xl break-all">{post.title}</Link>

              <div className="text-sm mt-2">
                <span className="flex items-center">
                  <Icon icon="icon-park-outline:time" width={18} height={18} className="mr-0.5" />
                  <span className="m-0">创建于{post.created_at ? moment(post.created_at).format('YYYY-MM-DD, h:mm:ss') : '未知'}</span>
                </span>
                {/* <Divider type="vertical" variant="solid" /> */}
                {/* <span className="flex">
                  <Icon icon="icon-park-outline:time" width={18} height={18} className="m-0" />
                  <span className="m-0">&nbsp;更新于{post.updated_at ? moment(post.updated_at).format('YYYY-MM-DD, h:mm:ss') : '未知'}</span>
                </span> */}
              </div>

              <div className="text-sm m-0">{post.summaries ?? "描述为空捏！"}</div>

              <div className="tags flex items-center">
                {post.post_tags.length > 0 && (
                  <div className="tags-item flex font-mono">
                    {/* <Icon icon="famicons:pricetags-sharp" width="15px" height="15px" /> */}
                    {post.post_tags.map((tag, index) => (
                      <span key={index} style={{ marginRight: '8px' }}>
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                )}

                <Divider type="vertical" variant="solid" />

                {/* {post.post_categories.length > 0 && (
                  <div className="flex">
                    {post.post_categories.map((category: any) => (
                      <span key={category.id} style={{ marginRight: '8px' }}>
                        {category.name}
                      </span>
                    ))}
                  </div>
                )} */}
              </div>

              <div className="text-sm">阅读量：{post.view_count} | 阅读时间：{post.reading_time}分钟</div>

            </div>
          </div>
        ))}

        <Pagination
          style={{ marginTop: '10px' }}
          align="center"
          // current={page}
          defaultCurrent={1}
          defaultPageSize={pageSize}
          responsive
          showQuickJumper
          showTitle
          // showTotal={ }
          total={total}
        />

      </div>
    </>
  );
}
