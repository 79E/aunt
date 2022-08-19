import React from "react";
import { AuntIconLoader, AuntIconFileMinus } from 'aunt';
import './index.less';

export default ()=>(
    <div className="demo-icon">
        <div className="demo-icon-card" style={{width:60,height:60}}>
            <AuntIconLoader spin />
        </div>
        <div className="demo-icon-card" style={{width:60,height:60}}>
            <AuntIconFileMinus spin />
        </div>
    </div>
);