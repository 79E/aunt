import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoDisabled from './demo-disabled';
import DemoCustom from './demo-custom';
import DemoGroup from './demo-group';
import DemoHorizontal from './demo-horizontal';
import './index.less';

function Demo (){
    return <div className="demo">
        <DemoBlock title="基础用法" >
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="禁用状态" >
            <DemoDisabled />
        </DemoBlock>
        <DemoBlock title="自定义" >
            <DemoCustom />
        </DemoBlock>
        <DemoBlock title="复选框组" >
            <DemoGroup />
        </DemoBlock>
        <DemoBlock title="水平排列" >
            <DemoHorizontal />
        </DemoBlock>
        
    </div>;
}

export default Demo;