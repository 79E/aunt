import React from "react";
import { Flex } from 'aunt';
import './index.less';

export default () => (
    <div className="demo-flex">
        <div className="demo-flex-content">
            <Flex justify="center" align="center">
                <Flex.Item span={12}>span: 12</Flex.Item>
                <Flex.Item span={12}>span: 12</Flex.Item>
            </Flex>
        </div>
        
        <div className="demo-flex-content">
            <Flex>
                <Flex.Item span={8}>span: 8</Flex.Item>
                <Flex.Item span={8}>span: 8</Flex.Item>
                <Flex.Item span={8}>span: 8</Flex.Item>
            </Flex>
        </div>
    </div>
);
