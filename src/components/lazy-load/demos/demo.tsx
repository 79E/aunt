import React from "react";
import { DemoBlock } from 'demos';
import DemoComponents from './demo-components';
import DemoImages from './demo-images';
import './index.less';

function Demo (){
    return <div className="demo-lazy-load">
        <DemoBlock title="图片懒加载">
            <DemoImages />
        </DemoBlock>
        <DemoBlock title="组件懒加载">
            <DemoComponents />
        </DemoBlock>
    </div>;
}

export default Demo;