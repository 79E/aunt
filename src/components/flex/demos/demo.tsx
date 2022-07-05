import React from "react";
import { Flex } from 'aunt'
import { DemoBlock } from 'demos'
import './index.less'

function Demo (){
    return <div className="demo-flex">
        <DemoBlock title="基础用法" padding="0">
            <div className="demo-flex-content">
                <Flex justify="center" align="center">
                    <Flex.Item span={12}>span: 12</Flex.Item>
                    <Flex.Item span={12}>span: 12</Flex.Item>
                </Flex>
                
                <Flex>
                    <Flex.Item span={8}>span: 8</Flex.Item>
                    <Flex.Item span={8}>span: 8</Flex.Item>
                    <Flex.Item span={8}>span: 8</Flex.Item>
                </Flex>
            </div>
        </DemoBlock>
        <DemoBlock title="区域间隔" padding="0">
            <div className="demo-flex-content">
                <Flex gutter={16}>
                    <Flex.Item span={8}>span: 8</Flex.Item>
                    <Flex.Item span={8}>span: 8</Flex.Item>
                    <Flex.Item span={8}>span: 8</Flex.Item>
                </Flex>
            </div>
        </DemoBlock>

        <DemoBlock title="方向用法" padding="0">
            <div className="demo-flex-content">
                <Flex direction="row">
                    <Flex.Item span={8}>span: 8-1</Flex.Item>
                    <Flex.Item span={8}>span: 8-2</Flex.Item>
                    <Flex.Item span={8}>span: 8-3</Flex.Item>
                </Flex>
                <Flex direction="row-reverse">
                    <Flex.Item span={8}>span: 8-1</Flex.Item>
                    <Flex.Item span={8}>span: 8-2</Flex.Item>
                    <Flex.Item span={8}>span: 8-3</Flex.Item>
                </Flex>
            </div>
        </DemoBlock>
    </div>
}

export default Demo