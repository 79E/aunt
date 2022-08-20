import React from "react";
import { Space, Button } from 'aunt';

export default ()=>(
    <Space wrap>
        <Button type="primary" >按钮1</Button>
        <Button type="success" plain>按钮2</Button>
        <Button type="warning" plain>按钮3</Button>
        <Button type="danger" plain>按钮4</Button>
        <Button plain>按钮5</Button>
        <Button type="warning">按钮6</Button>
    </Space>
);