import React from "react";
import { Empty,Button } from 'aunt'
import { DemoBlock } from 'demos'
import './index.less'

function Demo (){
    return <div className="demo-empty">
        <DemoBlock title="默认类型">
            <Empty description="默认类型"/>
        </DemoBlock>
        <DemoBlock title="图片类型">
            <Empty image="error" description="error类型" />
            <Empty image="network" description="network类型" />
            <Empty image="search" description="search类型" />
        </DemoBlock>
        <DemoBlock title="自定义图片">
            <Empty image="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/fcfa6d32-e40b-480e-92a9-e2d2b4c34b15.png" description="自定义图片"/>
            <Empty image={<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/61075960-54e6-4e36-bf37-54087449d748.png"  />} description="自定组件图" />
        </DemoBlock>
        <DemoBlock title="注意览器">
            <Empty description="描述文字">
                <Button shape="round" type="primary">
                    按钮
                </Button>
            </Empty>
        </DemoBlock>
    </div>
}

export default Demo