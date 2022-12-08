import React from 'react';
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoIcon from './demo-icon';
import DemoDirection from './demo-direction';
import DemoPosition from './demo-position';
import './index.less';

function Demo() {
  return (
    <div className='demo'>
      <DemoBlock title='基础用法'>
        <DemoBase />
      </DemoBlock>
      <DemoBlock title='自定义图标'>
        <DemoIcon />
      </DemoBlock>
      <DemoBlock title='横向排布'>
        <DemoDirection />
      </DemoBlock>
      <DemoBlock title='自定义位置'>
        <DemoPosition />
      </DemoBlock>
    </div>
  );
}

export default Demo;
