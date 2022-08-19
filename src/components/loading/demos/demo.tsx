import React from "react";
import { Loading } from 'aunt';
import { DemoBlock } from 'demos';
import DemoType from './demo-type';
import DemoColor from './demo-color';
import DemoSize from './demo-size';
import DemoText from './demo-text';
import DemoTextColor from './demo-textColor';
import DemoTextSize from './demo-textSize';
import DemoVertical from './demo-vertical';
import './index.less';


function Demo (){
    return <div className="demo-loading">
        <DemoBlock title="加载类型">
            <DemoType />
        </DemoBlock>
        <DemoBlock title="自定义颜色">
            <DemoColor />
        </DemoBlock>
        <DemoBlock title="自定义大小">
            <DemoSize />
        </DemoBlock>
        <DemoBlock title="加载文案">
            <DemoText />
        </DemoBlock>

        <DemoBlock title="垂直排列">
            <DemoVertical />
        </DemoBlock>

        <DemoBlock title="自定义文本颜色">
            <DemoTextColor />
        </DemoBlock>

        <DemoBlock title="自定义文本大小">
            <DemoTextSize />
        </DemoBlock>
    </div>;
}

export default Demo;