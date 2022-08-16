import React from "react";
import { Button } from 'aunt';
import './index.less';

export default ()=> (
    <div className="demo-button">
        <Button color="#7232dd">单色按钮</Button>
        <Button color="#7232dd" plain>单色按钮</Button>
        <Button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变按钮</Button>
    </div>
);