import React, { FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import CheckBoxContext from './checkbox-context';
import { CheckboxGroupProps } from './types';
import { joinTrim } from '../../utils';
import { useMergedState,useNamespace } from '../../hooks';

const CheckBoxGroup:FunctionComponent<CheckboxGroupProps> = ((props) => {
  
  const { defaultValue = [], direction='vertical', shape = 'square' } = props;

  const { prefix } = useContext(ConfigProviderContext);
  const ns = useNamespace('checker-group',prefix);

  const [checked, setChecked] = useMergedState({
    value: props.value,
    defaultValue: defaultValue,
  });

  const toggle = (name: Array<string | number>) => {
    setChecked(name);
    props.onChange?.(name);
  };

  return (
    <CheckBoxContext.Provider value={{ parent: { props:{...props, shape} }, toggle, checked }}>
      <div className={joinTrim([
        ns.b(),
        ns.m(direction),
        props.className,
      ])}>
        { props.children }
      </div>
    </CheckBoxContext.Provider>
  );
});

export default CheckBoxGroup;
