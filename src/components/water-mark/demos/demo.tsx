import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';

function Demo (){
    return <div className="demo">
        <DemoBlock title="综合用法">
            <DemoBase />
        </DemoBlock>
    </div>;
}

export default Demo;