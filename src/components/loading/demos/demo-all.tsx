import React from "react";
import { Loading } from 'aunt'
import './index.less'

function Demo (){
    return <div className="demo-loading-all">
        <p className="demo-loading-title" >全部加载图标</p>
        <div className="demo-loading-content">
            <div className="demo-loading-card">
                <Loading type="rings"></Loading>
                <span>rings</span>
            </div>
            <div className="demo-loading-card">
                <Loading type="ball"></Loading>
                <span>ball</span>
            </div>
            
            <div className="demo-loading-card">
                <Loading type="bars"></Loading>
                <span>bars</span>
            </div>
            
            <div className="demo-loading-card">
                <Loading type="circles"></Loading>
                <span>circles</span>
            </div>
            
            <div className="demo-loading-card">
                <Loading type="puff"></Loading>
                <span>puff</span>
            </div>
            
            <div className="demo-loading-card">
                <Loading type="three" ></Loading>
                <span>three</span>
            </div>
            
            <div className="demo-loading-card">
                <Loading type="oval" ></Loading>
                <span>oval</span>
            </div>
            
            <div className="demo-loading-card">
                <Loading type="gap" ></Loading>
                <span>gap</span>
            </div>
            
        </div>
    </div>
}

export default Demo