import React from "react";
import { Checkbox } from 'aunt';

export default () => (
    <Checkbox.Group 
        onChange={v => console.log(v)} 
        defaultValue={['name2', 'name4']}
    >
        <Checkbox name='name1'>复选框1</Checkbox>
        <Checkbox name='name2'>复选框2</Checkbox>
        <Checkbox name='name3'>复选框3</Checkbox>
        <Checkbox name='name4'>复选框4</Checkbox>
        <Checkbox name='name5'>复选框5</Checkbox>
        <Checkbox name='name6'>复选框6</Checkbox>
    </Checkbox.Group>
);