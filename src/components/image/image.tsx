import React, { CSSProperties, FunctionComponent, useContext, useMemo, useRef, useState, useEffect } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { addUnit, isDef, joinTrim } from '../../utils';
import { useNamespace } from '../../hooks';
import { ImageProps } from './types';

export const Image:FunctionComponent<Partial<ImageProps>> = ((props: ImageProps) => {

    const {
        fit, 
        errorIcon, 
        loadingIcon, 
        showError, 
        showLoading, 
        block, 
        round
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('image',prefix);

    const [status, setStatus] = useState({ loading: true, error: false });
    const imgRef = useRef<HTMLImageElement>(null);

    const varStyles = useMemo(() => {
        const internalStyle: CSSProperties = { ...props.style };
    
        if (isDef(props.width)) {
          internalStyle.width = addUnit(props.width);
        }
    
        if (isDef(props.height)) {
          internalStyle.height = addUnit(props.height);
        }
    
        if (isDef(props.radius)) {
          internalStyle.overflow = 'hidden';
          internalStyle.borderRadius = addUnit(props.radius);
        }
    
        return internalStyle;
    }, [props.style]);

    const varClasses = useMemo(()=>{
        return joinTrim([
          ns.b(),
          block ? ns.m('block') :'',
          round ? ns.m('round') :'',
          props.className
        ]);
    },[block, round, props.className]);

    useEffect(() => {
        const payload = { error: false, loading: true } as typeof status;
        if (imgRef.current) {
          if (imgRef.current.complete) {
            payload.loading = false;
          } else {
            payload.loading = true;
          }
        }
        setStatus(payload);
    }, [props.src]);


    const onLoad = (e:React.MouseEvent<HTMLImageElement>) => {
        setStatus({ loading: false, error: false  });
        props.onLoad?.(e);
    };
    
    const onError = (e:React.MouseEvent<HTMLImageElement>) => {
        setStatus({ error: true, loading: false });
        props.onLoad?.(e);
    };

    const renderImage = () => {
        if (status.error || !props.src) {
          return null;
        }
        const attrs = {
          className: ns.e('img'),
          style: {
            objectFit: fit,
          },
        };
        return (
          <img
            ref={imgRef}
            alt={props.alt || 'img'}
            src={props.src}
            onLoad={onLoad}
            onError={onError}
            {...attrs}
          />
        );
    };

    const renderLoadingIcon = () => {
        if (loadingIcon)
          return React.cloneElement(loadingIcon as React.ReactElement, {
            className: ns.em('loading','icon'),
            fontSize: props.iconSize,
          });
        return null;
    };
    
    const renderErrorIcon = () => {
        if (errorIcon) {
            return React.cloneElement(errorIcon as React.ReactElement, {
                className: ns.em('error','icon'),
                fontSize: props.iconSize,
            });
        }
        return null;
    };

    const renderPlaceholder = () => {
        if (status.loading && showLoading) {
          return (
            <div className={ns.e('loading')} onClick={props.onClick}>
              {renderLoadingIcon()}
            </div>
          );
        }
        if (status.error && showError) {
          return (
            <div className={ns.e('error')} onClick={props.onClick}>
              {renderErrorIcon()}
            </div>
          );
        }
        return null;
    };

    return <div
        className={varClasses}
        style={varStyles}
    >
        {renderImage()}
        {renderPlaceholder()}
        {props.children}
    </div>;
});