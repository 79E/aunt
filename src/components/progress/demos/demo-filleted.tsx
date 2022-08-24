import React from "react";
import { Progress } from 'aunt';

export default ()=>(
    <>
        <Progress percentage={40} filleted={0} />
        <br />
        <Progress percentage={50} stroke={6} filleted={2} />
    </>
);