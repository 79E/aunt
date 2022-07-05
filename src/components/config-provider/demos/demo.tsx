import React from "react";
import { ConfigProvider, Button } from 'aunt'
import { DemoBlock } from 'demos'

function Demo (){
    return  <div style={{
        minHeight:'100vh'
    }}>
        <DemoBlock title="自定义变量">
            <ConfigProvider theme={{
                buttonBackgroundPrimaryColor: 'blue',
                ButtonBorderPrimaryColor: 'red'
            }}>
                <Button type="primary">我变身了</Button>
            </ConfigProvider>
        </DemoBlock>
    </div>
}

export default Demo