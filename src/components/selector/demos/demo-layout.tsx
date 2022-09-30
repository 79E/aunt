import React from "react";
import { Selector } from 'aunt';
export default ()=>(
    <Selector 
        gap={15}
        column={2}
        options={[
            {
                label: '选项一',
                value: '1',
            },
            {
                label: '选项二',
                value: '2',
            },
            {
                label: '选项三',
                value: '3',
            },
        ]} 
    />
);