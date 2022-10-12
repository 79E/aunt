import React, { CSSProperties, FunctionComponent, useContext, useMemo} from 'react';
import {ButtonProps,} from './types';
import Loading from '../loading';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace } from '../../hooks';
import { joinTrim } from '../../utils';

export const Button:FunctionComponent<Partial<ButtonProps>> = ((props) => {
    const {
        color,
        shape = 'default',
        plain = false,
        hairline = false,
        loading = false,
        disabled = false,
        type = 'default',
        size = 'normal',
        block = false,
        children,
        iconPosition = 'left',
        icon,
        className,
        style,
        loadingText,
        ...rest
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('button',prefix);

    const varClasses = useMemo(()=>{
      return joinTrim([
        ns.b(),
        type ? ns.m(type) : '',
        size ? ns.m(size) : '',
        shape ? ns.em('shape',shape) : '',
        plain ? ns.m('plain') : '',
        block ? ns.m('block') : '',
        disabled ? ns.m('disabled') : '',
        hairline ? ns.m('hairline') : '',
        icon ? ns.e('icon') : '',
        loading ? ns.e('loading') : '',
        className
      ]);
    },[type,size,shape,plain,block,disabled,hairline,icon,loading,className]);

    const varStyles = useMemo(()=>{
      const styles: CSSProperties = {};
        if (color) {
          styles.color = plain ? color : '#fff';
          styles.background = !plain ? color : '#fff';
          if (color?.includes('gradient')) {
            styles.borderWidth = 0;
          }else{
            styles.borderColor = color;
          }
        }
        return {...style, ...styles};
    },[plain, color, style]);

    const handleClick = (event: any) => {
        if (!loading && !disabled && props.onClick) {
            props.onClick(event);
        }
    };

    const renderText = () => {
        let text;
        if (loading) {
          text = props.loadingText;
        } else {
          text = props.children || props.text;
        }
    
        if (text) {
          return (
            <div className={ns.e('text')}>
              {text}
            </div>
          );
        }
        return null;
    };
    
    const renderLoadingIcon = (position:string) => {
        if (loading) {
            const { loadingSize = '20px', loadingType } = props;
            return <Loading
                size={loadingSize}
                type={loadingType}
                color={type === 'default' ? undefined : ''}
                className={ns.em('icon',position)}
            />;
        }
        return null;
    };
    const renderIcon = (position:string) => {
        if (props.loading) {
          return renderLoadingIcon(position);
        }
    
        if (props.icon) {
          return React.cloneElement(props.icon, {
            className: ns.em('icon',position),
          });
        }
    
        return null;
      };

    return <div 
        className={varClasses}
        style={{ ...varStyles }}   
        {...rest}
        onClick={handleClick}
    >   
        {iconPosition === 'left' && renderIcon('left')}
        {renderText()}
        {iconPosition === 'right' && renderIcon('right')}
    </div>;
});