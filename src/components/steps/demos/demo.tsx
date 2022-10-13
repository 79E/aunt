import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoTitle from './demo-title';
import DemoDescription from './demo-description';
import DemoColor from './demo-color';
import DemoIcon from './demo-icon';
import DemoDirection from './demo-direction';
import DemoContent from './demo-content';
import './index.less';

function Demo (){
    return <div className="demo">
        <DemoBlock title="基础用法">
          <DemoBase />
        </DemoBlock>
        <DemoBlock title="展示标题">
          <DemoTitle />
        </DemoBlock>
        <DemoBlock title="展示描述">
          <DemoDescription />
        </DemoBlock>
        <DemoBlock title="自定义颜色">
          <DemoColor />
        </DemoBlock>
        <DemoBlock title="自定义图标">
          <DemoIcon />
        </DemoBlock>
        <DemoBlock title="竖向步骤条">
          <DemoDirection />
        </DemoBlock>
        <DemoBlock title="自定义内容">
            <DemoContent />
        </DemoBlock>
    </div>;
}

export default Demo;