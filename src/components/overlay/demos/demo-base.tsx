import React,{ useState } from "react";
import { Button, Overlay } from 'aunt';

export default ()=> {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Overlay visible={visible} onClick={()=>setVisible(false)} />
            <Button onClick={()=>setVisible(true)}>显示遮罩层</Button>
        </div>
    );
};