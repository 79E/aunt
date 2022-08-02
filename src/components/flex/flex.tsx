import React, { FunctionComponent, CSSProperties, useContext, useMemo } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import FlexContext from './flex-context';
import { joinTrim } from '../../utils';
import { useNamespace } from '../../hooks';
import { FlexProps } from './types';

const Flex:FunctionComponent<Partial<FlexProps>> = ((props) => {
    const {
        direction = 'row', 
        wrap = 'nowrap', 
        justify = 'start', 
        align = 'start',
        gutter = 0,
        ...rest
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('flex',prefix);
    
    const varClasses = useMemo(()=>{
        return joinTrim([
            ns.b(),
            direction ? ns.m(`direction-${direction}`) : '',
            wrap ? ns.m(`wrap-${wrap}`) : '',
            justify ? ns.m(`justify-${justify}`) : '',
            align ? ns.m(`align-${align}`) : '',
            props.className,
        ]);
    },[direction,wrap,justify,align,props.className]);

    const getGutter: [number, number] = useMemo(
        () => (Array.isArray(gutter) ? gutter : [gutter, 0]) as [number, number],
        [gutter],
    );

    const varStyles = useMemo<CSSProperties | undefined>(()=>{
        return {
            ...(getGutter[0]! > 0
            ? {
                marginLeft: getGutter[0]! / -2,
                marginRight: getGutter[0]! / -2,
            }
            : {}),
            ...(getGutter[1]! > 0
            ? {
                marginTop: getGutter[1]! / -2,
                marginBottom: getGutter[1]! / 2,
            }
            : {}),
            ...props.style,
        };
    },[gutter,props.style]);

    return (
        <FlexContext.Provider value={{ gutter: getGutter }}>
            <div className={varClasses} style={{...varStyles}} {...rest}>   
                {props.children}
            </div>
        </FlexContext.Provider>
        
    );
});

export default Flex;