import React, { FunctionComponent, CSSProperties, useContext, useMemo } from 'react'
import ConfigProviderContext from '../config-provider/config-provider-context';
import FlexContext from './flex-context';
import { FlexProps } from './types'
import { joinTrim } from '../../utils'

const defaultProps: FlexProps = {
    direction: 'row', 
    wrap: 'nowrap', 
    justify: 'start', 
    align: 'start',
    gutter: 0,
    className:'',
}

const Flex:FunctionComponent<Partial<FlexProps>> = ((props) => {
    const {
        direction, wrap, justify, align, gutter, style, className, children, 
        ...rest
    } = {
        ...defaultProps,
        ...props
    };

    const { prefix } = useContext(ConfigProviderContext);
    const classPrefix = `${prefix}-flex`
    
    const varClasses = useMemo(()=>{
        return joinTrim([
            classPrefix,
            `${classPrefix}--direction-${direction}`,
            `${classPrefix}--wrap-${wrap}`,
            `${classPrefix}--justify-${justify}`,
            `${classPrefix}--align-${align}`,
            `${className}`,
        ])
    },[direction,wrap,justify,align,className])

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
            ...style,
        }
    },[gutter])

    return (
        <FlexContext.Provider value={{ gutter: getGutter }}>
            <div className={varClasses} style={{...varStyles}} {...rest}>   
                {children}
            </div>
        </FlexContext.Provider>
        
    )
})

Flex.defaultProps = defaultProps;
Flex.displayName = 'AuntFlex';

export default Flex;