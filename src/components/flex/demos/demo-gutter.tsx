import React from "react";
import { Flex } from 'aunt';
import './index.less';

export default () => (
    <div className="demo-flex">
        <div className="demo-flex-content">
            <Flex gutter={16}>
                <Flex.Item span={8}>span: 8</Flex.Item>
                <Flex.Item span={8}>span: 8</Flex.Item>
                <Flex.Item span={8}>span: 8</Flex.Item>
            </Flex>
        </div>
    </div>
);
