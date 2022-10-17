import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import './index.less';

function Demo (){
    return <div className="demo">
        <DemoBlock title="基础用法">
            <DemoBase />
        </DemoBlock>
    </div>;
}

export default Demo;