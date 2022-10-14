import React from "react";
import { Tabbar, AuntIconHome, AuntIconMail, AuntIconBell, AuntIconUser } from 'aunt';

export default ()=>(
    <Tabbar fixed={false}>
        <Tabbar.Item icon={<AuntIconHome />} />
        <Tabbar.Item icon={<AuntIconMail />} />
        <Tabbar.Item icon={<AuntIconBell />} />
        <Tabbar.Item icon={<AuntIconUser />} />
    </Tabbar>
);