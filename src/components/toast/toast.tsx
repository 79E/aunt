import React, { useMemo, FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { AuntIconCheck, AuntIconX } from '../icon/icons';
import Loading from '../loading';
import { useNamespace } from '../../hooks';
import { joinTrim, isFunction } from '../../utils';
import type { ToastProps, ToastDirection, ToastIconSizeFunction } from './types';

export const Toast: FunctionComponent<ToastProps> = props => {
  const {
    type = 'info',
    direction = 'vertical',
    icon,
    loadingType = 'oval',
    message,
    position = 'center',
    iconSize = (direction: ToastDirection) => {
      if (direction === 'horizontal' && message) return 24;
      return 40;
    },
  } = props;

  const { prefix } = useContext(ConfigProviderContext);
  const ns = useNamespace('toast', prefix);

  const varClasses = useMemo(() => {
    return joinTrim([ns.b(), !props.forbidClick ? ns.m('pointer') : '', props.className]);
  }, [props.forbidClick, props.className]);

  const renderIcon = () => {
    const size =
      isFunction(iconSize) && typeof iconSize === 'function'
        ? iconSize(direction)
        : (iconSize as number | string);

    if (React.isValidElement(icon))
      return React.cloneElement(icon, {
        size: size,
        ...icon.props,
      });
    if (type === 'loading') {
      return <Loading type={loadingType} size={size} />;
    }
    if (type === 'success') {
      return <AuntIconCheck size={size} />;
    }
    if (type === 'fail') {
      return <AuntIconX size={size} />;
    }
    return null;
  };

  const renderContent = () => {
    return (
      <div
        className={joinTrim([
          ns.e('content'),
          ns.em('content', direction),
          ns.em('content', position),
          direction === 'horizontal' && type !== 'info' ? ns.em('content', 'spacing') : '',
        ])}
        style={props.style}
      >
        {renderIcon()}
        <span
          className={joinTrim([
            ns.em('content', 'text'),
            renderIcon() && direction === 'vertical' ? ns.em('content', 'margin') : '',
          ])}
        >
          {message}
        </span>
      </div>
    );
  };

  return <div className={varClasses}>{renderContent()}</div>;
};
