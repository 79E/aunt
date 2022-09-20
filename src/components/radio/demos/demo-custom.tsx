import React from "react";
import { Radio, Space, AuntIconCoffee} from 'aunt';

export default () => (
    <Space gap={10} direction='vertical'>
        <Radio>自定义</Radio>
        <Radio shape='square' defaultChecked>自定义形状</Radio>
        <Radio checkedColor="red" defaultChecked>自定义颜色</Radio>
        <Radio iconRender={({checked,disabled})=>{
            return checked ? <AuntIconCoffee color="red" /> : <AuntIconCoffee/>;
        }}>自定义图标</Radio>
        <Radio iconSize={24} defaultChecked>自定义大小</Radio>
    </Space>
);