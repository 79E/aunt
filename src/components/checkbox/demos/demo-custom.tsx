import React from "react";
import { Checkbox, Space, AuntIconCoffee} from 'aunt';

export default () => (
    <Space gap={10} direction='vertical'>
        <Checkbox>自定义</Checkbox>
        <Checkbox shape='square' defaultChecked>自定义形状</Checkbox>
        <Checkbox checkedColor="red" defaultChecked>自定义颜色</Checkbox>
        <Checkbox iconRender={({checked,disabled})=>{
            return checked ? <AuntIconCoffee color="red" /> : <AuntIconCoffee/>;
        }}>自定义图标</Checkbox>
        <Checkbox iconSize={24} defaultChecked>自定义大小</Checkbox>
    </Space>
);