import React from "react";
import { Flex } from 'aunt';
import './index.less';

export default () => (
    <div className="demo-flex">
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
    </div>
);
