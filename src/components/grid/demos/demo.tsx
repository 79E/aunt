import React from "react";
import { Grid } from 'aunt';
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoColumn from './demo-column';
import DemoGap from './demo-gap';
import DemoItemColumn from './demo-item-column';
import DemoRow from './demo-row';
import './index.less';

function Demo (){
    return <div className="demo-grid">

        <DemoBlock title="基础用法" padding="0">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="间隔用法" padding="0">
            <DemoGap />
        </DemoBlock>
        <DemoBlock title="列数用法" padding="0">
            <DemoColumn />
        </DemoBlock>
        <DemoBlock title="行数用法" padding="0">
            <DemoRow />
        </DemoBlock>
        <DemoBlock title="列跨度" padding="0">
            <DemoItemColumn />
        </DemoBlock>
    </div>;
}

export default Demo;