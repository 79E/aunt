import React from "react";
import { Card, Image, AuntIconChevronRight, Space, Button, AuntIconHeart } from 'aunt';

export default ()=>(
    <>
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
    </>
);