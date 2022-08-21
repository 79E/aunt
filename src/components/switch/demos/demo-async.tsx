import React,{ useState } from "react";
import { Switch, Space } from 'aunt';

export default ()=>{
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    return (
        <Space>
            <Switch checked={checked} loading={loading} onClick={()=>{
                setLoading(true);
                setTimeout(()=>{
                    setLoading(false);
                    setChecked(!checked);
                },2000);
            }}></Switch>
        </Space>
    );
};