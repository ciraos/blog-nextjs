"use client";
import { useState } from "react";

import {
    Input,
    Modal,
    Tooltip
} from "antd";
// import type { GetProps } from "antd";
import {
    // AudioOutlined,
    SearchOutlined
} from "@ant-design/icons";


export default function SearchButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showMoal = () => { setIsModalOpen(true) };

    const handleOk = () => { setIsModalOpen(false) };

    const handleCancel = () => { setIsModalOpen(false) };

    return (
        <>
            <Tooltip
                title="搜索"
            >
                <SearchOutlined
                    className="p-1 hover:rounded-md hover:bg-blue-400"
                    onClick={showMoal}
                    style={{ fontSize: 24 }}
                />
            </Tooltip>

            <Modal
                cancelText="取消"
                className="shadow-xs hover:shadow-sm"
                closable={{ 'aria-label': '关闭' }}
                destroyOnHidden
                footer={null}
                keyboard
                mask
                maskClosable
                okText="确定"
                onOk={handleOk}
                onCancel={handleCancel}
                open={isModalOpen}
                title="搜索"
            >
                <Input
                    allowClear
                    maxLength={100}
                    placeholder="输入关键字，按 Enter 搜索。"
                    prefix={<SearchOutlined />}
                    showCount
                    size="large"
                />
                <div className="mt-4 text-center">
                    按 Esc 关闭，按 Ctrl/⌘ + K 打开
                </div>

                <div className="search-res h-auto"></div>
            </Modal>
        </>
    )
}
