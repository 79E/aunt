import React from "react";
import { Progress } from 'aunt';

export default ()=>(
    <>
        <Progress percentage={30} stroke={2} />
        <br />
        <Progress percentage={40} />
        <br />
        <Progress percentage={50} stroke={6} />
        <br />
        <Progress percentage={60} stroke={8} />
        <br />
        <Progress percentage={70} stroke={10} />
        <br />
    </>
);