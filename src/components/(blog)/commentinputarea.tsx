"use client";
import { useState } from "react";

import {
    Input
} from "antd";
import "@ant-design/v5-patch-for-react-19";
import { Icon } from "@iconify/react";

const { TextArea } = Input;

export default function CommentInputArea() {
    const [value, setValue] = useState("");

    return (
        <>
            <TextArea
                allowClear
                autoSize={{ minRows: 6 }}
                maxLength={10000}
                onChange={(e) => setValue(e.target.value)}
                placeholder="欢迎留下宝贵的建议啦~"
                // showCount
                // size="large"
                value={value}
                variant="borderless"
            />
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <Icon icon="ri:emotion-line" width="20" height="20" />
                    <Icon icon="fa-regular:image" width="20" height="20" />
                </div>
                <div className="text-slate-500 text-sm">{value.length}/10000</div>
            </div>
        </>
    )
}
