import React from "react";
import { BackTop } from 'aunt';

export default ()=> {
    const lists = [...Array(100).keys()];
    return <div>
        {
            lists.map((item)=>{
                return <div key={item} style={{
                    marginBottom:10,
                    padding:10,
                    color:'#999',
                    border:' 1px solid #f2f2f2'
                }}>
                    我是列表 - {item}
                </div>;
            })
        }

        <BackTop />
    </div>;
};