import React,{useState} from "react";
import { Transition, Button } from 'aunt';
import { DemoBlock } from 'demos';
import './index.less';

function Demo (){
    const [ isIn, setIsin ] = useState(false);

    return <div className="demo-transition">
        <DemoBlock title="动画使用">
            <Button onClick={()=>{setIsin(!isIn);}}>显示或隐藏</Button>
            <Transition type="fade" in={isIn} timeout={500}>
                <div className="demo-transition__card"></div>
            </Transition>
        </DemoBlock>
    </div>;
}

export default Demo;