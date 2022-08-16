import React from "react";
import { Button } from 'aunt';
import './index.less';

export default ()=> (
    <div className="demo-button">
        <Button plain>朴素按钮</Button>
        <Button plain type="primary">主要按钮</Button>
        <Button plain type="success">成功按钮</Button>
        <Button plain type="warning">警告按钮</Button>
        <Button plain type="danger">危险按钮</Button>
    </div>
);