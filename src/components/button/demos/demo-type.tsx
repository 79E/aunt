import React from "react";
import { Button } from 'aunt';
import './index.less';

export default ()=> (
    <div className="demo-button">
        <Button>默认按钮</Button>
        <Button type="primary" >主要按钮</Button>
        <Button type="success" >成功按钮</Button>
        <Button type="warning" >警告按钮</Button>
        <Button type="danger">危险按钮</Button>
    </div>
);