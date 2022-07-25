import React, { FunctionComponent, useContext, useRef } from 'react'
import ConfigProviderContext from '../config-provider/config-provider-context'
import { useInViewport, useNamespace } from '../../hooks';
import { joinTrim } from '../../utils';
import { LazyLoadProps } from './types'

const defaultProps:LazyLoadProps = {
    placeholder:''
}

export const LazyLoad:FunctionComponent<Partial<LazyLoadProps>> = ((props) => {

    const { height, placeholder, children, className } = {
        ...defaultProps,
        ...props
    };

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('lazy-load',prefix)

    const ref = useRef<HTMLDivElement>(null);
    const inViewPort = useInViewport(ref);

    return inViewPort ? (
        <>
            { children }
        </>
    ) : (
        <div ref={ref} className={joinTrim([ns.b(),className])} style={{ height, ...props.style }}>   
            { placeholder }
        </div>
    )
})


LazyLoad.defaultProps = defaultProps
LazyLoad.displayName = 'AuntLazyLoad'