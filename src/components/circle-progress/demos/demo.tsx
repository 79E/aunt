import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoColor from './demo-color';
import DemoSize from './demo-size';
import DemoChildren from './demo-children';
import './index.less';

function Demo (){
    return <div className="demo">
        <DemoBlock title="基础用法">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="自定义颜色">
            <DemoColor />
        </DemoBlock>
        <DemoBlock title="自定义大小">
            <DemoSize />
        </DemoBlock>
        <DemoBlock title="自定义内容">
            <DemoChildren />
        </DemoBlock>
        
    </div>;
}

export default Demo;