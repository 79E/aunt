import React, { useState } from "react";
import { Segmented, Space } from 'aunt';

export default ()=> {
    const [ value, setValue ] = useState('iOS');
    return (
        <Space direction='vertical'>
            <Segmented.Group value={value} onChange={(v)=>{
                setValue(v);
            }}>
                <Segmented value='iOS'>iOS</Segmented>
                <Segmented value='Android'>Android</Segmented>
                <Segmented value='HarmonyOS'>HarmonyOS</Segmented>
                <Segmented value='Web'>Web</Segmented>
            </Segmented.Group>

            <Segmented.Group value={value}>
                <Segmented value='iOS'>iOS</Segmented>
                <Segmented value='Android' disabled>Android</Segmented>
                <Segmented value='HarmonyOS'>HarmonyOS</Segmented>
                <Segmented value='Web' disabled>Web</Segmented>
            </Segmented.Group>

            <Segmented.Group value={value} onChange={(v)=>{
                setValue(v);
            }}>
                <Segmented value='iOS'>iOS</Segmented>
                <Segmented value='Android'>Android</Segmented>
                <Segmented value='HarmonyOS'>HarmonyOS</Segmented>
                <Segmented value='Web'>Web</Segmented>
            </Segmented.Group>
        </Space>
    );
};