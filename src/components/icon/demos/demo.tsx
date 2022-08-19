import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoColor from './demo-color';
import DemoSpin from './demo-spin';
import DemoRotate from './demo-rotate';

import './index.less';

function Demo (){
    return <div className="demo-icon">
        <DemoBlock title="基础使用">
            <DemoBase /> 
        </DemoBlock>
        <DemoBlock title="图标颜色">
            <DemoColor />
        </DemoBlock>

        <DemoBlock title="图标旋转">
            <DemoSpin />
        </DemoBlock>

        <DemoBlock title="图标旋转角度">
            <DemoRotate />
        </DemoBlock>
    </div>;
}

export default Demo;