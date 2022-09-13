import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoIcon from './demo-icon';
import DemoColor from './demo-color';
import DemoHalf from './demo-half';
import DemoCount from './demo-count';
import DemoDisabled from './demo-disabled';
import DemoReadonly from './demo-readonly';
import './index.less';

function Demo (){
    return <div className="demo">
      <DemoBlock title="基础用法">
        <DemoBase />
      </DemoBlock>
      <DemoBlock title="自定义图标">
        <DemoIcon />
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <DemoColor />
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <DemoDisabled />
      </DemoBlock>
      <DemoBlock title="展示状态">
        <DemoReadonly />
      </DemoBlock>
      <DemoBlock title="半星展示">
        <DemoHalf />
      </DemoBlock>
      <DemoBlock title="自定义数量">
        <DemoCount />
      </DemoBlock>
    </div>;
}

export default Demo;