import React from "react";
import { Progress } from 'aunt';

export default ()=>(
    <>
        <Progress percentage={40} percentPosition='left' />
        <br />
        <Progress percentage={50} percentPosition='right' />
        <br />
        <Progress percentage={40} percentPosition='follow' />
        <br />
        <Progress percentage={60} percentPosition='innerLeft' />
    </>
);