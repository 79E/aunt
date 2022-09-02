import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoAvatar from './demo-avatar';
import DemoTitle from './demo-title';
import DemoRowHeight from './demo-row-height';
import DemoChildren from './demo-children';

import './index.less';

function Demo (){
    return <div className="demo">
        <DemoBlock title="基础用法">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="显示标题">
            <DemoTitle />
        </DemoBlock>
        <DemoBlock title="显示头像">
            <DemoAvatar />
        </DemoBlock>
        <DemoBlock title="自定义高度">
            <DemoRowHeight />
        </DemoBlock>
        <DemoBlock title="展示子组件">
            <DemoChildren />
        </DemoBlock>
    </div>; 
}

export default Demo;