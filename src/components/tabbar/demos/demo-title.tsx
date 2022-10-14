import React from "react";
import { Tabbar } from 'aunt';

export default ()=>(
    <Tabbar fixed={false}>
        <Tabbar.Item title='首页' style={{
            fontSize:14
        }}/>
        <Tabbar.Item title='消息' style={{
            fontSize:14
        }}/>
        <Tabbar.Item title='通知' style={{
            fontSize:14
        }}/>
        <Tabbar.Item title='我的' style={{
            fontSize:14
        }}/>
    </Tabbar>
);