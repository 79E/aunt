import React, { useMemo, FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import RadioContext from './radio-context';
import Checker from '../checkbox/checker';
import { useMergedState, useNamespace } from '../../hooks';
import { RadioProps } from './types';

const Radio:FunctionComponent<RadioProps> = ((props) => {

    const { name = '', defaultChecked = false } = props;

    const { parent, ...context } = useContext(RadioContext);
    
    const [checked, setChecked] = useMergedState<boolean>({
        value: props.checked,
        defaultValue: defaultChecked,
    });

    const isChecked = useMemo(() => {
        return parent ? context.checked === name : checked;
    }, [context.checked,checked]);
    
      const toggle = () => {
        if(parent && context.toggle){
            context.toggle(name);
        }
        setChecked(!isChecked);
        props.onChange?.(!isChecked);
      };


    return <Checker
        {...props}
        role="radio"
        parent={parent}
        checked={isChecked}
        onToggle={toggle}
    />;
});

export default Radio;