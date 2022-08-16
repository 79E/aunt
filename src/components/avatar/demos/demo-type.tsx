import React from "react";
import { Avatar, Space, AuntIconMeh } from 'aunt';

export default () =>(
    <Space wrap>
        <Avatar></Avatar>
        <Avatar icon={<AuntIconMeh />}></Avatar>
        <Avatar>头</Avatar>
        <Avatar url="https://img.iwave.net.cn/qm/a2e0b87a04da3c7818a0fe3fa1700991.png"></Avatar>
    </Space>
);