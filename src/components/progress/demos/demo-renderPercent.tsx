import React from "react";
import { Progress } from 'aunt';

export default ()=>(
    <Progress percentage={40} percentPosition='follow' renderPercent={(percentage)=>{

        return (
            <span style={{
                padding:5,
                background:'blue',
                borderRadius:'50%',
                color:'#fff'
            }}>
                {percentage}
            </span>
        );
    }}  />
);