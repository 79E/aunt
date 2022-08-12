import React from "react";
import { DemoBlock } from 'demos';
import Base from './demo-base';
import Gutter from './demo-gutter';
import Direction from './demo-direction';

export default () => {
    return <>
        <DemoBlock title="基础用法" padding="0">
            <Base />
        </DemoBlock>
        <DemoBlock title="区域间隔" padding="0">
            <Gutter />
        </DemoBlock>

        <DemoBlock title="方向用法" padding="0">
            <Direction />
        </DemoBlock>
    </>;
};