import React from "react";
import { Image,Space } from 'aunt';

export default ()=>{
    const imageList = [
        'https://tu.eebk.com/item/62c294295be16ec74a16ee09.jpg',
        'https://tu.eebk.com/item/62c294315be16ec74a16f884.jpg',
        'https://tu.eebk.com/item/62c294355be16ec74a16fedc.jpg',
        'https://tu.eebk.com/item/62c2943a5be16ec74a1706de.jpg',
        'https://tu.eebk.com/item/62c2948f5be16ec74a177628.jpg',
        'https://tu.eebk.com/item/62c294955be16ec74a177d22.jpg',
        'https://tu.eebk.com/item/62c294995be16ec74a178273.jpg',
    ];
    return (
        <Space direction="vertical">
        {
            imageList.map(
                (img) => (
                    <div key={img} style={{height:220}}>
                        <Image lazyload radius={10} src={img} />
                    </div>
                )   
            )
        }
        </Space>
    );
};