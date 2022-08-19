import React from "react";
import { Loading } from 'aunt';
import './index.less';

export default () => {
    return <div className="demo-loading">
        <div className="demo-loading-content">
            <div className="demo-loading-card">
                <Loading size="50"  />
            </div>
            <div className="demo-loading-card">
                <Loading type="ball" size="24px" />
            </div>
        </div>
    </div>;
};