import React, { useMemo, FunctionComponent, useContext } from 'react';
import ReactDOM from 'react-dom';
import ConfigProviderContext from '../config-provider/config-provider-context';
import Transition from '../transition';
import { joinTrim } from '../../utils';
import { useNamespace } from '../../hooks';
import { NotifyProps } from './types';

const Notify: FunctionComponent<NotifyProps> = props => {
  const { type = 'danger' } = props;
  const { prefix } = useContext(ConfigProviderContext);
  const ns = useNamespace('notify', prefix);

  const varStyles = useMemo(() => {
    const styles: React.CSSProperties = {};
    if (props.color) {
      styles.color = props.color;
    }
    if (props.background) {
      styles.background = props.background;
    }
    return {
      ...styles,
      ...props.style,
    };
  }, [props.style, props.background, props.color]);

  const contentRender = () => {
    const node = props.content || props.children;
    if (!React.isValidElement(node)) {
      return (
        <div
          className={joinTrim([ns.e('type'), ns.em('type', type), props.className])}
          style={varStyles}
          onClick={props.onClick}
        >
          {node}
        </div>
      );
    }
    return React.cloneElement(node, {
      onClick: props.onClick,
      ...node.props,
    });
  };

  return ReactDOM.createPortal(
    <Transition
      timeout={300}
      in={props.visible}
      onEntered={props.onEntered}
      onExited={props.onExited}
      transitionStyles={{
        entering: {
          transform: 'translateY(-200%)',
        },
        entered: {
          transform: 'translateY(0%)',
        },
        exiting: {
          transform: 'translateY(-200%)',
        },
        exited: {},
        unmounted: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          transform: 'translateY(-200%)',
          transition: 'transform 300ms',
        },
      }}
    >
      {contentRender()}
    </Transition>,
    document.body
  );
};

export default Notify;
