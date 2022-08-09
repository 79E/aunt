import React, { useMemo, FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { Loading } from '../loading';
import { useNamespace, useMergedState } from '../../hooks';
import { addUnit, joinTrim } from '../../utils';
import { SwitchProps } from './types';

export const Switch:FunctionComponent<SwitchProps> = ((props) => {
    const {
        size, 
        activeColor, 
        inactiveColor,
        disabled = false,
        activeValue = true, 
        inactiveValue = false,
        shape = 'round',
        loading
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('switch',prefix);
    
    const [checked, setChecked] = useMergedState({
        value: props.checked,
        defaultValue: props.defaultChecked,
    });

    const isChecked = useMemo(() => checked === activeValue, [checked, activeValue]);

    const varClasses = useMemo(()=>{
        return joinTrim([
            ns.b(),
            isChecked ? ns.m('checked') : '',
            disabled ? ns.m('disabled') : '',
            ns.m(`shape-${shape}`),
            props.className
        ]);
    },[isChecked]);

    const varStyles = useMemo(()=>{
        const styles:React.CSSProperties = {};

        if(size) {
            styles.fontSize = addUnit(size); 
        }

        if(isChecked) {
            styles.backgroundColor = activeColor;
        }else{
            styles.backgroundColor = inactiveColor;
        }

        return {...styles, ...props.style};
    },[size, isChecked, props.style]);

    const onClick = (e: React.MouseEvent) => {
        if(props.disabled || props.loading){
            return;
        }

        if(props.onClick){
            props.onClick?.(e);
            return;
        }

        const newValue = isChecked ? inactiveValue : activeValue;
        setChecked(newValue);
        props.onChange?.(newValue);

    };

    const renderLoading = () => {
        if (loading) {
          const color = isChecked ? activeColor : inactiveColor;
          return <Loading className={ns.e('loading')} color={color} size={addUnit(size)}/>;
        }
        return null;
    };

    return <div className={varClasses} style={varStyles} onClick={onClick}>
        <div className={ns.e('node')}>
            {renderLoading()}
        </div>
    </div>;
});