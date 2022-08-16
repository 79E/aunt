import React from "react";
import { Button, AuntIconAlertCircle } from 'aunt';
import './index.less';

export default ()=> (
    <div className="demo-button">
        <Button type="primary" icon={<AuntIconAlertCircle size={18} />}>图标按钮</Button>
        <Button type="success" icon={<AuntIconAlertCircle size={18} />} iconPosition="right">图标按钮</Button>
    </div>
);