import React, { useMemo, forwardRef, useContext, useImperativeHandle, CSSProperties } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import CheckBoxContext from './checkbox-context';
import { AuntIconCheck } from '../icon/icons';
import { useNamespace, useMergedState } from '../../hooks';
import { addUnit, joinTrim } from '../../utils';
import { CheckboxInstance, CheckboxProps } from './types';

const Checkbox = forwardRef<CheckboxInstance, CheckboxProps>((props, ref) => {
    
    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('checkbox',prefix);

    const { bindGroup = true } = props;

    

    const { parent, ...context } = useContext(CheckBoxContext);
    const [checked, setChecked] = useMergedState<boolean>({
        value: props.checked,
        defaultValue: props.defaultChecked,
    });
    
    const disabled = props.disabled || parent?.props.disabled || false;
    
    const shape = props.shape || parent?.props.shape || 'round';

    const varClasses = useMemo(()=>{
        return joinTrim([
            ns.b(),
            disabled ? ns.m('disabled') : ''
        ]);
    },[]);

    const varStyles = useMemo(()=>{
        return { ...props.style };
    },[props.style]);

    const renderIcon = ()=>{
        
        const iconStyles = useMemo(()=>{
            const styles:CSSProperties = {
                width:addUnit(props.iconSize || parent?.props.iconSize),
                height: addUnit(props.iconSize || parent?.props.iconSize)
            };
            const checkedColor = props.checkedColor || parent?.props.checkedColor;
            if (checkedColor && isChecked && !disabled) {
                styles.borderColor = checkedColor;
                styles.backgroundColor = checkedColor;
            }
            return { ...styles };
        },[props.iconSize,parent,checked]);
        
        const iconRender = props.iconRender || parent?.props.iconRender;
        if(iconRender){
            return iconRender({ checked, disabled });
        }

        return <div
            className={joinTrim([
                ns.e('icon'),
                ns.em('icon', shape),
                isChecked ? ns.em('icon','active') : ''
            ])}
            style={iconStyles}
        >
             <AuntIconCheck />
        </div>;
    };
    const renderChildren = ()=>{
        return <div
        className={joinTrim([
            ns.e('label')
        ])}
        >{props.children}</div>;
    };

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

    return <div
        role={props.role}
        style={varStyles}
        className={varClasses}
        onClick={()=>{
            toggle();
        }}
    >
        { renderIcon() }
        { renderChildren() }
    </div>;
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;