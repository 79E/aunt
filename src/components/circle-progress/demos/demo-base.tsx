import React, { useState } from "react";
import { CircleProgress, Space, Button } from 'aunt';

export default ()=>{
    const [percentage ,setPercentage] =  useState(40);
    const format = (rate:number) => Math.min(Math.max(rate, 0), 100);
    return (
        <>
            <Space>
                <CircleProgress percentage={percentage} />
                <CircleProgress percentage={percentage} clockwise={true}/>
            </Space>
            <Space>
                <Button type='success' plain onClick={()=>{
                    setPercentage((value)=>format(value+10));
                }}>增加</Button>
                <Button type='warning' plain onClick={()=>{
                    setPercentage((value)=>format(value-10));
                }}>减少</Button>
            </Space>
        </>
    );
};