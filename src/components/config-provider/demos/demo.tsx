import React from "react";
import { DemoBlock } from 'demos';
import DemoTheme from './demo-theme';

function Demo (){
    return  <div className="demo-config-provider">
        <DemoBlock title="自定义变量">
            <DemoTheme />
        </DemoBlock>
    </div>;
}

export default Demo;