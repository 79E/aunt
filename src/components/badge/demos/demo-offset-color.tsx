import React from "react";
import { Badge, Space } from 'aunt';
import './index.less';

export default () =>(
    <Space gap={30}>
        <Badge color="#27C346" dot offset={[0,0]}>
            <div className="demo-badge-card"></div>
        </Badge>
        <Badge color="#FF7D00" dot offset={[0,'100%']}>
            <div className="demo-badge-card"></div>
        </Badge>
        <Badge color="#3491FA" dot offset={['100%',0]}>
            <div className="demo-badge-card"></div>
        </Badge>
        <Badge color="#722ED1" dot offset={['100%','100%']}>
            <div className="demo-badge-card"></div>
        </Badge>
    </Space>
);
