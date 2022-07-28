import React,{useRef} from "react";
import { CountDown,Button,Space } from 'aunt';
import { DemoBlock } from 'demos';
import type { CountDownInstance } from 'aunt';
import './index.less';

function Demo (){
    
    const ref = useRef<CountDownInstance>(null);

    return <div className="demo-count-down">
        <DemoBlock title="基础用法">
            <CountDown time={24 * 60 * 60 * 1000} />
        </DemoBlock>
        <DemoBlock title="自定义格式">
            <CountDown time={30 * 60 * 60 * 1000} format="DD 天 HH 时 mm 分 ss 秒" />
        </DemoBlock>
        <DemoBlock title="毫秒级渲染">
            <CountDown time={24 * 60 * 60 * 1000} millisecond format="DD:HH:mm:ss:SSS"/>
        </DemoBlock>
        <DemoBlock title="自定义样式">
            <CountDown time={24 * 60 * 60 * 1000} millisecond format="DD:HH:mm:ss">
            {(timeData) => (
                <>
                    <span className="demo-count-down__block">{timeData.hours}</span>
                    <span>:</span>
                    <span className="demo-count-down__block">{timeData.minutes}</span>
                    <span>:</span>
                    <span className="demo-count-down__block">{timeData.seconds}</span>
                </>
            )}
            </CountDown>
        </DemoBlock>
        <DemoBlock title="手动控制">
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
        </DemoBlock>
        
    </div>;
}

export default Demo;