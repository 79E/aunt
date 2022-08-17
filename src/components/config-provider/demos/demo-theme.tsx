import React from "react";
import { ConfigProvider, Button } from 'aunt';

export default ()=>(
    <ConfigProvider theme={{
        buttonBackgroundPrimaryColor: 'blue',
        ButtonBorderPrimaryColor: 'red'
    }}>
        <Button type="primary">我变身了</Button>
    </ConfigProvider>
);