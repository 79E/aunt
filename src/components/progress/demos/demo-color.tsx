import React from "react";
import { Progress } from 'aunt';

export default ()=>(
    <>
        <Progress percentage={40} trackColor='#33333399' />
        <br />
        <Progress percentage={50} progressColor='red' />
    </>
);