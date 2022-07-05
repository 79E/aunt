import React, { forwardRef, cloneElement, useContext } from 'react'
import { IconProps } from './types'
import ConfigProviderContext from '../config-provider/config-provider-context'
import {joinTrim} from '../../utils'

const Icon = forwardRef<SVGSVGElement,IconProps>((props,ref) => {
    const {
        name = '',
        className,
        style,
        spin,
        color,
        size,
        rotate,
        tabIndex,
        onClick,
        children,
        ...restProps
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    
    const classPrefix = `${prefix}-icon`
    
    function kebabCase(str: string): string {
        return str
          .replace(/([A-Z])/g, '-$1')
          .toLowerCase()
          .replace(/^-/, '');
    }

    const varStyles = {} as React.CSSProperties;

    if (rotate) {
      varStyles.msTransform = `rotate(${rotate}deg)`;
      varStyles.transform = `rotate(${rotate}deg)`;
    }
    
    const kebabCaseName = name ? kebabCase(name) : undefined;
    
    let iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
        iconTabIndex = -1;
    }

    const attrs = {
        role: 'img',
        focusable: 'false',
        'aria-label': kebabCaseName,
        'aria-hidden': 'true',
        'data-icon': kebabCaseName,
        preserveAspectRatio: 'xMidYMid meet',
        ref,
        tabIndex: iconTabIndex,
        onClick,
        className: joinTrim([
          kebabCaseName ? `${classPrefix}-${kebabCaseName}` : '',
          spin ? `${classPrefix}--spin` : '',
          `${className}`,
        ]),
        width: size ? size : "24",
        height: size ? size : "24",
        stroke: color ? color : "currentColor",
        style: { ...style, ...varStyles },
        ...restProps,
    };
    return cloneElement(children as React.ReactElement, attrs)
})

Icon.displayName = 'AuntIcon'

export default Icon;
