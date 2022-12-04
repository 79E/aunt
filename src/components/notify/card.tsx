import React, { FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace } from '../../hooks';
import { NotifyCardProps } from './types';
import { joinTrim } from '../../utils';

const Card: FunctionComponent<NotifyCardProps> = props => {
  const { iconPosition = 'left' } = props;

  const { prefix } = useContext(ConfigProviderContext);
  const ns = useNamespace('notify-card', prefix);

  const renderIcon = () => {
    if (!props.icon) return null;
    if (React.isValidElement(props.icon)) return props.icon;
    return (
      <img
        className={joinTrim([ns.e('icon'), ns.em('icon', iconPosition)])}
        src={props.icon as string}
        alt='icon'
      />
    );
  };

  return (
    <div
      className={joinTrim([ns.b(), props.className])}
      style={{
        ...props.style,
      }}
    >
      {renderIcon()}
      {/* <div className={ns.e('content')}></div> */}
      <p className={joinTrim([ns.em('content', 'title'), `${prefix}-ellipsis`])}>{props.title}</p>
      <p className={joinTrim([ns.em('content', 'describe'), `${prefix}-ellipsis`])}>
        {props.describe}
      </p>
    </div>
  );
};

export default Card;
