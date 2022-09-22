import React from "react";
import { Segmented, Space } from 'aunt';

export default ()=> (
    <Space direction='vertical'>
        <Segmented.Group>
            <Segmented value='iOS'>iOS</Segmented>
            <Segmented value='Android' disabled>Android</Segmented>
            <Segmented value='HarmonyOS'>HarmonyOS</Segmented>
            <Segmented value='Web' disabled>Web</Segmented>
        </Segmented.Group>
        
        <Segmented.Group disabled>
            <Segmented value='iOS'>iOS</Segmented>
            <Segmented value='Android'>Android</Segmented>
            <Segmented value='HarmonyOS'>HarmonyOS</Segmented>
            <Segmented value='Web'>Web</Segmented>
        </Segmented.Group>
    </Space>
);