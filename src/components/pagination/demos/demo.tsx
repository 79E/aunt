import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoIcon from './demo-icon';
import DemoCenter from './demo-center';
import DemoCustom from './demo-custom';
import './index.less';

function Demo (){
    return <div className="demo">
        <DemoBlock title="基础用法" >
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="展示图标" >
            <DemoIcon />
        </DemoBlock>
        <DemoBlock title="居中显示" >
            <DemoCenter />
        </DemoBlock>
        <DemoBlock title="自定义分页器" >
            <DemoCustom />
        </DemoBlock>
    </div>;
}

export default Demo;