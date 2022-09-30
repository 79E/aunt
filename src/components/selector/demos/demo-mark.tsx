import React from "react";
import { AuntIconSmile, Selector } from 'aunt';
export default ()=>(
    <Selector 
        defaultValue={['1']}
        checkMark={
            <div style={{
                background:'#AFF0B5',
                borderTopLeftRadius: 10,
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                padding:'2px 4px'
            }}>
                <AuntIconSmile size={12} strokeWidth={2} color="#FFF" />
            </div>
        }
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