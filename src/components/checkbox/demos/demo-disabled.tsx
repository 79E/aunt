import React from "react";
import { Checkbox } from 'aunt';

export default () => (
    <>
        <Checkbox disabled>复选框</Checkbox>
        <Checkbox defaultChecked disabled>默认选中复选框</Checkbox>
    </>
);