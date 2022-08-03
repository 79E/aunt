import React, { FunctionComponent } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import { TransitionProps } from './types';

export const Transition:FunctionComponent<TransitionProps> = ((props) => {

    const {
        children = <div />,
        type,
        in: transIn,
        timeout = 300,
        mountOnEnter = true,
        unmountOnExit = true,
        ...rest
    } = props;

    return (
        <CSSTransition
            in={transIn}
            timeout={timeout}
            classNames={type}
            mountOnEnter={mountOnEnter}
            unmountOnExit={unmountOnExit}
            {...rest}
        >
            {children}
        </CSSTransition>
    );
});