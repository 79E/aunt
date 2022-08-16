import React from "react";
import { Button } from 'aunt';
import './index.less';

export default ()=> (
    <div className="demo-button">
        <Button plain type="primary" hairline>主要按钮</Button>
        <Button plain type="success" hairline>成功按钮</Button>
        <Button plain type="danger" hairline>危险按钮</Button>
    </div>
);