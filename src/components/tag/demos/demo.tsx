import React,{useState} from "react";
import { Tag,Space,AuntIconMeh,AuntIconPlus, TagType } from 'aunt';
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoClose from './demo-close';
import DemoColor from './demo-color';
import DemoIcon from './demo-icon';
import DemoShape from './demo-shape';
import DemoSize from './demo-size';
import DemoType from './demo-type';
import './index.less';

function Demo (){

  

    return <div className="demo-tag">
        <DemoBlock title="基础用法">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="标签类型">
            <DemoType />
        </DemoBlock>
        <DemoBlock title="标签形状">
            <DemoShape />
        </DemoBlock>
        <DemoBlock title="标签样式">
            <DemoColor />
        </DemoBlock>
        <DemoBlock title="标签尺寸">
            <DemoSize />
        </DemoBlock>
        <DemoBlock title="标签图标">
            <DemoIcon />
        </DemoBlock>
        <DemoBlock title="关闭按钮">
            <DemoClose />
        </DemoBlock>
    </div>;
}

export default Demo;