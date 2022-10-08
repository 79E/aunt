import React,{ useState } from "react";
import { Button, Overlay } from 'aunt';

export default ()=> {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Overlay 
                visible={visible} 
                onClick={()=>setVisible(false)} 
                style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}    
            >
                <div style={{
                    background:'#fff',
                    padding:40,
                    borderRadius:10,
                }} 
                >
                    <span>内容</span>
                </div>
            </Overlay>
            <Button onClick={()=>setVisible(true)}>自定义内容</Button>
        </div>
    );
};