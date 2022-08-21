import React from "react";
import { Tag, Space } from 'aunt';

export default ()=>(
    <Space wrap>
        <Tag type='danger' plain>标签1</Tag>
        <Tag type='warning' plain shape='round'>标签2</Tag>
        <Tag type='warning' shape='round'>标签3</Tag>
        <Tag type='primary' shape='mark-left'>标签4</Tag>
        <Tag type='success' shape='mark-right'>标签5</Tag>
    </Space>
);