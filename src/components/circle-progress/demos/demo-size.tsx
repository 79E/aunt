import React from "react";
import { CircleProgress,Space } from 'aunt';

export default ()=>(
    <Space wrap>
        <CircleProgress percentage={40} strokeWidth={80}/>
        <CircleProgress percentage={50} diameter={100} />
    </Space>
);