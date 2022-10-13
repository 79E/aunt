import React from "react";
import { Button, Steps, Loading } from 'aunt';

export default ()=>(
    <Steps active={2} direction='vertical'>
        <Steps.Item title='第一步' description='第一步的描述'></Steps.Item>
        <Steps.Item renderContent={<div>
            <div>步骤2</div>
            <div style={{
                display:'inline-block',
                padding:10,
                borderRadius:10,
                background:'#f2f2f2',
                margin:'20px 0',
            }}>
                <Loading type='oval' ></Loading>
            </div>
            <br />
            <Button type='primary'>重新申请</Button>
        </div>}></Steps.Item>
        <Steps.Item title='第三步' description='第三步的描述'></Steps.Item>
        <Steps.Item title='第四步' description='第四步的描述'></Steps.Item>
    </Steps>
);