import React, { FunctionComponent, useContext, useMemo } from 'react'
import { TypographyProps } from './types'
import ConfigProviderContext from '../config-provider/config-provider-context'
import { joinTrim } from '../../utils'

const defaultProps:TypographyProps = {
    size: 'md',
    level: 4,    
}

export const Typography:FunctionComponent<Partial<TypographyProps> & { renderType: string }> = ((props) => {

    const {
        type,
        size,
        level,
        center,
        ellipsis,
        className,
        children,
        strong,
        underline,
        disabled,
        renderType,
        delete: del,
        ...rest
    } = {
        ...defaultProps,
        ...props
    }
    const { prefix } = useContext(ConfigProviderContext);
    const classPrefix = `${prefix}-typography`

    const elli = ellipsis === true ? 1 : (ellipsis as number);

    const varClasses = useMemo(()=>{
        return joinTrim([
          classPrefix,
          renderType ? `${classPrefix}--${renderType}` : '',
          type ? `${classPrefix}--${type}` : '',
          size ? `${classPrefix}--${size}` : '',
          level && renderType === 'title' ? `${classPrefix}--l${level}` : '',
          disabled ? `${classPrefix}--disabled` : '',
          center ? `${classPrefix}--center` : '',
          strong ? `${classPrefix}--strong` : '',
          del ? `${classPrefix}--delete` : '',
          underline ? `${classPrefix}--underline` : '',
          elli === 1 ? 'aunt-ellipsis': '',
          elli && elli > 1 ? `aunt-multi-ellipsis--l${elli}`: '',
          `${className}`
        ])
      },[])

    return <div className={varClasses} onClick={props.onClick} {...rest}> 
        {children}
    </div>
})


Typography.defaultProps = defaultProps
Typography.displayName = 'AuntTypography'