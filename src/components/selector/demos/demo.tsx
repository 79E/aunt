import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoMultiple from './demo-multiple';
import DemoLayout from './demo-layout';
import DemoDisabled from './demo-disabled';
import DemoDesc from './demo-desc';
import DemoMark from './demo-mark';
import './index.less';

function Demo (){
    return <div className="demo">
        <DemoBlock  title="基础用法">
            <DemoBase />
        </DemoBlock>
        <DemoBlock  title="开启多选">
            <DemoMultiple />
        </DemoBlock>
        <DemoBlock  title="设置布局">
            <DemoLayout />
        </DemoBlock>
        <DemoBlock  title="禁用状态">
            <DemoDisabled />
        </DemoBlock>
        <DemoBlock  title="描述信息">
            <DemoDesc />
        </DemoBlock>
        <DemoBlock  title="自定义标记">
            <DemoMark />
        </DemoBlock>
    </div>;
}

export default Demo;