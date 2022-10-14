import React from "react";
import { Tabbar, AuntIconPlus, AuntIconHome, AuntIconMail, AuntIconBell, AuntIconUser } from 'aunt';

export default ()=>(
    <Tabbar fixed={false}>
        <Tabbar.Item title='首页' icon={<AuntIconHome />} />
        <Tabbar.Item title='消息' icon={<AuntIconMail />} />
        <Tabbar.Item>
            <div style={{
                width:40,
                height:40,
                background:'#165DFF',
                borderRadius:40,
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                color:'#fff'
            }}>
                <AuntIconPlus />
            </div>
        </Tabbar.Item>
        <Tabbar.Item title='通知' icon={<AuntIconBell />} />
        <Tabbar.Item title='我的' icon={<AuntIconUser />} />
    </Tabbar>
);