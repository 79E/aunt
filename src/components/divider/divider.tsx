import React, { CSSProperties, FunctionComponent, useContext, useMemo } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { joinTrim } from '../../utils';
import { useNamespace } from '../../hooks';
import { DividerProps } from './types';

export const Divider:FunctionComponent<Partial<DividerProps>> = ((props:DividerProps) => {

    const { 
        direction = 'horizontal', 
        contentPosition = 'center', 
        dashed, 
        hairline, 
        ...rest 
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('divider',prefix);

    const varClasses = useMemo(()=>{
        return joinTrim([
            ns.b(),
            direction ? ns.m(direction) : '',
            contentPosition ? ns.m(contentPosition) : '',
            dashed ? ns.m('dashed') : '',
            hairline? ns.m('hairline') : '',
            props.className
        ]);
    },[direction,contentPosition,dashed,props.className]);

    const varStyles = useMemo(()=>{
        const styles: CSSProperties = {};
        return {...styles, ...props.style};
    },[props.style]);

    return <div className={varClasses} style={varStyles} {...rest}>
        {
            props.children 
            && 
            (
                <div className={ns.e('content')}>{props.children}</div>
            )
        }
    </div>;
});