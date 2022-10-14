import React, { useMemo, FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import Badge from '../badge';
import { useNamespace } from '../../hooks';
import { joinTrim } from '../../utils';
import { TabbarItemProps } from './types';

export const TabbarItem:FunctionComponent<TabbarItemProps> = ((props) => {
    
    const { parent:parentProps, index = 0, setActive } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('tabbar-item',prefix);
    
    const active = useMemo(() => {
        return (props.key || index) === parentProps?.value;
    }, [props.key, index, parentProps?.value]);

    const onClick = (event: React.MouseEvent) => {
        setActive?.(props.key ?? index);
        props.onClick?.(event);
    };

    const color = active ? parentProps?.activeColor : parentProps?.inactiveColor;

    const varClasses = useMemo(()=>{
        return joinTrim([
            ns.b(),
            props.className
        ]);
    },[]);
    const varStyles = useMemo(()=>{
        return {
            ...props.style,
            color
        };
    },[color, props]);

    const renderIcon = ()=>{
        if (typeof props.icon === 'function') {
            return props.icon(active);
        }
        if (props.icon) {
            return props.icon;
        }
        return null;
    };

    const renderTitle = ()=>{
        if (typeof props.title === 'function') {
            return props.title(active);
        }
        if (props.title) {
            return props.title;
        }
        return null;
    };

    const badgeProps = {
        visible: false,
        ...props.badge,
    };

    return <div 
        className={varClasses} 
        style={varStyles}
        onClick={onClick}
    >   
        {
            typeof props.children === 'function' ? props.children(active) :
            props.children ? props.children : 
            <>
                <Badge {...badgeProps} style={{}} className={ns.e('icon')}>
                    {renderIcon()}
                </Badge>
                <div className={ns.e('title')}>
                    {renderTitle()}
                </div>
            </>
        }
    </div>;
});