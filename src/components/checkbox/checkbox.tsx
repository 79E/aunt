import React, { useMemo, forwardRef, useContext, useImperativeHandle } from 'react';
import CheckBoxContext from './checkbox-context';
import Checker from './checker';
import { useMergedState } from '../../hooks';
import { CheckboxInstance, CheckboxProps } from './types';

const Checkbox = forwardRef<CheckboxInstance, CheckboxProps>((props, ref) => {

    const { bindGroup = true } = props;

    const { parent, ...context } = useContext(CheckBoxContext);
    const [checked, setChecked] = useMergedState<boolean>({
        value: props.checked,
        defaultValue: props.defaultChecked,
    });
    
    const disabled = props.disabled || parent?.props.disabled || false;

    const setParentValue = (isChecked: boolean) => {
        if(!(parent && context.toggle && context.checked)) return;      
        const { name = '' } = props;
        const { max = 0 } = parent.props;
        const value = context.checked.slice();
    
        if (isChecked) {
            const overlimit = max && value.length >= max;
        
            if (!overlimit && value.indexOf(name) === -1) {
                value.push(name);
        
                if (bindGroup) {
                    context.toggle(value);
                }
            }
        } else {
            const index = value.indexOf(name);
        
            if (index !== -1) {
                value.splice(index, 1);
        
                if (bindGroup) {
                    context.toggle(value);
                }
            }
        }

    };
    const isChecked = useMemo(() => {
        if (parent && bindGroup) {
          return context.checked?.indexOf(props.name as string) !== -1;
        }
        return checked;
    }, [context.checked, checked]);

    const toggle = (newValue = !isChecked) => {
        if(disabled) return;
        if (parent && bindGroup) {
          setParentValue(newValue);
        } else {
          setChecked(newValue);
        }
        props.onChange?.(newValue);
    };

    useImperativeHandle(ref, () => ({
        toggle,
        checked: isChecked,
        props,
    }));

    return <Checker 
        {...props}
        role="checkbox"
        parent={parent}
        onToggle={toggle}
        checked={isChecked}
    />;
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;