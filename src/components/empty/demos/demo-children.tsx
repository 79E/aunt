import React from "react";
import { Empty, Button } from 'aunt';

export default ()=>(
    <>
        <Empty description="描述文字">
                <Button shape="round" type="primary">
                    底部自定义按钮
                </Button>
        </Empty>
    </>
);