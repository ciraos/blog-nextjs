/*
 * @description: 评论系统
 * @ server component
*/
import {
    Badge,
    Button,
    Input,
    Tooltip
} from "antd";
import { Icon } from "@iconify/react";
import CommentInputArea from "./commentinputarea";
import { CommentResponse } from "@/types/comments";

interface CommentProps {
    id: string;
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function Comment({ id }: CommentProps) {
    const commentCount = 0;
    try {
        const g = await fetch(`${baseUrl}/public/comments?target_path=/posts/${id}`);
        const res = await g.json() as CommentResponse;
        const commentCount = res.data.total_with_children;
        // const content = res.data.list.map;
        // console.log(res);
        // console.log(content);
        // console.log('本页连同回复一共有' + commentCount + '条评论。');
    } catch (error) {
        console.error("加载评论错误:", error);
    }

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

                <div
                    className="textarea-wrapper mt-1 py-3 px-6 bg-[#F1F3F8] rounded-xl shadow-xs hover:shadow-sm"
                    style={{ border: "1px solid #E5E7EB" }}
                >
                    <CommentInputArea />
                </div>

                <div className="comment-footer w-full mt-3.5 flex gap-4">
                    <div className="comment-footer-btns w-[calc(100%-112px)] flex gap-1.5">
                        <Tooltip arrow title="输入QQ号会自动获取昵称和头像">
                            <Input prefix="昵称" placeholder="必填" />
                        </Tooltip>
                        <Tooltip arrow title="收到回复会自动发送到你的邮箱">
                            <Input prefix="邮箱" placeholder="必填" />
                        </Tooltip>
                        <Input prefix="网址" placeholder="选填" />
                    </div>
                    <Button className="comment-footer-submit w-28" type="primary">发送</Button>
                </div>

                <div>

                </div>

            </div>
        </>
    );
}
