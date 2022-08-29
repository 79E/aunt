import React from "react";
import { CircleProgress } from 'aunt';

export default ()=>(
    <CircleProgress percentage={79}>
        <div style={{
            display:'flex',
            flexDirection:'column'
        }}>
            <span>79</span>
            <span style={{
                fontSize: 10,
                color:'#999'
            }}>步</span>
        </div>
    </CircleProgress>
);