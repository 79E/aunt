import React from "react";
import { Selector } from 'aunt';
export default ()=>(
    <Selector
        column={2}
        options={[
            {
                label: '选项一',
                value: '1',
                description:'描述信息1'
            },
            {
                label: '选项二',
                value: '2',
                description:'描述信息2'
            },
        ]} 
    />
);