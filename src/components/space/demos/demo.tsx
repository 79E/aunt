import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoDirection from './demo-direction';
import DemoGap from './demo-gap';
import DemoWrap from './demo-wrap';
import './index.less';

function Demo (){
    return <div className="demo-space">
        <DemoBlock title="基础用法">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="垂直间距">
            <DemoDirection />
        </DemoBlock>
        <DemoBlock title="间距大小">
            <DemoGap />
        </DemoBlock>
        <DemoBlock title="自动换行">
            <DemoWrap />
        </DemoBlock>
    </div>;
}

export default Demo;