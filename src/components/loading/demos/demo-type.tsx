import React from "react";
import { Loading } from 'aunt';
import './index.less';

export default () => {
    return <div className="demo-loading">
        <div className="demo-loading-content">
            <div className="demo-loading-card">
                <Loading type="rings" />
            </div>
            <div className="demo-loading-card">
                <Loading type="oval" />
            </div>
            <div className="demo-loading-card">
                <Loading type="ball" />
            </div>
        </div>
    </div>;
};