import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoGutter from './demo-gutter';
import DemoDirection from './demo-direction';

export default () => {
    return <>
        <DemoBlock title="基础用法" padding="0">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="区域间隔" padding="0">
            <DemoGutter />
        </DemoBlock>
        <DemoBlock title="方向用法" padding="0">
            <DemoDirection />
        </DemoBlock>
    </>;
};