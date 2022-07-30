import React,{useState} from "react";
import { Tag,Space,AuntIconMeh,AuntIconPlus, TagType } from 'aunt';
import { DemoBlock } from 'demos';
import './index.less';

function Demo (){

    const [tags,setTags] = useState([1,2]);
    const tagTypes = ['primary' , 'success' , 'warning' , 'danger'];

    function handleClickClose(index:number) {
        setTags((t)=>{
            const newList = [...t];
            newList.splice(index, 1);
            return newList;
        });
    }

    return <div className="demo-tag">
        <DemoBlock title="标签类型">
            <Space wrap>
                <Tag>标签1</Tag>
                <Tag type='danger'>标签2</Tag>
                <Tag type='warning'>标签3</Tag>
                <Tag type='primary'>标签4</Tag>
                <Tag type='success'>标签5</Tag>
            </Space>
        </DemoBlock>
        <DemoBlock title="标签形状">
            <Space wrap>
                <Tag type='danger' plain>标签1</Tag>
                <Tag type='warning' plain shape='round'>标签2</Tag>
                <Tag type='warning' shape='round'>标签3</Tag>
                <Tag type='primary' shape='mark-left'>标签4</Tag>
                <Tag type='success' shape='mark-right'>标签5</Tag>
            </Space>
        </DemoBlock>
        <DemoBlock title="标签样式">
            <Space wrap>
                <Tag color="blue" textColor="#FFFFFF">标签1</Tag>
                <Tag color="blue" textColor="red" plain>标签2</Tag>
                <Tag color="blue" textColor="red" plain shape='round'>标签3</Tag>
            </Space>
        </DemoBlock>
        <DemoBlock title="标签尺寸">
            <Space wrap>
                <Tag size="small" type='warning'>标签小</Tag>
                <Tag size="medium" type='primary'>标签中</Tag>
                <Tag size="large" type='success'>标签大</Tag>
            </Space>
        </DemoBlock>
        <DemoBlock title="标签图标">
            <Space wrap>
                <Tag icon={<AuntIconMeh size={12} />} size="small" type='warning'>标签小</Tag>
                <Tag icon={<AuntIconMeh size={14} />} size="medium" type='primary'>标签中</Tag>
                <Tag icon={<AuntIconMeh size={16} />} size="large" type='success'>标签大</Tag>
            </Space>
        </DemoBlock>
        <DemoBlock title="关闭按钮">
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
        </DemoBlock>
    </div>;
}

export default Demo;