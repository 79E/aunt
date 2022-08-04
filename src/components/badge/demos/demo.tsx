import React, { useState } from "react";
import { Badge, Button, Space, AuntIconBox } from 'aunt';
import { DemoBlock } from 'demos';
import './index.less';

function Demo (){
    const [visible,setVisible] = useState(true);
    return <div className="demo-badge">
        <DemoBlock title="基本用法">
            <Space gap={30}>
                <Badge content={52} >
                    <div className="demo-badge-card"></div>
                </Badge>
                <Badge content="Aunt" >
                    <div className="demo-badge-card"></div>
                </Badge>
                <Badge content={<AuntIconBox size={14}/>} >
                    <div className="demo-badge-card"></div>
                </Badge>
            </Space>
        </DemoBlock>
        <DemoBlock title="最大值">
            <Space gap={30}>
                <Badge content={99} >
                    <div className="demo-badge-card"></div>
                </Badge>
                <Badge content={100} >
                    <div className="demo-badge-card"></div>
                </Badge>
                <Badge content={60} maxCount={50} >
                    <div className="demo-badge-card"></div>
                </Badge>
            </Space>
        </DemoBlock>
        <DemoBlock title="圆点样式">
            <Space gap={30}>
                <Badge dot>
                    <div className="demo-badge-card"></div>
                </Badge>
            </Space>
        </DemoBlock>
        <DemoBlock title="自定义颜色和偏移量">
            <Space gap={30}>
                <Badge color="#27C346" dot offset={[0,0]}>
                    <div className="demo-badge-card"></div>
                </Badge>
                <Badge color="#FF7D00" dot offset={[0,'100%']}>
                    <div className="demo-badge-card"></div>
                </Badge>
                <Badge color="#3491FA" dot offset={['100%',0]}>
                    <div className="demo-badge-card"></div>
                </Badge>
                <Badge color="#722ED1" dot offset={['100%','100%']}>
                    <div className="demo-badge-card"></div>
                </Badge>
            </Space>
        </DemoBlock>
        <DemoBlock title="使用动画">
            <Space gap={30}>
                <Badge content={52} visible={visible}>
                    <div className="demo-badge-card"></div>
                </Badge>
                <Badge content="Aunt" visible={visible}>
                    <div className="demo-badge-card"></div>
                </Badge>
                <Badge content={<AuntIconBox size={14}/>} visible={visible}>
                    <div className="demo-badge-card"></div>
                </Badge>
                <Badge dot visible={visible}>
                    <div className="demo-badge-card"></div>
                </Badge>
            </Space>
            <div style={{
                marginTop:10,
            }}>
                <Button block onClick={()=>{
                    setVisible(!visible);
                }}>显示或隐藏</Button>
            </div>
        </DemoBlock>
    </div>;
}

export default Demo;