import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoChildren from './demo-children';
import './index.less';

function Demo (){
    return <div className="demo">
        <DemoBlock title="基本用法">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="自定义内容">
            <DemoChildren />
        </DemoBlock>
    </div>;
}

export default Demo;