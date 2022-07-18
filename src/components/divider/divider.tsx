import React, { CSSProperties, FunctionComponent, useContext, useMemo } from 'react'
import ConfigProviderContext from '../config-provider/config-provider-context'
import { joinTrim } from '../../utils'
import { DividerProps } from './types'


const defaultProps:DividerProps = {
    contentPosition: 'center',
    direction:'horizontal',
}

export const Divider:FunctionComponent<Partial<DividerProps>> = ((props:DividerProps) => {

    const { direction, contentPosition, dashed, hairline, ...rest } = {
        ...defaultProps,
        ...props
    }

    const { prefix } = useContext(ConfigProviderContext);
    const classPrefix = `${prefix}-divider`

    const varClasses = useMemo(()=>{
        return joinTrim([
            classPrefix,
            direction ? `${classPrefix}-${direction}`: '',
            contentPosition ? `${classPrefix}--${contentPosition}` : '',
            dashed ? `${classPrefix}--dashed` : '',
            hairline? `${classPrefix}--hairline` : '',
            props.className ? `${props.className}` : ''
        ])
    },[direction,contentPosition,dashed,props.className])

    const varStyles = useMemo(()=>{
        const styles: CSSProperties = {}
        return {...styles, ...props.style}
    },[props.style])

    return <div className={varClasses} style={varStyles} {...rest}>
        {
            props.children 
            && 
            (
                <div className={`${classPrefix}--content`}>{props.children}</div>
            )
        }
    </div>
})


Divider.defaultProps = defaultProps
Divider.displayName = 'AuntDivider'