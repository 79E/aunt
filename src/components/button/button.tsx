import React, { CSSProperties, FunctionComponent, useContext, useMemo} from 'react'
import {ButtonProps,} from './types'
import Loading from '../loading';
import ConfigProviderContext from '../config-provider/config-provider-context'
import { joinTrim } from '../../utils'

const defaultProps: ButtonProps = {
    className: '',
    color: '',
    shape: 'default',
    plain: false,
    hairline: false,
    loading: false,
    disabled: false,
    type: 'default',
    size: 'normal',
    loadingText:'',
    block: false,
    iconPosition:'left',
    style: {},
    children: undefined
}

export const Button:FunctionComponent<Partial<ButtonProps>> = ((props) => {
    const {
        color,
        shape,
        plain,
        hairline,
        loading,
        disabled,
        type,
        size,
        block,
        children,
        iconPosition,
        icon,
        className,
        style,
        loadingText,
        ...rest
    } = {
        ...defaultProps,
        ...props
    }

    const { prefix } = useContext(ConfigProviderContext);
    
    const classPrefix = `${prefix}-button`


    const varClasses = useMemo(()=>{
      return joinTrim([
        classPrefix,
        type ? `${classPrefix}--${type}` : '',
        size ? `${classPrefix}--${size}` : '',
        shape ? `${classPrefix}--shape--${shape}` : '',
        plain ? `${classPrefix}--plain` : '',
        block ? `${classPrefix}--block` : '',
        disabled ? `${classPrefix}--disabled` : '',
        hairline ? `${classPrefix}--hairline` : '',
        icon ? `${classPrefix}--icon` : '',
        loading ? `${classPrefix}--loading` : '',
        `${className}`
      ])
    },[])

    const varStyles = useMemo(()=>{
      const styles: CSSProperties = {}
        if (color) {
          styles.color = plain ? color : '#fff';
          styles.background = !plain ? color : '#fff';
          if (color?.includes('gradient')) {
            styles.borderWidth = 0
          }else{
            styles.borderColor = color
          }
        }
        return {...style, ...styles}
    },[])

    const handleClick = (event: any) => {
        if (!loading && !disabled && props.onClick) {
            props.onClick(event);
        }
    }

    const renderText = () => {
        let text;
        if (loading) {
          text = props.loadingText;
        } else {
          text = props.children || props.text;
        }
    
        if (text) {
          return (
            <div className={`${classPrefix}--text`}>
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
                className={ `
                    ${classPrefix}--icon--${position}
                `}
            />
        }
        return null;
    };
    const renderIcon = (position:string) => {
        if (props.loading) {
          return renderLoadingIcon(position);
        }
    
        if (props.icon) {
          return React.cloneElement(props.icon, {
            className: `
            ${classPrefix}--icon--${position}
            `,
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
    </div>
})


Button.defaultProps = defaultProps
Button.displayName = 'AuntButton'