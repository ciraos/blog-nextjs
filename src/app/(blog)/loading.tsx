import {
    Spin
} from "antd";
import "@ant-design/v5-patch-for-react-19";

export default function Loading() {
    return (
        <>
            <Spin
                fullscreen
                percent="auto"
                size="large"
                tip="正在加载中..."
            />
        </>
    );
}
