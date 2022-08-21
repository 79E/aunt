import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoAsync from './demo-async';
import DemoColor from './demo-color';
import DemoDisabled from './demo-disabled';
import DemoLoading from './demo-loading';
import DemoShape from './demo-shape';
import DemoSize from './demo-size';
import './index.less';

function Demo (){
    return <div className="demo">
        <DemoBlock title="基础用法">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="禁用状态">
            <DemoDisabled />
        </DemoBlock>
        <DemoBlock title="加载状态">
            <DemoLoading />
        </DemoBlock>
        <DemoBlock title="开关形状">
            <DemoShape />
        </DemoBlock>
        <DemoBlock title="自定义大小">
            <DemoSize />
        </DemoBlock>
        <DemoBlock title="自定义颜色">
            <DemoColor />
        </DemoBlock>
        <DemoBlock title="异步控制">
            <DemoAsync />
        </DemoBlock>
    </div>;
}

export default Demo;