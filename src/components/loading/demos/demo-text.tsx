import React from "react";
import { Loading } from 'aunt';
import './index.less';

export default () => {
    return <div className="demo-loading">
        <div className="demo-loading-content">
            <div className="demo-loading-card">
                <Loading>加载中...</Loading>
            </div>
        </div>
    </div>;
};