import React from "react";
import { Segmented } from 'aunt';

export default ()=> (
    <Segmented.Group>
        <Segmented value='iOS'>iOS</Segmented>
        <Segmented value='Android'>Android</Segmented>
        <Segmented value='HarmonyOS'>HarmonyOS</Segmented>
        <Segmented value='Web'>Web</Segmented>
    </Segmented.Group>
);