import React from "react";
import { Radio } from 'aunt';

export default () => (
    <Radio.Group 
        onChange={v => console.log(v)} 
        defaultValue={['name2']}
        direction='horizontal'
    >
        <Radio name='name1'>复选框1</Radio>
        <Radio name='name2'>复选框2</Radio>
        <Radio name='name3'>复选框3</Radio>
        <Radio name='name4'>复选框4</Radio>
        <Radio name='name5'>复选框5</Radio>
        <Radio name='name6'>复选框6</Radio>
    </Radio.Group>
);