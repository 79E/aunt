import React, { CSSProperties, FunctionComponent, useMemo, useContext } from 'react'
import { SpaceProps } from './types'
import ConfigProviderContext from '../config-provider/config-provider-context'
import { joinTrim,addUnit } from '../../utils'

const defaultProps:SpaceProps = {
    direction: 'horizontal',
}

export const Space:FunctionComponent<Partial<SpaceProps>> = ((props) => {
    const {
        gap, direction, align, justify, wrap, block
    } = {
        ...defaultProps,
        ...props
    }

    const { prefix } = useContext(ConfigProviderContext);
    const classPrefix = `${prefix}-space`

    const varClasses = useMemo(()=>{
        return joinTrim([
            classPrefix,
            wrap ? `${classPrefix}--wrap` : '',
            block ? `${classPrefix}--block` : '',
            align ? `${classPrefix}--align-${align}` : '',
            justify ? `${classPrefix}--justify-${justify}` : '',
            direction ? `${classPrefix}--${direction}`: '',
            `${props.className}`
        ])
    },[ props.className ])

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
    },[ gap, props.style ])
    
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
                            child !== null && child !== undefined && <div className={`${classPrefix}__item`}>{child}</div>
                        );
                    }
                )
            }
        </div>
    )
})


Space.defaultProps = defaultProps
Space.displayName = 'AuntSpace'