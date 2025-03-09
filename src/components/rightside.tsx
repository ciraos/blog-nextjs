'use client';
import { FloatButton } from 'antd';

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
