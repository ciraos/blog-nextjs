import Link from "next/link";
import {
    Image
} from "antd";
import "@ant-design/v5-patch-for-react-19";

export default async function Posts() {

    return (
        <>
            <div className="recent-posts">
                <div className="recent-posts-item shadow-sm"></div>
            </div>
        </>
    );
}
