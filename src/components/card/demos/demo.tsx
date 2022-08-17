import React from "react";
import { Card } from 'aunt';
import { DemoBlock } from 'demos';
import DemoRound from './demo-round';
import DemoCover from './demo-cover';
import DemoCustom from './demo-custom';
import DemoBorder from './demo-border';
import DemoFooter from './demo-footer';
import DemoBase from './demo-base';

import './index.less';

function Demo (){
    return <div className="demo-card">
        <DemoBlock title="基础用法">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="圆角卡片">
            <DemoRound />
        </DemoBlock>
        <DemoBlock title="底部内容">
            <DemoFooter />
        </DemoBlock>
        <DemoBlock title="封面展示">
            <DemoCover />
        </DemoBlock>
        <DemoBlock title="展示边框">
            <DemoBorder />
        </DemoBlock>
        <DemoBlock title="自定义卡片样式">
            <DemoCustom />
        </DemoBlock>
    </div>;
}

export default Demo;