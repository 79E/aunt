import React from "react";
import { Rate } from 'aunt';
import { DemoBlock } from 'demos';
import './index.less';

function Demo (){
    return <div className="demo">
      <DemoBlock title="基础用法">
        <Rate defaultValue={2} />
      </DemoBlock>
      <DemoBlock title="自定义图标">

      </DemoBlock>
      <DemoBlock title="自定义颜色">

      </DemoBlock>
      <DemoBlock title="禁用状态和展示状态">

      </DemoBlock>
      <DemoBlock title="半星展示">

      </DemoBlock>
      <DemoBlock title="自定义数量">

      </DemoBlock>
      <DemoBlock title="清除数量">

      </DemoBlock>
    </div>;
}

export default Demo;