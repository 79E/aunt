import React from "react";
import { Button } from 'aunt';
import './index.less';

export default ()=> (
    <div className="demo-button">
        <Button type="primary" loading>加载状态</Button>
        <Button loading type="success" loadingText="加载中..." >加载状态</Button>
    </div>
);