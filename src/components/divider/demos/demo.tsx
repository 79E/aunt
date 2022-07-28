import React from "react";
import { Divider } from 'aunt';
import { DemoBlock } from 'demos';
import './index.less';

function Demo (){
    return <div className="demo-divider">
        <DemoBlock title="展示文本">
            <Divider>文本内容</Divider>
        </DemoBlock>
        <DemoBlock title="内容位置">
            <Divider contentPosition="left">左边内容</Divider>
            <Divider contentPosition="right">右边内容</Divider>
        </DemoBlock>
        <DemoBlock title="虚线">
            <Divider dashed>文本内容</Divider>
        </DemoBlock>
        <DemoBlock title="自定义样式">
            <Divider style={{
                color: '#F53F3F',
                borderColor: '#FF7D00',
            }}>文本内容</Divider>
        </DemoBlock>
        <DemoBlock title="垂直分割线">
            <Divider direction="vertical" />
        </DemoBlock>
    </div>;
}

export default Demo;