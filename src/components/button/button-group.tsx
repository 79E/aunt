import React, { useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import ButtonContext from './button-context';
import { useNamespace } from '../../hooks';
import { joinTrim } from '../../utils';
import { ButtonGroupProps } from './types';

const ButtonGroup = (props: ButtonGroupProps) => {
  const { shape = 'default', type = 'default' } = props;

  const internalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (props.disabled) return;
    props.onClick?.(e);
  };

  const { prefix } = useContext(ConfigProviderContext);
  const ns = useNamespace('button', prefix);

  return (
    <div
      className={joinTrim([
        props.className,
        ns.e('group'),
        ns.em('group', type),
        ns.em('group__shape', shape),
        props.disabled ? ns.em('group', 'disabled') : '',
      ])}
      style={props.style}
      onClick={internalClick}
    >
      <ButtonContext.Provider
        value={{
          parent: {
            ...props,
            shape: 'square',
          },
        }}
      >
        {props.children}
      </ButtonContext.Provider>
    </div>
  );
};

export default ButtonGroup;
