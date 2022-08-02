import React, { FunctionComponent, useMemo, useContext } from 'react';
import { SpaceProps } from './types';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace } from '../../hooks';
import { joinTrim,addUnit } from '../../utils';

export const Space:FunctionComponent<Partial<SpaceProps>> = ((props) => {
    const {
        gap, direction = 'horizontal', align, justify, wrap, block
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('space',prefix);

    const varClasses = useMemo(()=>{
        return joinTrim([
            ns.b(),
            wrap ? ns.m('wrap') : '',
            block ? ns.m('block') : '',
            align ? ns.m(`align-${align}`) : '',
            justify ? ns.m(`justify-${justify}`) : '',
            direction ? ns.m(direction): '',
            props.className
        ]);
    },[ props.className ]);

    const varStyles = useMemo(()=>{
        if (gap) {
            if (Array.isArray(gap)) {
              const [gapH, gapV] = gap;
              return {
                ...props.style,
                '--gap-vertical': addUnit(gapV),
                '--gap-horizontal': addUnit(gapH),
              };
            }
            return { ...props.style, '--gap': addUnit(props.gap as string | number) };
          }
          return props.style;
    },[ gap, props.style ]);
    
    return (
        <div 
            className={varClasses}
            style={{
                ...varStyles
            }}
            onClick={props.onClick}
        >   
            {
                React.Children.map(
                    props.children, 
                    (child) => {
                        return (
                            child !== null && child !== undefined && <div className={ns.e('item')}>{child}</div>
                        );
                    }
                )
            }
        </div>
    );
});