/*
 * server component
*/
import {
    // Avatar,
    Badge,
    Button,
    Input,
    Tooltip
} from "antd";
import "@ant-design/v5-patch-for-react-19";
import { Icon } from "@iconify/react";
import CommentInputArea from "./commentinputarea";
import { CommentResponse, CommentItem } from "@/types/comments";

interface CommentProps {
    id: string;
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function Comment({ id }: CommentProps) {
    let commentCount = 0;
    let commentList: CommentItem[] = [];
    try {
        const res: CommentResponse = await fetch(`${baseUrl}/public/comments?target_path=/posts/${id}`).then((res) => res.json());
        commentCount = res.data?.total_with_children ?? 0;
        commentList = res.data?.list ?? [];
    } catch (error) {
        console.error("加载评论失败", error);
    }
    const commentContent = commentList.map((item: CommentItem) => (
        <div key={item.id}>{item.content_html}</div>
    ));

    return (
        <>
            <div className="comment-sys h-auto my-5">

                <div className="comment-header flex items-center justify-between">
                    <div className="flex items-center">
                        <Icon icon="iconamoon:comment-fill" width="24" height="24" />
                        <Badge
                            color="orange"
                            count={commentCount}
                            offset={[4, 0]}
                        >
                            <span className="text-[24px] font-extrabold ml-1">评论</span>
                        </Badge>
                    </div>
                    <div>
                        <Tooltip arrow color="cyan" title="点击开启匿名评论模式">
                            <Button type="text">匿名评论</Button>
                        </Tooltip>
                        <Tooltip arrow color="cyan" title="查看评论信息的隐私政策">
                            <Button type="text">隐私政策</Button>
                        </Tooltip>
                    </div>
                </div>

                <div className="textarea-wrapper mt-1 py-3 px-6 bg-[#F1F3F8] rounded-xl">
                    <CommentInputArea />
                </div>

                <div className="w-full mt-3.5 flex gap-4">
                    <div className="w-[calc(100%-112px)] flex gap-1.5">
                        <Tooltip arrow title="输入QQ号会自动获取昵称和头像">
                            <Input prefix="昵称" placeholder="必填" />
                        </Tooltip>
                        <Tooltip arrow title="收到回复会自动发送到你的邮箱">
                            <Input prefix="邮箱" placeholder="必填" />
                        </Tooltip>
                        <Input prefix="网址" placeholder="选填" />
                    </div>
                    <Button className="w-28" type="primary">发送</Button>
                </div>

                <div>
                    {/* {commentContent} */}
                </div>

            </div>
        </>
    );
}
