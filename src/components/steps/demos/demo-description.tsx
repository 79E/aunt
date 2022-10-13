import React from "react";
import { Steps } from 'aunt';

export default ()=>(
    <Steps active={2}>
        <Steps.Item title='第一步' description='第一步的描述'></Steps.Item>
        <Steps.Item title='第二步' description='第二步的描述'></Steps.Item>
        <Steps.Item title='第三步' description='第三步的描述'></Steps.Item>
        <Steps.Item title='第四步' description='第四步的描述'></Steps.Item>
    </Steps>
);