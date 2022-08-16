import React from "react";
import { Avatar, Space, AuntIconMeh } from 'aunt';

export default () =>(
    <Space wrap>
        <Avatar icon={<AuntIconMeh />} background="#FF7D00" color="#fff"></Avatar>
        <Avatar color="#165DFF">文</Avatar>
    </Space>
);