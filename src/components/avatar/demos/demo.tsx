import React from "react";
import { Avatar,Space,AuntIconMeh } from 'aunt';
import { DemoBlock } from 'demos';
import './index.less';

function Demo (){
    return <div className="demo-avatar">
        <DemoBlock title="头像尺寸">
            <Space wrap>
                <Avatar size="small" url="https://img.iwave.net.cn/qm/a2e0b87a04da3c7818a0fe3fa1700991.png"></Avatar>
                <Avatar size="normal" url="https://img.iwave.net.cn/qm/a2e0b87a04da3c7818a0fe3fa1700991.png"></Avatar>
                <Avatar size="large" url="https://img.iwave.net.cn/qm/a2e0b87a04da3c7818a0fe3fa1700991.png"></Avatar>
            </Space>
        </DemoBlock>
        <DemoBlock title="头像形状" >
            <Space wrap>
                <Avatar shape="square" url="https://img.iwave.net.cn/qm/a2e0b87a04da3c7818a0fe3fa1700991.png"></Avatar>
                <Avatar shape="round" url="https://img.iwave.net.cn/qm/a2e0b87a04da3c7818a0fe3fa1700991.png"></Avatar>
            </Space>
        </DemoBlock>
        <DemoBlock title="头像类型" >
            <Space wrap>
                <Avatar></Avatar>
                <Avatar icon={<AuntIconMeh />}></Avatar>
                <Avatar>头</Avatar>
                <Avatar url="https://img.iwave.net.cn/qm/a2e0b87a04da3c7818a0fe3fa1700991.png"></Avatar>
            </Space>
        </DemoBlock>
        <DemoBlock title="图片填充模式" >
            <Space wrap>
            <Avatar fit="contain" url="https://img.iwave.net.cn/qm/1635a93f517fba721a8c460bdab64bc3.jpeg"></Avatar>
            <Avatar fit="cover" url="https://img.iwave.net.cn/qm/1635a93f517fba721a8c460bdab64bc3.jpeg"></Avatar>
            <Avatar fit="fill" url="https://img.iwave.net.cn/qm/1635a93f517fba721a8c460bdab64bc3.jpeg"></Avatar>
            <Avatar fit="none" url="https://img.iwave.net.cn/qm/1635a93f517fba721a8c460bdab64bc3.jpeg"></Avatar>
            <Avatar fit="scale-down" url="https://img.iwave.net.cn/qm/1635a93f517fba721a8c460bdab64bc3.jpeg"></Avatar>
            </Space>
        </DemoBlock>
        <DemoBlock title="颜色" >
            <Space wrap>
                <Avatar icon={<AuntIconMeh />} background="#FF7D00" color="#fff"></Avatar>
                <Avatar color="#165DFF">文</Avatar>
            </Space>
        </DemoBlock>
    </div>;
}

export default Demo;