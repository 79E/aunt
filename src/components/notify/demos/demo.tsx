import React from 'react';
import { Notify } from 'aunt';
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoType from './demo-type';
import DemoCustom from './demo-custom';
import DemoComponents from './demo-components';
import './index.less';

function Demo() {
  return (
    <div className='demo'>
      <DemoBlock title='基础用法'>
        <DemoBase />
      </DemoBlock>
      <DemoBlock title='通知类型'>
        <DemoType />
      </DemoBlock>
      <DemoBlock title='自定义通知'>
        <DemoCustom />
      </DemoBlock>
      <DemoBlock title='组件调用'>
        <DemoComponents />
      </DemoBlock>
    </div>
  );
}

export default Demo;
