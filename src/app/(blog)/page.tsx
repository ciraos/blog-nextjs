/*
 * server page 
*/

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
import { SiteConfigResponse } from "@/types/site-config";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const imageFallbackPath = "data:image/png;base64,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";

async function getSiteConfig() {
  const k = await fetch(`${baseUrl}/public/site-config`);
  const res = await k.json() as SiteConfigResponse;
  return res.data;
}

const a = await getSiteConfig();

export const metadata: Metadata = {
  title: `${a.APP_NAME} | 首页`,
  icons: `${a.ICON_URL}`
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
                fallback={imageFallbackPath}
                preview={false}
                src={post.cover_url}
                style={{ height: 220.8 }}
              />
            </Link>

            <div className="post-meta w-[calc(100%-344px)] py-2 px-5 flex flex-col justify-center">
              <Link href={`/posts/${post.id}`} className="post-meta-title text-2xl">{post.title}</Link>

              <div className="text-sm mt-2">
                <span className="flex items-center">
                  <Icon icon="icon-park-outline:time" width={18} height={18} className="mr-1" />
                  <span className="mr-1">创建于{post.created_at ? moment(post.created_at).format('YYYY-MM-DD') : '未知'}</span>
                </span>
                {/* <Divider type="vertical" variant="solid" /> */}
                {/* <span className="flex items-center break-all">
                                    <Icon icon="icon-park-outline:time" width={18} height={18} className="mr-1" />
                                    <span className="mr-1">更新于{post.updated_at ? moment(post.updated_at).format('YYYY-MM-DD') : '未知'}</span>
                                </span> */}
              </div>

              <div className="text-sm m-0">{post.summaries}</div>

              <div className="flex items-center">
                {post.post_tags.length > 0 && (
                  <div className="flex">
                    {post.post_tags.map((tag, index) => (
                      <span key={index} style={{ marginRight: '8px' }}>
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                )}

                <Divider type="vertical" variant="solid" />

                {post.post_categories.length > 0 && (
                  <div className="flex items-center">
                    <Icon icon="mdi:category" width="16px" height="16px" />
                    {post.post_categories.map((category) => (
                      <span key={category.id} style={{ marginRight: '8px' }}>
                        {category.name}
                      </span>
                    ))}
                  </div>
                )}
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
