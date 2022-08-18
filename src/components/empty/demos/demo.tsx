import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoChildren from './demo-children';
import DemoType from './demo-type';
import DemoImage from './demo-image';
import './index.less';

function Demo (){
    return <div className="demo-empty">
        <DemoBlock title="基础使用">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="图片类型">
            <DemoType />
        </DemoBlock>
        <DemoBlock title="自定义图片">
            <DemoImage />
        </DemoBlock>
        <DemoBlock title="底部内容">
            <DemoChildren />
        </DemoBlock>
    </div>;
}

export default Demo;