import React from 'react';
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoAction from './demo-action';
import DemoStyle from './demo-style';
import DemoResult from './demo-result';
import DemoDialog from './demo-dialog';
import './index.less';

function Demo() {

  return <div className='demo'>
    <DemoBlock title="基础用法">
      {/* 放入组件 */}
      <DemoBase />
    </DemoBlock>
    <DemoBlock title="操作按钮">
      <DemoAction />
    </DemoBlock>
    <DemoBlock title="自定义样式">
      <DemoStyle />
    </DemoBlock>
    <DemoBlock title="获取结果">
      <DemoResult />
    </DemoBlock>
    <DemoBlock title="声明式">  
      <DemoDialog />
    </DemoBlock>
  </div>;
}

export default Demo;
