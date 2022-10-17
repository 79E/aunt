import React,{useState} from "react";
import { Transition, Button } from 'aunt';
import './index.less';

function Demo (){
    const [ isIn, setIsin ] = useState(false);

    return (
        <div className="demo-transition">
            <Button onClick={()=>{setIsin(!isIn);}}>显示或隐藏</Button>
            <Transition in={isIn} timeout={500}>
                <div className="demo-transition__card"></div>
            </Transition>
        </div>
    );
}

export default Demo;