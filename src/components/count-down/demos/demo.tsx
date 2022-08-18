import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoRef from './demo-ref';
import DemoFormat from './demo-format';
import DemoChildren from './demo-children';
import DemoMillisecond from './demo-millisecond';
import './index.less';

function Demo (){

    return <div className="demo-count-down">
        <DemoBlock title="基础用法">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="自定义格式">
            <DemoFormat />
        </DemoBlock>
        <DemoBlock title="毫秒级渲染">
            <DemoMillisecond />
        </DemoBlock>
        <DemoBlock title="自定义样式">
            <DemoChildren />
        </DemoBlock>
        <DemoBlock title="手动控制">
            <DemoRef />
        </DemoBlock>
        
    </div>;
}

export default Demo;