import React from "react";
import { Loading } from 'aunt'
import { DemoBlock } from 'demos'
import './index.less'

function Demo (){
    return <div className="demo-loading">
        <DemoBlock title="加载类型">
            <div className="demo-loading-content">
                <div className="demo-loading-card">
                    <Loading type="rings" />
                </div>
                <div className="demo-loading-card">
                    <Loading type="oval" />
                </div>
                <div className="demo-loading-card">
                    <Loading type="ball" />
                </div>
            </div>
        </DemoBlock>
        <DemoBlock title="自定义颜色">
            <div className="demo-loading-content">
                <div className="demo-loading-card">
                    <Loading color="#3f45ff"  />
                </div>
                <div className="demo-loading-card">
                    <Loading type="ball" color="#3f45ff" />
                </div>
            </div>
        </DemoBlock>
        <DemoBlock title="自定义大小">
            <div className="demo-loading-content">
                <div className="demo-loading-card">
                    <Loading size="50"  />
                </div>
                <div className="demo-loading-card">
                    <Loading type="ball" size="24px" />
                </div>
            </div>
        </DemoBlock>
        <DemoBlock title="加载文案">
            <div className="demo-loading-content">
                <div className="demo-loading-card">
                    <Loading>加载中...</Loading>
                </div>
            </div>
        </DemoBlock>

        <DemoBlock title="垂直排列">
            <div className="demo-loading-content">
                <div className="demo-loading-card">
                    <Loading vertical>加载中...</Loading>
                </div>
            </div>
        </DemoBlock>

        <DemoBlock title="自定义文本颜色">
            <div className="demo-loading-content">      
                <div className="demo-loading-card">
                    <Loading vertical textColor="#3f45ff">加载中...</Loading>
                </div>
            </div>
        </DemoBlock>

        <DemoBlock title="自定义文本大小">
            <div className="demo-loading-content">      
                <div className="demo-loading-card">
                    <Loading vertical textSize='22'>加载中...</Loading>
                </div>
                <div className="demo-loading-card">
                    <Loading vertical textColor="#3f45ff" textSize='10px'>加载中...</Loading>
                </div>
            </div>
        </DemoBlock>
    </div>
}

export default Demo