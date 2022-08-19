import React from "react";
import { Image } from 'aunt';

export default ()=>{
    const imageSrc = 'https://img.iwave.net.cn/qm/213d34355e490a97ff8e58b5c92d3e43.jpeg';
    return (
        <Image lazyload radius={4} width={100} height={100} src={imageSrc}></Image>
    );
};