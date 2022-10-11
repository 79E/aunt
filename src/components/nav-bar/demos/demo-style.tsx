import React from "react";
import { NavBar, Space } from 'aunt';
export default ()=>(
    <Space direction='vertical' style={{
        width: '100%',
    }}>
        <NavBar title="去除底部边框" bottomLine={false}/>

        <NavBar title="自定义颜色" style={{
            color:'#FFF',
            background:'#165DFF'
        }} />
    </Space>
);