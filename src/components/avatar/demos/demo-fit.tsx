import React from "react";
import { Avatar, Space } from 'aunt';

export default () =>(
    <Space wrap>
        <Avatar fit="contain" url="https://img.iwave.net.cn/qm/1635a93f517fba721a8c460bdab64bc3.jpeg"></Avatar>
        <Avatar fit="cover" url="https://img.iwave.net.cn/qm/1635a93f517fba721a8c460bdab64bc3.jpeg"></Avatar>
        <Avatar fit="fill" url="https://img.iwave.net.cn/qm/1635a93f517fba721a8c460bdab64bc3.jpeg"></Avatar>
        <Avatar fit="none" url="https://img.iwave.net.cn/qm/1635a93f517fba721a8c460bdab64bc3.jpeg"></Avatar>
        <Avatar fit="scale-down" url="https://img.iwave.net.cn/qm/1635a93f517fba721a8c460bdab64bc3.jpeg"></Avatar>
    </Space>
);