'use client';
import { FloatButton } from 'antd';
import "@ant-design/v5-patch-for-react-19";

export default function Rightside() {
  return (
    <>
      <div id="rightside" className="rightside">

        <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
          <FloatButton.BackTop visibilityHeight={1} />
        </FloatButton.Group>

      </div>
    </>
  );
}
