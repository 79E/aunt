import React from "react";
import { CountDown } from 'aunt'
import { DemoBlock } from 'demos'
import './index.less'

function Demo (){
    return <div className="demo">
        <CountDown time={99999} />
    </div>
}

export default Demo