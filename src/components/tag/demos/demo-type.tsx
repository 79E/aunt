import React from "react";
import { Tag, Space } from 'aunt';

export default ()=>(
    <Space wrap>
        <Tag type='danger'>标签1</Tag>
        <Tag type='warning'>标签2</Tag>
        <Tag type='primary'>标签3</Tag>
        <Tag type='success'>标签4</Tag>
    </Space>
);