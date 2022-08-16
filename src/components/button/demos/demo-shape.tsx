import React from "react";
import { Button } from 'aunt';
import './index.less';

export default ()=> (
    <div className="demo-button">
        <Button shape="default" type="primary">圆角按钮</Button>
        <Button shape="square" type="success">方形按钮</Button>
        <Button shape="round" type="danger">圆形按钮</Button>
    </div>
);