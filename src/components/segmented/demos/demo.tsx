import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoDisabled from './demo-disabled';
import DemoSize from './demo-size';
import DemoColor from './demo-color';
import DemoChildren from './demo-children';
import DemoChange from './demo-change';
import './index.less';

function Demo (){
    return <div className="demo">
        <DemoBlock title="基础用法">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="禁用模式">
            <DemoDisabled />
        </DemoBlock>
        <DemoBlock title="组件尺寸">
            <DemoSize />
        </DemoBlock>
        <DemoBlock title="自定义颜色">
            <DemoColor />
        </DemoBlock>
        <DemoBlock title="自定义内容">
            <DemoChildren />
        </DemoBlock>
        <DemoBlock title="受控模式">
            <DemoChange />
        </DemoBlock>
    </div>;
}

export default Demo;