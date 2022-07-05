import React from "react";
import { Image,Space,LazyLoad,Typography } from 'aunt'
import { DemoBlock } from 'demos'
import './index.less'

function Demo (){

    const imageList = [
        'https://tu.eebk.com/item/62c294295be16ec74a16ee09.jpg',
        'https://tu.eebk.com/item/62c294315be16ec74a16f884.jpg',
        'https://tu.eebk.com/item/62c294355be16ec74a16fedc.jpg',
        'https://tu.eebk.com/item/62c2943a5be16ec74a1706de.jpg',
        'https://tu.eebk.com/item/62c2948f5be16ec74a177628.jpg',
        'https://tu.eebk.com/item/62c294955be16ec74a177d22.jpg',
        'https://tu.eebk.com/item/62c294995be16ec74a178273.jpg',
    ];

    return <div className="demo-lazy-load">
        <DemoBlock title="图片懒加载">
            <Space direction="vertical">
                {
                    imageList.map(
                        (img) => (
                            <Image lazyload radius={10} src={img} key={img} />
                        )   
                    )
                }
            </Space>
        </DemoBlock>
        <DemoBlock title="组件懒加载">
        <LazyLoad>
            <div>
                <Image src="https://tu.eebk.com/item/62c294295be16ec74a16ee09.jpg" />
                <Typography.Text>
                    当页面需要加载大量内容时，使用懒加载可以实现延迟加载页面可视区域外的内容，从而使页面加载更流畅。
                </Typography.Text>
            </div>
        </LazyLoad>
        </DemoBlock>
    </div>
}

export default Demo