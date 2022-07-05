import React from "react";
import {AuntIconActivity,AuntIconAlertOctagon,AuntIconLoader,AuntIconFileMinus} from 'aunt'
import { DemoBlock } from 'demos'
import './index.less'

function Demo (){
    return <div className="demo-icon">
        <DemoBlock title="基础使用">
            <div className="demo-icon-card" style={{width:60,height:60}}>
                <AuntIconActivity /> 
            </div>
        </DemoBlock>
        <DemoBlock title="图标颜色">
            <div className="demo-icon-card" style={{width:60,height:60}}>
                <AuntIconActivity color="#f44336" />
            </div>
            <div className="demo-icon-card" style={{width:60,height:60}}>
                <AuntIconActivity color="#3f45ff" />
            </div>
        </DemoBlock>

        <DemoBlock title="图标旋转">
            <div className="demo-icon-card" style={{width:60,height:60}}>
                <AuntIconLoader spin />
            </div>
            <div className="demo-icon-card" style={{width:60,height:60}}>
                <AuntIconFileMinus spin />
            </div>
        </DemoBlock>

        <DemoBlock title="图标旋转角度">
            <div className="demo-icon-card" style={{width:60,height:60}}>
                <AuntIconAlertOctagon rotate={20} />
            </div>
            <div className="demo-icon-card" style={{width:60,height:60}}>
                <AuntIconFileMinus rotate={60} />
            </div>
        </DemoBlock>
    </div>
}

export default Demo