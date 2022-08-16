import React from "react";
import { Badge, Space, AuntIconBox } from 'aunt';

export default () =>(
    <Space gap={30}>
        <Badge content={52}></Badge>
        <Badge content="Aunt" ></Badge>
        <Badge content={<AuntIconBox size={14}/>}></Badge>
        <Badge dot ></Badge>
    </Space>
);
