import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoContentPosition from './demo-contentPosition';
import DemoDashed from './demo-dashed';
import DemoStyle from './demo-style';
import DemoDirection from './demo-direction';
import './index.less';

function Demo (){
    return <div className="demo-divider">
        <DemoBlock title="展示文本">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="内容位置">
            <DemoContentPosition />
        </DemoBlock>
        <DemoBlock title="虚线">
            <DemoDashed />
        </DemoBlock>
        <DemoBlock title="自定义样式">
            <DemoStyle />
        </DemoBlock>
        <DemoBlock title="垂直分割线">
            <DemoDirection />
        </DemoBlock>
    </div>;
}

export default Demo;