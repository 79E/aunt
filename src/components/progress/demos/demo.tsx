import React, { useState } from "react";
import { Progress ,Button} from 'aunt';
import { DemoBlock } from 'demos';
import './index.less';

function Demo (){
    const [n,setn] = useState(30);
    return <div className="demo">
        <DemoBlock title="基础用法">
            <Progress percentage={n} filleted={4} />
            <br/>
            <Button type='primary' onClick={()=>{
                setn(n+10);
            }}>加</Button>
            <Button type='primary' onClick={()=>{
                setn(n-10);
            }}>减</Button>
        </DemoBlock>
    </div>;
}

export default Demo;