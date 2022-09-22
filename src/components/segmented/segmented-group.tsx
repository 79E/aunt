import React, { useMemo, FunctionComponent, useContext,CSSProperties, useState } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import SegmentedContext,{ ToggleRef } from './segmented-context';
import { useNamespace, useMergedState } from '../../hooks';
import { SegmentedGroupProps } from './types';
import { joinTrim } from '../../utils';

export const SegmentedGroup:FunctionComponent<SegmentedGroupProps> = ((props) => {
    
    const { defaultValue } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('segmented',prefix);
    const nsg = useNamespace('segmented-group',prefix);

    const [value, setValue] = useMergedState({
        value: props.value,
        defaultValue: defaultValue,
    });

    const [ selected, setSelected ] = useState<ToggleRef>({
        index:0,
        width:0,
        offsetLeft:0
    });

    const varClasses = useMemo(()=>{
        return joinTrim([
            nsg.b(),
            props.className
        ]);
    },[]);

    const varStyles = useMemo(()=>{
        const styles:CSSProperties = {};
        return {
            ...styles,
            ...props.style
        };
    },[]);

    const varSelectedStyles = useMemo(()=>{
        const styles:CSSProperties = {
            width: selected.width,
            left: selected.offsetLeft
        };
        return {
            ...styles,
        };
    },[selected]);

    const onToggle = (name:string,ref: ToggleRef)=>{
        setValue(name);
        setSelected(ref);
        if(ref.e?.isTrusted){
            props.onChange?.(name);
        }
    };

    return <SegmentedContext.Provider value={{ parent: { props:{...props } }, toggle: onToggle, checked: value }}>
        <div className={varClasses} style={varStyles}>
            <div className={ns.m('selected')}
                style={{
                    left: 186,
                    ...varSelectedStyles
                }}
            ></div>
            {
                React.Children.map(props.children,(item,index)=>{
                    if(item) {
                        return React.cloneElement(item as React.ReactElement<any, string | React.JSXElementConstructor<any>>,{
                            index,
                        });
                    }
                })
            }
        </div>
    </SegmentedContext.Provider>;
});