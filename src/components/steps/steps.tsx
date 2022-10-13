import React, { FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace } from '../../hooks';
import { StepsProps } from './types';
import { joinTrim } from '../../utils';

export const Steps:FunctionComponent<StepsProps> = ((props) => {
    
    const {
        active = 0,
        direction = 'horizontal',
        inactiveColor = '#c9cdd4',
        activeColor = '#165DFF'
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('steps',prefix);

    return <div className={joinTrim([
        ns.b(),
        ns.m(direction),
        props.className,
    ])} style={props.style}>
        {
            React.Children.map(
                props.children, 
                (child, index) => {
                    if (!React.isValidElement(child)) {
                        return child;
                    }
                    return React.cloneElement(child, {
                        index,
                        parent: {
                            direction,
                            active,
                            inactiveColor,
                            activeColor,
                            ...props
                        },
                    } as Partial<{}>);
                }
            )
        }
  </div>;
});