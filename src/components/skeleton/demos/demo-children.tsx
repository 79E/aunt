import React,{ useState } from "react";
import { Skeleton, Flex, Typography, Switch } from 'aunt';

export default ()=>{
    
    const [loading, setLoading] = useState(true);

    return (
        <div>
            <Switch checked={loading} onChange={setLoading} size={24} />
            <Skeleton avatar title loading={loading} 
                rowHeight={14}
                style={{
                    marginTop:12
                }}
            >
                <Flex>
                    <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/3c637506-9024-4153-baa7-fa7b66c87f67.svg" style={{
                        width: 32,
                        height: 32,
                        marginRight:16
                    }} />
                    <div>
                        <Typography.Title>关于 Aunt</Typography.Title>
                        <Typography.Text type="secondary">
                            Aunt 是一套轻量、可靠的移动端 React组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
                        </Typography.Text>
                    </div>
                </Flex>
            </Skeleton>
        </div>
        
    );
};