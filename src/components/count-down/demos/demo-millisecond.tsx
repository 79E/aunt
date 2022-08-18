import React from "react";
import { CountDown } from 'aunt';

export default ()=>(
    <CountDown time={24 * 60 * 60 * 1000} millisecond format="DD:HH:mm:ss:SSS"/>
);