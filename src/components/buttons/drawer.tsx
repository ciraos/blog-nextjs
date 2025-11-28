"use client";
import { useState } from "react";
import {
    Drawer,
    Tooltip
} from "antd";
import {
    MenuOutlined
} from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";

export default function DrawerButton() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Tooltip
                title="菜单"
            >
                <MenuOutlined
                    className="menu-btn"
                    onClick={showDrawer}
                    style={{ fontSize: 21 }}
                />
            </Tooltip>

            <Drawer
                autoFocus
                closable={{ 'aria-label': '关闭' }}
                destroyOnHidden
                // footer={null}
                mask
                maskClosable
                loading={false}
                onClose={onClose}
                open={open}
                size="default"
                title="这是一个可爱的菜单喵~"
            >
            </Drawer>
        </>
    )
}
