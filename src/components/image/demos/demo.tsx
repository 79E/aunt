import React from "react";
import { Image,Flex,Loading, AuntIconWifiOff  } from 'aunt';
import { DemoBlock } from 'demos';
import './index.less';

function Demo (){
    const imageSrc = 'https://img.iwave.net.cn/qm/213d34355e490a97ff8e58b5c92d3e43.jpeg';
    const fit = ['contain','cover','fill','none','scale-down'] as const;
    return <div className="demo-image">
        <DemoBlock title="基础用法">
            <Image lazyload radius={4} width={100} height={100} src={imageSrc}></Image>
        </DemoBlock>
        <DemoBlock title="填充模式">
            <Flex wrap="wrap" gutter={20}>
                {
                    fit.map((item)=>(
                        <Flex.Item key={item} span={8} >
                            <div className="demo-image-card">
                                <Image radius={4} fit={item} width={100} height={100}  src={imageSrc} />
                                <span className="demo-image-title">{item}</span>
                            </div>
                        </Flex.Item>
                    ))
                }
            </Flex>
        </DemoBlock>

        <DemoBlock title="圆形图片">
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
        </DemoBlock>

        <DemoBlock title="加载中提示">
            <Flex wrap="wrap" gutter={20}>
                <Flex.Item span={8}>
                    <div className="demo-image-card">
                        <Image radius={4} width="100px" height="100px" />
                        <span className="demo-image-title">默认提示</span>
                    </div>
                </Flex.Item>
                <Flex.Item span={8}>
                    <div className="demo-image-card">
                        <Image radius={4} loadingIcon={<Loading type="ball" />} width="100px"  height="100px" />
                        <span className="demo-image-title">自定义提示</span>
                    </div>
                </Flex.Item>
            </Flex>
        </DemoBlock>

        <DemoBlock title="加载失败提示">
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
        </DemoBlock>
                    
    </div>;
}

export default Demo;