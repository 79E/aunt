import React, { useMemo, FunctionComponent, useContext,CSSProperties, useState, useLayoutEffect, useRef } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import SegmentedContext from './segmented-context';
import { useNamespace } from '../../hooks';
import { SegmentedProps,SegmentedGroupProps } from './types';
import { joinTrim } from '../../utils';

const Segmented:FunctionComponent<SegmentedProps> = ((props) => {

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('segmented',prefix);

    const ref = useRef<HTMLDivElement>(null);

    const { parent, ...context } = useContext(SegmentedContext);

    const { size = 'small', color, activeColor="#1d2129"  } = parent?.props as SegmentedGroupProps;

    const disabled = props.disabled || parent?.props.disabled || false;

    const varClasses = useMemo(()=>{
        return joinTrim([
            ns.b(),
            ns.m(size),
            disabled ? ns.m('disabled') : '',
            props.className
        ]);
    },[]);

    useLayoutEffect(()=>{
        if(( props.index === 0 && !context.checked || props.value === context.checked) && ref.current){
            ref.current.click();
        }
    },[context.checked]);
    
    const varStyles = useMemo(()=>{
        const styles:CSSProperties = {};
        if(color && !disabled){
            styles.color = color;
        }
        if(props.value === context.checked && !disabled){
            styles.color = activeColor;
        }
        return {
            ...styles,
            ...props.style
        };
    },[props,context]);

    const onToggle = (e:React.MouseEvent<HTMLDivElement>)=>{
        if(disabled) return;
        const {offsetWidth, offsetHeight, offsetLeft} = e.currentTarget;
        
        context.toggle && context.toggle(props.value, {
            e,
            width:offsetWidth,
            height:offsetHeight,
            offsetLeft,
            index: props.index as number
        });
    };

    return <div
        ref={ref}
        className={varClasses} 
        style={varStyles}
        onClick={(e)=> {onToggle(e);}}
    >
        { props.children }
    </div>;
});


export default Segmented;