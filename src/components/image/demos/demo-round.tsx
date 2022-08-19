import React from "react";
import { Image, Flex } from 'aunt';

export default ()=>{

    const imageSrc = 'https://img.iwave.net.cn/qm/213d34355e490a97ff8e58b5c92d3e43.jpeg';
    const fit = ['contain','cover','fill','none','scale-down'] as const;

    return (
        <Flex wrap="wrap" gutter={20}>
            {
                fit.map((item)=>(
                    <Flex.Item key={item} span={8} >
                        <div className="demo-image-card">
                            <Image round fit={item} width={100} height={100} src={imageSrc} />
                            <span className="demo-image-title">{item}</span>
                        </div>
                    </Flex.Item>
                ))
            }
        </Flex>
    );
};