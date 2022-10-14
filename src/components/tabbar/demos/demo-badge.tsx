import React from "react";
import { Tabbar, AuntIconHome, AuntIconMail, AuntIconBell, AuntIconUser } from 'aunt';

export default ()=>(
    <Tabbar fixed={false}>
        <Tabbar.Item title='首页' icon={<AuntIconHome />} />
        <Tabbar.Item badge={{
            visible:true,
            content: 2
        }} title='消息' icon={<AuntIconMail />} />
        <Tabbar.Item badge={{
            visible:true,
            dot:true
        }} title='通知' icon={<AuntIconBell />} />
        <Tabbar.Item title='我的' icon={<AuntIconUser />} />
    </Tabbar>
);