import React, { CSSProperties, FunctionComponent, useContext, useMemo } from 'react'
import ConfigProviderContext from '../config-provider/config-provider-context';
import FlexContext from './flex-context';
import { FlexItemProps, FlexType } from './types'
import { joinTrim } from '../../utils' 

const defaultProps: FlexItemProps = {
    className:''
}

const FlexItem:FunctionComponent<Partial<FlexItemProps>> = ((props) => {
    const {
        style, className, span, children, flex, ...rest
    } = {
        ...defaultProps,
        ...props
    };

    const { prefix } = useContext(ConfigProviderContext);
    const classPrefix = `${prefix}-flexitem`

    const getGutterStyle = (gutter : [number, number]) => {
        return {
            ...(gutter[0]! > 0
            ? {
                paddingLeft: gutter[0]! / 2,
                paddingRight: gutter[0]! / 2,
                }
            : {}),
            ...(gutter[1]! > 0
            ? {
                paddingTop: gutter[1]! / 2,
                paddingBottom: gutter[1]! / 2,
                }
            : {})
        }
    }

    const varClasses = useMemo(()=>{
        return joinTrim([
            classPrefix,
            `${classPrefix}--${span}`,
            `${className}`
        ])
    },[span])


    const parseFlex = (_flex: FlexType): string => {
        if (typeof _flex === 'number') {
          return `${_flex} ${_flex} auto`;
        }
    
        if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(_flex)) {
          return `0 0 ${_flex}`;
        }
    
        return _flex;
    };

    return (
        <FlexContext.Consumer>
            {({ gutter })=>{
                let mergedStyle: CSSProperties = { ...style };
                if (gutter) {
                    const gutterStyle = getGutterStyle(gutter as [number, number])
                    mergedStyle = {
                        ...gutterStyle,
                        ...mergedStyle,
                    }
                }
                if (flex) {
                    mergedStyle.flex = parseFlex(flex);
                }
                return <div {...rest} style={mergedStyle} className={varClasses}>
                    {children}
                </div>
            }}
        </FlexContext.Consumer>
        
    )
})

FlexItem.defaultProps = defaultProps;
FlexItem.displayName = 'AuntFlexItem';

export default FlexItem;