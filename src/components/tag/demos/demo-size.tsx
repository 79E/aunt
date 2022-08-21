import React from "react";
import { Tag, Space } from 'aunt';

export default ()=>(
    <Space wrap>
        <Tag size="small" type='warning'>标签小</Tag>
        <Tag size="medium" type='primary'>标签中</Tag>
        <Tag size="large" type='success'>标签大</Tag>
    </Space>
);