import React from "react";
import { Steps, AuntIconBell, AuntIconAlertTriangle, AuntIconCheck } from 'aunt';

const iconCard = (icon:React.ReactNode)=>{
    return <div style={{
        padding:'2px 4px',
        borderRadius:5,
        background:'#f2f2f2',
    }}>
        { icon }
    </div>;
};

export default ()=>(
    <Steps 
        active={2} 
        // 成功图标
        finishIcon={iconCard(<AuntIconCheck size={14}/>)}
        // 当选图标
        activeIcon={iconCard(<AuntIconBell size={14}/>)}
        // 没有激活的图标
        inactiveIcon={iconCard(<AuntIconAlertTriangle size={14} />)}
    >
        <Steps.Item title='第一步' description='第一步的描述'></Steps.Item>
        <Steps.Item title='第二步' description='第二步的描述'></Steps.Item>
        <Steps.Item title='第三步' description='第三步的描述'></Steps.Item>
        <Steps.Item title='第四步' description='第四步的描述'></Steps.Item>
    </Steps>
);