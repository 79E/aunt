import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoBadge from './demo-badge';
import DemoIcon from './demo-icon';
import DemoTitle from './demo-title';
import DemoColor from './demo-color';
import DemoCustom from './demo-custom';
import DemoFixed from './demo-fixed';
import './index.less';

function Demo (){
    return <div className="demo" style={{
        background:'#f7f8fa'
    }}>
        <DemoBlock title="基本用法" padding="0">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="徽标" padding="0">
            <DemoBadge />
        </DemoBlock>
        <DemoBlock title="仅图标" padding="0">
            <DemoIcon />
        </DemoBlock>
        <DemoBlock title="仅标题" padding="0">
            <DemoTitle />
        </DemoBlock>
        <DemoBlock title="自定义颜色" padding="0">
            <DemoColor />
        </DemoBlock>
        <DemoBlock title="自定义内容" padding="0">
            <DemoCustom />
        </DemoBlock>
        <DemoBlock title="底部固定" padding="0">
            <DemoFixed />
        </DemoBlock>
    </div>;
}

export default Demo;