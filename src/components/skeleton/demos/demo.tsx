import React from "react";
import { Skeleton } from 'aunt';
import { DemoBlock } from 'demos';
import './index.less';

function Demo (){
    return <div className="demo">
        <Skeleton avatar title loading></Skeleton>
    </div>; 
}

export default Demo;