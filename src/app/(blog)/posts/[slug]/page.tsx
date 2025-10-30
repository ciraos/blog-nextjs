import { MDXRemote } from "next-mdx-remote/rsc";
import {
    Divider,
    Typography
} from "antd";
import "@ant-design/v5-patch-for-react-19";
import { Icon } from "@iconify/react";
import moment from "moment";

export default async function Post() {
    return (
        <>
            <div className="post-container">

                <div className="post-header h-45 py-3 px-7 rounded-xl bg-white shadow-xl hover:shadow-md">
                    <div className="text-2xl"></div>
                    <div className="mt-3 flex items-center text-sm">
                        <span className="flex"><Icon icon="icon-park-outline:time" width={18} height={18} className="mr-1" />
                            <span className="mr-1">创建于</span>
                            {/* {moment(post.meta?.created).format('YYYY-MM-DD, h:mm:ss')} */}
                        </span>
                        <Divider type="vertical" variant="solid" />
                        <span className="flex"><Icon icon="icon-park-outline:time" width={18} height={18} className="mr-1" />
                            <span className="mr-1">更新于</span>
                            {/* {moment(post.meta?.updated).format('YYYY-MM-DD, h:mm:ss')} */}
                        </span>
                    </div>
                    <div>tags · categories</div>
                    <div>descriptions</div>
                </div>

                <Typography
                    className="post-content my-5 bg-none"
                >
                    {/* <MDXRemote source={post.content} components={{}} options={{}} /> */}
                </Typography>

                <div className="post-footer py-3 px-7 rounded-xl bg-slate-100 shadow-sm hover:shadow-md"></div>

            </div>
        </>
    );
}
