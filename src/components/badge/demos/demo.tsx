import React from "react";
import { DemoBlock } from 'demos';
import DemoBadge from './demo-badge';
import DemoBase from './demo-base';
import DemoDot from './demo-dot';
import DemoMaxcount from './demo-maxcount';
import DemoOffsetColor from './demo-offset-color';
import DemoVisible from './demo-visible';

import './index.less';

function Demo (){
    
    return <div className="demo-badge">
        <DemoBlock title="基本用法">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="最大值">
            <DemoMaxcount />
        </DemoBlock>
        <DemoBlock title="圆点样式">
            <DemoDot />
        </DemoBlock>
        <DemoBlock title="自定义颜色和偏移量">
            <DemoOffsetColor />
        </DemoBlock>
        <DemoBlock title="单独使用">
            <DemoBadge />
        </DemoBlock>
        <DemoBlock title="使用动画">
            <DemoVisible />
        </DemoBlock>
    </div>;
}

export default Demo;