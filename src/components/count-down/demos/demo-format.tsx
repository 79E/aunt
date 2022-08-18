import React from "react";
import { CountDown } from 'aunt';

export default ()=>(
    <CountDown time={30 * 60 * 60 * 1000} format="DD 天 HH 时 mm 分 ss 秒" />
);