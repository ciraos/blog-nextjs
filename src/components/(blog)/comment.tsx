"use client";
// import { useState } from "react";
import {
    Button,
    Input,
    Tooltip
} from "antd";
import "@ant-design/v5-patch-for-react-19";
import { Icon } from "@iconify/react";

interface CommentProps {
    id: string;
}

const { TextArea } = Input;

export default function Comment({ id }: CommentProps) {
    // const [value, setValue] = useState("");

    return (
        <>
            <div className="comment-sys h-auto my-5">

                <div className="comment-header flex items-center justify-between">
                    <div className="flex items-center"><Icon icon="iconamoon:comment-fill" width="24" height="24" /><span className="text-[24px] font-extrabold ml-1">评论</span></div>
                    <div>
                        <Tooltip arrow color="cyan" title="点击开启匿名评论模式">
                            <Button type="text">匿名评论</Button>
                        </Tooltip>
                        <Tooltip arrow color="cyan" title="查看评论信息的隐私政策">
                            <Button type="text">隐私政策</Button>
                        </Tooltip>
                    </div>
                </div>

                <div className="textarea-wrapper py-3 px-6 bg-[#F1F3F8] rounded-xl">
                    <TextArea
                        allowClear
                        autoSize={{ minRows: 6 }}
                        maxLength={10000}
                        // onChange={(e) => setValue(e.target.value)}
                        placeholder="欢迎留下宝贵的建议啦~"
                        // showCount
                        // size="large"
                        // value={value}
                        variant="borderless"
                    />
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            <Icon icon="ri:emotion-line" width="20" height="20" />
                            <Icon icon="fa-regular:image" width="20" height="20" />
                        </div>
                        {/* <div className="text-slate-500 text-sm">{value.length}/10000</div> */}
                    </div>
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

            </div>
        </>
    );
}
