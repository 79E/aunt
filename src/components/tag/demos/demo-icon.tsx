import React from "react";
import { Tag, Space, AuntIconMeh } from 'aunt';

export default ()=>(
    <Space wrap>
        <Tag icon={<AuntIconMeh size={12} />} size="small" type='warning'>标签小</Tag>
        <Tag icon={<AuntIconMeh size={14} />} size="medium" type='primary'>标签中</Tag>
        <Tag icon={<AuntIconMeh size={16} />} size="large" type='success'>标签大</Tag>
    </Space>
);