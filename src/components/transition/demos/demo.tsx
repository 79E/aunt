import React from "react";
import { DemoBlock } from 'demos';
import DemoBase from './demo-base';
import './index.less';

function Demo (){
    return <div className="demo-transition">
        <DemoBlock title="动画使用">
            <DemoBase />
        </DemoBlock>
    </div>;
}

export default Demo;