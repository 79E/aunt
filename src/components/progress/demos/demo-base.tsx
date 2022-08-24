import React, {useState} from "react";
import { Progress, Space, Button } from 'aunt';

export default ()=>{
    const [ percentage,setPercentage ] = useState(40);
    const format = (rate:number) => Math.min(Math.max(rate, 0), 100);
    return (
        <>
            <Progress percentage={percentage} />
            <br />
            <Space>
                <Button type='primary' onClick={()=>{
                    setPercentage((value) => format(value + 10));
                }}>
                    增加10
                </Button>
                <Button type='primary' plain onClick={()=>{
                    setPercentage((value) => format(value - 10));
                }}>
                    减少10
                </Button>
            </Space>
        </>
    );
};