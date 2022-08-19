import React from "react";
import { AuntIconActivity } from 'aunt';
import './index.less';

export default ()=>(
    <div className="demo-icon">
        <div className="demo-icon-card" style={{ width:60, height:60 }}>
            <AuntIconActivity color="#f44336" />
        </div>
        <div className="demo-icon-card" style={{ width:60, height:60 }}>
            <AuntIconActivity color="#3f45ff" />
        </div>
    </div>
);