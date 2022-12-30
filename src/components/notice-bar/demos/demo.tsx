import React from 'react';
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoIcon from './demo-icon';
import DemoWrapable from './demo-wrapable';
import DemoScrollable from './demo-scrollable';
import DemoColor from './demo-color';
import './index.less';

function Demo() {
  return (
    <div className='demo'>
      <DemoBlock title='基础用法'>
        <DemoBase />
      </DemoBlock>
      <DemoBlock title='自定义icon'>
        <DemoIcon />
      </DemoBlock>
      <DemoBlock title='多行样式'>
        <DemoWrapable />
      </DemoBlock>
      <DemoBlock title='滚动播放'>
        <DemoScrollable />
      </DemoBlock>
      <DemoBlock title='自定义颜色'>
        <DemoColor />
      </DemoBlock>
    </div>
  );
}

export default Demo;
