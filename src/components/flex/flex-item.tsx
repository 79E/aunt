import React, { CSSProperties, FunctionComponent, useContext, useMemo } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import FlexContext from './flex-context';
import { joinTrim } from '../../utils'; 
import { useNamespace } from '../../hooks';
import { FlexItemProps, FlexType } from './types';

const FlexItem:FunctionComponent<Partial<FlexItemProps>> = ((props: FlexItemProps) => {
    const {
        style, className, span, children, flex, ...rest
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('flexitem',prefix);

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
        };
    };

    const varClasses = useMemo(()=>{
        return joinTrim([
            ns.b(),
            span ? ns.e(span) : '',
            className
        ]);
    },[span]);


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
                    const gutterStyle = getGutterStyle(gutter as [number, number]);
                    mergedStyle = {
                        ...gutterStyle,
                        ...mergedStyle,
                    };
                }
                if (flex) {
                    mergedStyle.flex = parseFlex(flex);
                }
                return <div {...rest} style={mergedStyle} className={varClasses}>
                    {children}
                </div>;
            }}
        </FlexContext.Consumer>
        
    );
});

export default FlexItem;