import React from "react";
import { CircleProgress,Space } from 'aunt';

export default ()=>(
    <Space wrap>
        <CircleProgress percentage={40} fill="#F2F3F5"/>
        <CircleProgress percentage={50} trackColor="#E8F7FF"/>
        <CircleProgress percentage={60} progressColor="#27C346"/>
        <CircleProgress percentage={70} progressColor={{
            '0%':'#14CAFF',
            '100%':'#4776E6'
        }}/>
    </Space>
);