import React from "react";
import { Button } from 'aunt';
import './index.less';

export default ()=> (
    <div className="demo-button">
        <Button disabled type="primary">禁用按钮</Button>
        <Button plain disabled type="success">禁用按钮</Button>
        <Button plain disabled type="warning">禁用按钮</Button>
    </div>
);