import React from "react";
import { Loading } from 'aunt';
import './index.less';

export default () => {
    return <div className="demo-loading">
        <div className="demo-loading-content">      
            <div className="demo-loading-card">
                <Loading vertical textSize='22'>加载中...</Loading>
            </div>
            <div className="demo-loading-card">
                <Loading vertical textColor="#3f45ff" textSize='10px'>加载中...</Loading>
            </div>
        </div>
    </div>;
};