import React from "react";
import { Button } from 'aunt';
import './index.less';

export default ()=> (
    <div className="demo-button">
        <Button size="large" type="primary">大号按钮</Button>
        <Button type="primary">普通按钮</Button>
        <Button size="small" type="success">小号按钮</Button>
        <Button size="mini" type="warning">迷你按钮</Button>
    </div>
);