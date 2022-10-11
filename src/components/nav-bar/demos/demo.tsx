import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoStyle from './demo-style';
import DemoContent from './demo-content';
import DemoStatus from './demo-status';
import './index.less';

function Demo (){
    return <div className="demo">
        <DemoBlock title="基础用法" padding="0px">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="自定义样式" padding="0px">
            <DemoStyle />
        </DemoBlock>
        <DemoBlock title="自定义内容" padding="0px">
            <DemoContent />
        </DemoBlock>
        <DemoBlock title="沉浸式导航" padding="0px">
            <DemoStatus />
        </DemoBlock>
    </div>;
}

export default Demo;