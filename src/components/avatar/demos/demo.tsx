import React from "react";
import { DemoBlock } from 'demos';
import DemoColor from './demo-color';
import DemoFit from './demo-fit';
import DemoShape from './demo-shape';
import DemoSize from './demo-size';
import DemoType from './demo-type';
import './index.less';

function Demo (){
    return <div className="demo-avatar">
        <DemoBlock title="头像尺寸">
            <DemoSize />
        </DemoBlock>
        <DemoBlock title="头像形状" >
           <DemoShape />
        </DemoBlock>
        <DemoBlock title="头像类型" >
            <DemoType />
        </DemoBlock>
        <DemoBlock title="图片填充模式" >
            <DemoFit />
        </DemoBlock>
        <DemoBlock title="颜色" >
            <DemoColor />
        </DemoBlock>
    </div>;
}

export default Demo;