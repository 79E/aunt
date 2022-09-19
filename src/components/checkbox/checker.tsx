import React, { CSSProperties, FunctionComponent, useContext, useMemo, useRef } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { AuntIconCheck } from '../icon/icons';
import { addUnit, joinTrim } from '../../utils';
import { useNamespace } from '../../hooks';
import { CheckerProps } from './types';

const Checker: FunctionComponent<CheckerProps<{}>> = (props) => {

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('checker',prefix);

    const { checked, bindGroup = true } = props;

    const getParentProp = (name: string) => {
        if (props.parent && bindGroup) {
            const obj = props.parent.props as {[key:string]:any};
            return obj[name];
        }
        return null;
    };

    const disabled = props.disabled || getParentProp('disabled') || false;
    const shape = props.shape ||  getParentProp('shape') || 'round';

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
                width:addUnit(props.iconSize || getParentProp('iconSize')),
                height: addUnit(props.iconSize || getParentProp('iconSize'))
            };
            const checkedColor = props.checkedColor || getParentProp('checkedColor');
            if (checkedColor && checked && !disabled) {
                styles.borderColor = checkedColor;
                styles.backgroundColor = checkedColor;
            }
            return { ...styles };
        },[props.iconSize,parent,checked]);
        
        const iconRender = props.iconRender || getParentProp('iconRender');
        if(iconRender){
            return iconRender({ checked, disabled });
        }

        return <div
            className={joinTrim([
                ns.e('icon'),
                ns.em('icon', shape),
                checked ? ns.em('icon','active') : ''
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

    const toggle = (newValue = !checked) => {
        if(disabled) return;
        if(props.onToggle){
            props.onToggle();
        }
    };

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
};

export default Checker;