import React, { FunctionComponent, useContext, useRef, CSSProperties, useEffect } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import Transition from '../transition';
import { useNamespace } from '../../hooks';
import { joinTrim } from '../../utils';
import { OverlayProps } from './types';

export const Overlay: FunctionComponent<OverlayProps> = props => {
  const { visible = false, duration = 500, lockScroll = true, ...rest } = props;

  const { prefix } = useContext(ConfigProviderContext);
  const ns = useNamespace('overlay', prefix);

  const nodeRef = useRef(null);

  const renderOverlay = () => {
    const styles: CSSProperties = {
      zIndex: props.zIndex !== undefined ? +props.zIndex : undefined,
      touchAction: lockScroll ? 'none' : undefined,
      ...props.style,
    };

    return (
      <div
        ref={nodeRef}
        style={styles}
        onClick={props.onClick}
        className={joinTrim([ns.b(), props.className])}
      >
        <div
          className={ns.e('content')}
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {props.children}
        </div>
      </div>
    );
  };

  return (
    <Transition
      in={visible}
      timeout={duration}
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
      onEnter={props.onEnter}
      onEntered={props.onEntered}
      onExit={props.onExit}
      onExited={props.onExited}
      transitionStyles={props.transitionStyles}
      {...rest}
    >
      {renderOverlay()}
    </Transition>
  );
};
