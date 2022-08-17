import React from "react";
import { Card, Button } from 'aunt';

export default ()=>(
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
);