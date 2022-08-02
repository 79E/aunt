import React, { CSSProperties, FunctionComponent, useContext, useMemo } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { AuntIconX } from '../icon/icons';
import { useNamespace } from '../../hooks';
import { joinTrim } from '../../utils';
import { TagProps } from './types';

export const Tag:FunctionComponent<Partial<TagProps>> = ((props) => {

    const {
        type = 'default', size = 'small', plain, shape, color, textColor, closeable
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('tag',prefix);
    
    const varClasses = useMemo(()=>{
        return joinTrim([
            ns.b(),
            type ? ns.m(type) : '', 
            size ? ns.m(size) : '',
            plain ? ns.m('plain') : '',
            shape ? ns.m(shape) : '',
            props.className
        ]);
    },[type,size,plain,shape,props.className]);
    const varStyles = useMemo(()=>{
        const styles: CSSProperties = {};
        if(color){
            if(!plain){
                styles.backgroundColor = color;
            }
            styles.borderColor = color;
        }

        if(textColor){
            styles.color = textColor;
        }

        if(closeable){
            styles.paddingRight = '2px';
        }

        return {...styles,...props.style};
    },[color,textColor,props.style]);


    const renderIcon = useMemo(()=>{
        if(props.icon) return React.cloneElement(props.icon,{
            className: joinTrim([ns.e('icon')])
        });
    },[props.icon]);

    const renderCloseIcon = useMemo(()=>{
        if(closeable) return <AuntIconX size={14} className={ns.e('close-icon')}
            onClick={e => {
                e.stopPropagation();
                props.onClose && props.onClose(e);
            }}
        ></AuntIconX>;
    },[closeable]);

    return <div className={varClasses} style={varStyles} onClick={props.onClick}>
        { renderIcon }
        <span className={ns.e('text')}>{props.children}</span>
        { renderCloseIcon }
    </div>;
});