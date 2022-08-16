import React from "react";
import { DemoBlock } from 'demos';
import DemoType from './demo-type';
import DemoPlain from './demo-plain';
import DemoHairline from './demo-hairline';
import DemoIcon from './demo-icon';
import DemoDisabled from './demo-disabled';
import DemoLoading from './demo-loading';
import DemoShape from './demo-shape';
import DemoSize from './demo-size';
import DemoButtonBlock from './demo-block';
import DemoColor from './demo-color';

import './index.less';

function Demo (){
    return <div className="demo-button">
        <DemoBlock title="按钮类型">
            <DemoType />
        </DemoBlock>

        <DemoBlock title="按钮类型">
            <DemoPlain />
        </DemoBlock>

        <DemoBlock title="细边按钮">
            <DemoHairline />
        </DemoBlock>

        <DemoBlock title="图标按钮">
            <DemoIcon />
        </DemoBlock>

        <DemoBlock title="禁用状态">
            <DemoDisabled />
        </DemoBlock>

        <DemoBlock title="加载状态">
            <DemoLoading />
        </DemoBlock>

        <DemoBlock title="按钮形状">
            <DemoShape />
        </DemoBlock>
        
        <DemoBlock title="按钮尺寸">
            <DemoSize />
        </DemoBlock>

        <DemoBlock title="块级按钮">
            <DemoButtonBlock />
        </DemoBlock>

        <DemoBlock title="按钮颜色">
            <DemoColor />
        </DemoBlock>
        
    </div>;
}

export default Demo;