import React from "react";
import { Segmented, Space } from 'aunt';

export default ()=> (
    <Space direction='vertical'>
        <Segmented.Group size='small'>
            <Segmented value='iOS'>iOS</Segmented>
            <Segmented value='Android'>Android</Segmented>
            <Segmented value='HarmonyOS'>HarmonyOS</Segmented>
            <Segmented value='Web'>Web</Segmented>
        </Segmented.Group>

        <Segmented.Group size='middle'>
            <Segmented value='iOS'>iOS</Segmented>
            <Segmented value='Android'>Android</Segmented>
            <Segmented value='HarmonyOS'>HarmonyOS</Segmented>
            <Segmented value='Web'>Web</Segmented>
        </Segmented.Group>

        <Segmented.Group size='large'>
            <Segmented value='iOS'>iOS</Segmented>
            <Segmented value='Android'>Android</Segmented>
            <Segmented value='HarmonyOS'>HarmonyOS</Segmented>
            <Segmented value='Web'>Web</Segmented>
        </Segmented.Group>
    </Space>
);