import React from "react";
import { Space, Button } from 'aunt'
import { DemoBlock } from 'demos'
import './index.less'

function Demo (){
    return <div className="demo-space">
        <DemoBlock title="基础用法">
            <Space>
                <Button type="primary" plain>按钮1</Button>
                <Button type="success" plain>按钮2</Button>
            </Space>
        </DemoBlock>
        <DemoBlock title="垂直间距">
            <Space direction="vertical">
                <Button type="primary" plain>按钮1</Button>
                <Button type="success" plain>按钮2</Button>
            </Space>
        </DemoBlock>
        <DemoBlock title="间距大小">
            <Space gap={30}>
                <Button type="primary" plain>按钮1</Button>
                <Button type="success" plain>按钮2</Button>
            </Space>
        </DemoBlock>
        <DemoBlock title="自动换行">
            <Space wrap>
                <Button type="primary" >按钮1</Button>
                <Button type="success" plain>按钮2</Button>
                <Button type="warning" plain>按钮3</Button>
                <Button type="danger" plain>按钮4</Button>
                <Button plain>按钮5</Button>
                <Button type="warning">按钮6</Button>
            </Space>
        </DemoBlock>
    </div>
}

export default Demo