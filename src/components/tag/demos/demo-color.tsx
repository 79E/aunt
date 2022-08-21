import React from "react";
import { Tag, Space } from 'aunt';

export default ()=>(
    <Space wrap>
        <Tag color="blue" textColor="#FFFFFF">标签1</Tag>
        <Tag color="blue" textColor="red" plain>标签2</Tag>
        <Tag color="blue" textColor="red" plain shape='round'>标签3</Tag>
    </Space>
);