import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import DemoFit from './demo-fit';
import DemoError from './demo-error';
import DemoRound from './demo-round';
import DemoLoading from './demo-loading';

import './index.less';

function Demo (){

    return <div className="demo-image">
        <DemoBlock title="基础用法">
            <DemoBase />
        </DemoBlock>
        <DemoBlock title="填充模式">
            <DemoFit />
        </DemoBlock>

        <DemoBlock title="圆形图片">
            <DemoRound />
        </DemoBlock>

        <DemoBlock title="加载中提示">
            <DemoLoading />
        </DemoBlock>

        <DemoBlock title="加载失败提示">
            <DemoError />
        </DemoBlock>
                    
    </div>;
}

export default Demo;