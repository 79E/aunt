import React,{ useRef } from "react";
import { CountDown, Space, Button } from 'aunt';
import type { CountDownInstance } from 'aunt';

export default ()=>{
    
    const ref = useRef<CountDownInstance>(null);

    return (
        <>
            <CountDown
                ref={ref}
                time={100000}
                millisecond
                format="mm:ss:SSS"
                autoStart={false}
                onFinish={() => {}}
            />  
            <Space style={{marginTop:10}}>
                <Button onClick={() => {
                    ref.current?.start();
                }}>开始</Button>
                <Button onClick={() => {
                    ref.current?.pause();
                }}>暂停</Button>
                <Button onClick={() => {
                    ref.current?.reset();
                }}>重置</Button>
            </Space>
        </>
    );
};