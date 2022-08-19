import React from "react";
import { Image, LazyLoad, Typography } from 'aunt';

export default ()=>(
    <LazyLoad>
        <div>
            <Image src="https://tu.eebk.com/item/62c294295be16ec74a16ee09.jpg" />
            <Typography.Text>
                当页面需要加载大量内容时，使用懒加载可以实现延迟加载页面可视区域外的内容，从而使页面加载更流畅。
            </Typography.Text>
        </div>
    </LazyLoad>
);