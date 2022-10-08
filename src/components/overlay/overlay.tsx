import React, { FunctionComponent, useContext, useRef, CSSProperties, useEffect } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import Transition from '../transition';
import { useNamespace } from '../../hooks';
import { isDef, joinTrim } from '../../utils';
import { OverlayProps } from './types';

export const Overlay:FunctionComponent<OverlayProps> = ((props) => {
    
    const {
        visible = false, 
        duration = 500,
        lockScroll = true 
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('overlay',prefix);

    const nodeRef = useRef(null);

    const renderOverlay = () => {
        const styles: CSSProperties = {
          zIndex: props.zIndex !== undefined ? +props.zIndex : undefined,
          touchAction: lockScroll && 'none',
          ...props.style,
          ...props.customStyle,
        };
    
        if (isDef(duration)) {
          styles.animationDuration = `${duration}ms`;
        }
    
        return (
          <div
            ref={nodeRef}
            style={styles}
            onClick={props.onClick}
            className={joinTrim([
                ns.b(),
                props.className
            ])}
          >
            <div className={ns.e('content')} onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
            }}>
                {props.children}
            </div>
          </div>
        );
    };

    return <Transition
        type={ns.m('vanish')}
        in={visible}
        timeout={duration}
        nodeRef={nodeRef}
        mountOnEnter
        unmountOnExit
    >
        {renderOverlay()}
    </Transition>;
});