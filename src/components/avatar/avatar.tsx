import React, { CSSProperties, FunctionComponent, useContext, useMemo } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace } from '../../hooks';
import { isString, joinTrim } from '../../utils';
import { AuntIconUser } from '../../index';
import { AvatarProps } from './types';

export const Avatar:FunctionComponent<Partial<AvatarProps>> = ((props: AvatarProps) => {

    const {
        fit = 'cover', 
        url, 
        size = 'normal', 
        shape = 'square', 
        icon = <AuntIconUser />, 
        color = '#666', 
        background = '#eee',
        ...rest
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('avatar',prefix);

    const varClasses = useMemo(()=>{
        return joinTrim([
            ns.b(),
            size ? ns.m(size) : '',
            shape ? ns.m(shape) : '',
            url ? ns.m('img') : '',
            props.className
        ]);
    },[size,shape,fit]);
    
    const varStyles = useMemo(()=>{
        const styles: CSSProperties = {};
        if(color){
            styles.color = color;
        }
        if(background){
            styles.backgroundColor = background;
        }
        return {...styles, ...props.style};
    },[color,background]);

    const renderAvatar = useMemo(()=>{
        if(url){
            return <img
                alt='img'
                src={url} 
                className={ns.m('img')} 
                style={{
                    objectFit: fit
                }}
            />;
        }
        if(props.children){
            if(isString(props.children)) {
                return (props.children as string).charAt(0);
            }
            return props.children;
        }
        return React.cloneElement(icon);
    },[url,icon,props.children]);

    return <div
        className={varClasses} 
        style={varStyles} 
        onClick={props.onClick}
        {...rest}>
        {renderAvatar}
    </div>;
});