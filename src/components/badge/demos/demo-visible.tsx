import React,{ useState  } from "react";
import { Badge, Space, Button, AuntIconBox } from 'aunt';
import './index.less';

export default () =>{
    const [visible,setVisible] = useState(true);
    return (
        <>
            <Space gap={30}>
                <Badge content={52} visible={visible}>
                    <div className="demo-badge-card"></div>
                </Badge>
                <Badge content="Aunt" visible={visible}>
                    <div className="demo-badge-card"></div>
                </Badge>
                <Badge content={<AuntIconBox size={14}/>} visible={visible}>
                    <div className="demo-badge-card"></div>
                </Badge>
                <Badge dot visible={visible}>
                    <div className="demo-badge-card"></div>
                </Badge>
            </Space>
            <div style={{
                margin:'10px 0',
            }}>
                <Button block onClick={()=>{
                    setVisible(!visible);
                }}>显示或隐藏</Button>
            </div>
        </>
    );
};
