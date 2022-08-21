import React,{ useState } from "react";
import { Tag, Space, AuntIconPlus, TagType } from 'aunt';

export default ()=>{

    const [tags,setTags] = useState([1,2]);
    const tagTypes = ['primary' , 'success' , 'warning' , 'danger'];
    
    function handleClickClose(index:number) {
        setTags((t)=>{
            const newList = [...t];
            newList.splice(index, 1);
            return newList;
        });
    }

    return (
        <Space wrap>
            {
                tags.map((tag,index) => <Tag key={index} closeable type={tagTypes[tag - 1] as TagType} 
                onClose={()=>handleClickClose(index)}
                >标签</Tag>)
            }
            {
                tags.length < 4 && <Tag icon={<AuntIconPlus size={12} />} 
                onClick={() =>{
                    setTags((t)=>{
                        t.push(t.length+1);
                        return [...t];
                    });
                }}
                >添加标签</Tag>
            }
        </Space>
    );
};