import React from "react";
import { Card, Button, Image, AuntIconChevronRight, Space, AuntIconHeart } from 'aunt';
import { DemoBlock } from 'demos';
import './index.less';

function Demo (){
    return <div className="demo-card">
        <DemoBlock title="基础用法">
            <Card>
                <Card.Header>卡片标题</Card.Header>
                <Card.Body>卡片内容区域</Card.Body>
            </Card>
        </DemoBlock>
        <DemoBlock title="圆角卡片">
            <Card round>
                <Card.Header>圆角卡片</Card.Header>
                <Card.Body>卡片内容区域</Card.Body>
            </Card>
        </DemoBlock>
        <DemoBlock title="底部内容">
            <Card round>
                <Card.Header>卡片标题</Card.Header>
                <Card.Body>
                    React Aunt 是一套轻量、可靠的移动端 React 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
                </Card.Body>
                <Card.Footer>
                    <Button type="primary" shape="round" block >
                        查看更多
                    </Button>
                </Card.Footer>
            </Card>
        </DemoBlock>
        <DemoBlock title="封面展示">
            <Card round style={{ marginBottom: 20 }}>
                <Card.Cover onClick={() => {}}>
                <Image src='https://img.iwave.net.cn/qm/71c2d8132ee95200c2af8ec71b28b590.png' />
                </Card.Cover>
                <Card.Header
                    extra={<AuntIconChevronRight />}
                    onClick={() => {}}
                >
                封面展示
                </Card.Header>
                <Card.Body onClick={() => {}}>
                卡片内容区域
                </Card.Body>
                <Card.Footer>
                    <Space>
                        <Button shape='round' size='small'>
                            更多
                        </Button>
                        <Button
                            shape='round'
                            icon={<AuntIconHeart size={16} />}
                            color='linear-gradient(to right, #ff6034, #ee0a24)'
                            size='small'
                        >
                            Like
                        </Button>
                    </Space>
                </Card.Footer>
            </Card>
            <Card round>
                <Card.Header
                    extra={<AuntIconChevronRight />}
                    onClick={() => {}}
                >
                封面展示
                </Card.Header>
                <Card.Body onClick={() => {}}>
                卡片内容区域
                </Card.Body>
                <Card.Cover onClick={() => {}}>
                <Image src='https://img.iwave.net.cn/qm/7c2256378ec48019883b229d742124d2.png' />
                </Card.Cover>
            </Card>
        </DemoBlock>
        <DemoBlock title="展示边框">
            <Card round>
                <Card.Header border>卡片标题</Card.Header>
                <Card.Body
                    style={{
                    height: '20vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}
                >
                    卡片内容区域
                </Card.Body>
                <Card.Footer border>
                    <Button type="primary" shape='round' block >
                        查看更多
                    </Button>
                </Card.Footer>
            </Card>
        </DemoBlock>
        <DemoBlock title="自定义卡片样式">
            <Card round style={{ 
                backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)', 
                color: 'white' 
            }}>
                <Card.Header>卡片标题</Card.Header>
                <Card.Body
                    style={{
                        height: '20vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    卡片内容区域
                </Card.Body>
                <Card.Footer>
                    <div style={{ textAlign: 'center' }}>我是自定义的底部</div>
                </Card.Footer>
            </Card>
        </DemoBlock>
    </div>;
}

export default Demo;