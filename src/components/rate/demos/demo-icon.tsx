import React from "react";
import { Rate, AuntIconCodesandbox, AuntIconCoffee } from 'aunt';

export default ()=> (
  <Rate 
    defaultValue={2} 
    icon={<AuntIconCodesandbox />} 
    voidIcon={<AuntIconCoffee />}
  />
);