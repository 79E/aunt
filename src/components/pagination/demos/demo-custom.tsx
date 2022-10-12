import React,{ useState } from "react";
import { Pagination, Button } from 'aunt';

export default () => {
    const [current,setCurrent] = useState(1);
    return (
        <Pagination 
            current={current}
            pageSize={10}
            total={100}
            renderPrevField={()=>{
                return <Button
                    type='primary' 
                    onClick={()=>{
                        setCurrent(Math.max(1, current - 1));
                    }}
                >上一页</Button>;
            }}
            renderNextField={({pageNum})=>{
                return <Button type='primary'
                onClick={()=>{
                    setCurrent(Math.min(pageNum, current + 1));}
                }
                >下一页</Button>;
            }}
        />
    );
};