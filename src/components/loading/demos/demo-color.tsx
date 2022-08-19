import React from "react";
import { Loading } from 'aunt';
import './index.less';

export default () => {
    return <div className="demo-loading">
        <div className="demo-loading-content">
            <div className="demo-loading-card">
                <Loading color="#3f45ff"  />
            </div>
            <div className="demo-loading-card">
                <Loading type="ball" color="#3f45ff" />
            </div>
        </div>
    </div>;
};