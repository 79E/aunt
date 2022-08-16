import React from "react";
import { Badge, Space } from 'aunt';
import './index.less';

export default () =>(
    <Space gap={30}>
        <Badge content={99} >
            <div className="demo-badge-card"></div>
        </Badge>
        <Badge content={100} >
            <div className="demo-badge-card"></div>
        </Badge>
        <Badge content={60} maxCount={50} >
            <div className="demo-badge-card"></div>
        </Badge>
    </Space>
);
