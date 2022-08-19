import React from "react";
import { Image, Flex, AuntIconWifiOff } from 'aunt';

export default ()=>{
    return (
        <Flex wrap="wrap" gutter={20}>
            <Flex.Item span={8}>
                <div className="demo-image-card">
                    <Image radius={4} width="100px" height="100px" src="aunt.png" />
                    <span className="demo-image-title">默认提示</span>
                </div>
            </Flex.Item>
            <Flex.Item span={8}>
                <div className="demo-image-card">
                    <Image radius={4} errorIcon={<AuntIconWifiOff />} width="100px" height="100px" src="aunt.png" />
                    <span className="demo-image-title">自定义提示</span>
                </div>
            </Flex.Item>
        </Flex>
    );
};