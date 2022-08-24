import React, { useState } from "react";
import { Progress ,Button} from 'aunt';
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoShowPercent from './demo-showPercent';
import DemoPercentPosition from './demo-percentPosition';
import DemoStroke from './demo-stroke';
import DemoFilleted from './demo-filleted';
import DemoColor from './demo-color';
import DemoRenderPercent from './demo-renderPercent';

import './index.less';

function Demo (){
    return <div className="demo">
        <DemoBlock title="基础用法">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="不显示百分比文字">
            <DemoShowPercent />
        </DemoBlock>
        <DemoBlock title="文字显示位置">
            <DemoPercentPosition />
        </DemoBlock>
        <DemoBlock title="自定义圆角">
            <DemoFilleted />
        </DemoBlock>
        <DemoBlock title="自定义大小">
            <DemoStroke />
        </DemoBlock>
        <DemoBlock title="自定义颜色">
            <DemoColor />
        </DemoBlock>
        <DemoBlock title="自定义文字样式">
            <DemoRenderPercent />
        </DemoBlock>
        
    </div>;
}

export default Demo;