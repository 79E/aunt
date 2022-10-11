import React from "react";
import { NavBar } from 'aunt';
export default ()=>(
    <div style={{
        position:'relative'
    }}>
        <NavBar 
            title="基础用法" 
            bottomLine={false}
            style={{
                background:'transparent',
                color:'#fff',
                position:'absolute',
                left:0,
                right:0
            }}
        />
        <img style={{
            width:'100%',
            height:'auto'
        }} src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/6298fa8f-d1c8-4ccd-a144-61e63b07cb5d.png" alt="" />
    </div>
);