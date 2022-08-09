import React,{ useState } from "react";
import { Switch, Space } from 'aunt';
import { DemoBlock } from 'demos';
import './index.less';

function Demo (){
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    return <div className="demo">
        <DemoBlock title="基础用法">
            <Switch defaultChecked />
        </DemoBlock>
        <DemoBlock title="禁用状态">
            <Space>
                <Switch defaultChecked disabled></Switch>
                <Switch disabled></Switch>
            </Space>
        </DemoBlock>
        <DemoBlock title="加载状态">
            <Space>
                <Switch loading></Switch>
                <Switch disabled loading></Switch>
                <Switch defaultChecked loading></Switch>
                <Switch defaultChecked disabled loading></Switch>
            </Space>
        </DemoBlock>
        <DemoBlock title="开关形状">
            <Space>
                <Switch shape='round'></Switch>
                <Switch shape='square'></Switch>
            </Space>
        </DemoBlock>
        <DemoBlock title="自定义大小">
            <Space>
                <Switch size={20}></Switch>
                <Switch size={26}></Switch>
                <Switch size={30}></Switch>
            </Space>
        </DemoBlock>
        <DemoBlock title="自定义颜色">
            <Space>
                <Switch activeColor="#27C346" defaultChecked></Switch>
                <Switch inactiveColor="#FF7D00" activeColor="#14C9C9"></Switch>
            </Space>
        </DemoBlock>
        <DemoBlock title="异步控制">
            <Space>
                <Switch checked={checked} loading={loading} onClick={()=>{
                    setLoading(true);
                    setTimeout(()=>{
                        setLoading(false);
                        setChecked(!checked);
                    },2000);
                }}></Switch>
            </Space>
        </DemoBlock>
    </div>;
}

export default Demo;