import React, { useState } from "react";
import { Segmented, Space } from 'aunt';
import { DemoBlock } from 'demos';
import './index.less';

function Demo (){
    const [v,sv] = useState('4');
    return <div className="demo">
        <DemoBlock title="基础用法">
            <Space direction='vertical'>
                <Segmented.Group size='small' value={v} onChange={(r)=>{
                    console.log(r);
                    sv(r);
                }}>
                    <Segmented value='2'>你好2</Segmented>
                    <Segmented value='3'>你好3</Segmented>
                    <Segmented value='4'>你好4</Segmented>
                    <Segmented value='5'>你好5</Segmented>
                </Segmented.Group>
                <Segmented.Group size='middle' value={v} onChange={(r)=>{
                    // console.log(r);
                }}>
                    <Segmented value='2'>
                        你好
                    </Segmented>
                    <Segmented value='3' disabled={true}>你好3</Segmented>
                    <Segmented value='4'>你好4</Segmented>
                    <Segmented value='5' disabled={true}>你好5</Segmented>
                </Segmented.Group>
                <Segmented.Group size='large' value={v}>
                    <Segmented value='2'>你好2</Segmented>
                    <Segmented value='3'>你好3</Segmented>
                    <Segmented value='4'>你好4</Segmented>
                    <Segmented value='5'>你好5</Segmented>
                </Segmented.Group>
            </Space>
        </DemoBlock>
    </div>;
}

export default Demo;