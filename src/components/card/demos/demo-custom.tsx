import React from "react";
import { Card } from 'aunt';

export default ()=>(
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
);