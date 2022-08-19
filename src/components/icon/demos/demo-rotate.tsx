import React from "react";
import { AuntIconAlertOctagon, AuntIconFileMinus } from 'aunt';
import './index.less';

export default ()=>(
    <div className="demo-icon">
        <div className="demo-icon-card" style={{width:60,height:60}}>
            <AuntIconAlertOctagon rotate={20} />
        </div>
        <div className="demo-icon-card" style={{width:60,height:60}}>
            <AuntIconFileMinus rotate={60} />
        </div>
    </div>
);