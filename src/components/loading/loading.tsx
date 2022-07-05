import React, { cloneElement, FunctionComponent, useContext, useMemo } from 'react'
import ConfigProviderContext from '../config-provider/config-provider-context'
import BallTriangleIcon from './svg-loaders/ball-triangle'
import BarsIcon from './svg-loaders/bars'
import CirclesIcon from './svg-loaders/circles'
import OvalIcon from './svg-loaders/oval'
import PuffIcon from './svg-loaders/puff'
import RingsIcon from './svg-loaders/rings'
import SpinningIcon from './svg-loaders/spinning-circles'
import ThreeDotsIcon from './svg-loaders/three-dots'
import GapCircleIcon from './svg-loaders/gap-circle'

import { addUnit,joinTrim } from '../../utils'
import { LoadingProps } from './types'

const defaultProps: LoadingProps = {
    type: 'gap',
    vertical: false,
    textSize: '14px',
}


const Icon = () => ({
    oval: <OvalIcon />,
    rings: <RingsIcon />,
    ball:<BallTriangleIcon />,
    bars:<BarsIcon />,
    circles:<CirclesIcon />,
    puff:<PuffIcon />,
    spinning:<SpinningIcon />,
    three:<ThreeDotsIcon />,
    gap:<GapCircleIcon />
});


export const Loading:FunctionComponent<Partial<LoadingProps>> = ((props) => {
    const { 
        type, 
        vertical, 
        color, 
        size, 
        textColor, 
        children, 
        textSize,
        className
    } = {
        ...defaultProps,
        ...props
    };

    const { prefix } = useContext(ConfigProviderContext);
    
    const classPrefix = `${prefix}-loading`

    const renderText = () => {
        if (children) {
          return (
            <span
                className={`${classPrefix}_text`}
                style={{
                    fontSize: addUnit(textSize),
                    color: textColor ?? color,
                }}
            >
              {children}
            </span>
          );
        }
        return null;
    };

    const iconAttrs = {
        width: size ? size: "30",
        height: size ? size: "30",
        stroke: color ? color : "currentColor",
        fill: color ? color : "currentColor",
    }

    const varClasses = useMemo(()=>{
        return joinTrim([
            classPrefix,
            vertical ? `${classPrefix}--vertical` : '',
            `${className}`
        ])
    },[vertical])

    return (
        <div className={varClasses}>
            {cloneElement(Icon()[type] as React.ReactElement, iconAttrs) }
            {renderText()}
        </div>
    )
})


Loading.defaultProps = defaultProps
Loading.displayName = 'AuntLoading'