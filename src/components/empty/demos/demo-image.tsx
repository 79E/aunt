import React from "react";
import { Empty } from 'aunt';

export default ()=>(
    <>
        <Empty image="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/fcfa6d32-e40b-480e-92a9-e2d2b4c34b15.png" description="自定义图片"/>
        <Empty image={<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/61075960-54e6-4e36-bf37-54087449d748.png"  />} description="自定组件图" />
    </>
);