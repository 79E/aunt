import React from "react";
import { Badge, Space, AuntIconBox } from 'aunt';
import './index.less';

export default () =>(
    <Space gap={30}>
        <Badge content={52} >
            <div className="demo-badge-card"></div>
        </Badge>
        <Badge content="Aunt" >
            <div className="demo-badge-card"></div>
        </Badge>
        <Badge content={<AuntIconBox size={14}/>} >
            <div className="demo-badge-card"></div>
        </Badge>
    </Space>
);
