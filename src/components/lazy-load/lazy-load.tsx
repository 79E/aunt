import React, { FunctionComponent, useContext, useRef } from 'react'
import ConfigProviderContext from '../config-provider/config-provider-context'
import { LazyLoadProps } from './types'
import { useInViewport } from '../../hooks';


const defaultProps:LazyLoadProps = {
    placeholder:''
}

export const LazyLoad:FunctionComponent<Partial<LazyLoadProps>> = ((props) => {

    const { height, placeholder, children, className } = {
        ...defaultProps,
        ...props
    };

    const { prefix } = useContext(ConfigProviderContext);
    const classPrefix = `${prefix}-lazy-load`

    const ref = useRef<HTMLDivElement>(null);
    const inViewPort = useInViewport(ref);

    return inViewPort ? (
        <>
            { children }
        </>
    ) : (
        <div ref={ref} className={`${classPrefix} ${className}`} style={{ height, ...props.style }}>   
            { placeholder }
        </div>
    )
})


LazyLoad.defaultProps = defaultProps
LazyLoad.displayName = 'AuntLazyLoad'