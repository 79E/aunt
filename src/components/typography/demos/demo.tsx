import React from "react";
import { Typography } from 'aunt';
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoEllipsis from './demo-ellipsis';
import DemoLevel from './demo-level';
import DemoLink from './demo-link';
import DemoType from './demo-type';
import './index.less';

function Demo (){
    return <div className="demo-typography">
        <DemoBlock title="基础用法">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="文本类型">
            <DemoType />
        </DemoBlock>
        <DemoBlock title="文本省略">
            <DemoEllipsis />
        </DemoBlock>
        <DemoBlock title="标题文本">
            <DemoLevel />
        </DemoBlock>
        <DemoBlock title="文本链接">
            <DemoLink />
        </DemoBlock>
    </div>;
}

export default Demo;