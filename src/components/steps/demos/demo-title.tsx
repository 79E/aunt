import React from "react";
import { Steps } from 'aunt';

export default ()=>(
    <Steps active={1}>
        <Steps.Item title='第一步'></Steps.Item>
        <Steps.Item title='第二步'></Steps.Item>
        <Steps.Item title='第三步'></Steps.Item>
        <Steps.Item title='第四步'></Steps.Item>
    </Steps>
);