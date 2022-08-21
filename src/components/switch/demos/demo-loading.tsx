import React from "react";
import { Switch, Space } from 'aunt';

export default ()=>(
    <Space>
        <Switch loading></Switch>
        <Switch disabled loading></Switch>
        <Switch defaultChecked loading></Switch>
        <Switch defaultChecked disabled loading></Switch>
    </Space>
);