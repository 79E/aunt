import React from "react";
import { Checkbox } from 'aunt';
import { DemoBlock } from 'demos';
import './index.less';

function Demo (){
    return <div className="demo">
        <DemoBlock title="基础用法" >
            <Checkbox.Group max={3} checkedColor={'red'} iconSize={20} onChange={(res)=>{
                console.log('Checkbox.Group:',res);
            }}
            direction='horizontal'
            >
                <Checkbox name='ceshi1'>基础用法2</Checkbox>
                <Checkbox name='ceshi2' onChange={(res: any)=>{
                    console.log('基础用法3:',res);
                }}>基础用法3</Checkbox>
                <Checkbox name='ceshi3' iconSize={20}>基础用法4</Checkbox>
                <Checkbox name='ceshi4'>基础用法5</Checkbox>
                <Checkbox name='ceshi5'>基础用法6</Checkbox>
            </Checkbox.Group>

            <Checkbox name='ceshi1'>基础用法7</Checkbox>
            <Checkbox name='ceshi1'>基础用法8</Checkbox>
            <Checkbox name='ceshi1'>基础用法9</Checkbox>
            <Checkbox name='ceshi1'>基础用法10</Checkbox>
        </DemoBlock>
    </div>;
}

export default Demo;