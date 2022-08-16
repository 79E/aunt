import React from "react";
import { Badge, Space } from 'aunt';
import './index.less';

export default () =>(
    <Space gap={30}>
        <Badge dot>
            <div className="demo-badge-card"></div>
        </Badge>
    </Space>
);
