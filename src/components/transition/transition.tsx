import React, { FunctionComponent, useMemo } from 'react';
import ReactTransition from 'react-transition-group/Transition';
import { TransitionProps, TransitionStyles } from './types';

export const Transition: FunctionComponent<TransitionProps> = props => {
  const {
    children = <div />,
    in: transIn,
    timeout = 500,
    mountOnEnter = true,
    unmountOnExit = true,
    ...rest
  } = props;

  const varTransitionStyles: TransitionStyles = useMemo(() => {
    if (props.transitionStyles) return props.transitionStyles;
    return {
      entering: {
        opacity: 1,
        transition: `opacity ${timeout}ms`,
      },
      entered: {
        opacity: 1,
      },
      exiting: {
        opacity: 0,
        transition: `opacity ${timeout}ms`,
      },
      exited: {
        opacity: 0,
      },
      unmounted: {},
    };
  }, [props.transitionStyles, timeout]);

  return (
    <ReactTransition
      in={transIn}
      timeout={timeout}
      classNames={props.className}
      style={props.style}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
      {...rest}
    >
      {state => (
        <div
          style={{
            ...varTransitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </ReactTransition>
  );
};
