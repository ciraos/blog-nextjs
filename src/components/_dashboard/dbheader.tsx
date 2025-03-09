import Link from "next/link";

import { Breadcrumb } from "antd"
import "@ant-design/v5-patch-for-react-19";

/* const menuItems = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="categories/">General</a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Layout</a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Navigation</a>
        ),
    },
]; */

export default function Dbheader() {
    return (
        <>
            <div className="db-header h-16 px-5 bg-white shadow-sm hover:shadow-md content-center">
                <Breadcrumb
                    items={[
                        { title: <Link href='/dashboard'>仪表盘</Link> },
                        {
                            title: <Link href='/article'>文章</Link>,
                            // menu: { items: menuItems }
                        },
                        { title: <Link href="/bb">说说</Link> },
                        // { title: <Link href="/"></Link> },
                    ]}
                />
            </div>
        </>
    )
}
