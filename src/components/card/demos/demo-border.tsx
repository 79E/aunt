import React from "react";
import { Card, Button } from 'aunt';

export default ()=>(
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
);