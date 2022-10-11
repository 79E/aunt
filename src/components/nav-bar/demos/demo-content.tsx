import React from "react";
import { NavBar, Space,AuntIconArrowLeft, AuntIconStar } from 'aunt';
export default ()=>(
    <Space direction='vertical' style={{
        width: '100%'
    }}>
        <NavBar 
            title="无按钮" 
            leftContent={null}
        />
        <NavBar 
            title="自定义左侧" 
            leftContent={<AuntIconArrowLeft />}
        />
        <NavBar 
            title="自定义右侧" 
            rightContent={<AuntIconStar />}
        />
    </Space>
);