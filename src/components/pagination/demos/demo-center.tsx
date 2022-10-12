import React,{ useState } from "react";
import { Pagination } from 'aunt';

export default () => {
    const [current,setCurrent] = useState(1);
    return (
        <Pagination 
            icon
            justify='center'
            prevFieldText=""
            nextFieldText=""
            current={current}
            pageSize={10}
            total={100}
            onChange={(data)=>{
                const {current} = data;
                setCurrent(current);
            }}
        />
    );
};