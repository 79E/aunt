import React, { useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import RadioContext, { RadioContextState } from './radio-context';
import { RadioGroupProps, RadioValueType } from './types';
import { useNamespace, useMergedState } from '../../hooks';
import { joinTrim } from '../../utils';


function RadioGroup<T = RadioValueType>(props: RadioGroupProps<T>) {

  const { direction='vertical' } = props;

  const { prefix } = useContext(ConfigProviderContext);
  const ns = useNamespace('checker-group',prefix);

  const [checked, setChecked] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  });

  const toggle = (name: T) => {
    setChecked(name);
    props.onChange?.(name);
  };

  return (
    <RadioContext.Provider value={{ parent: { props }, toggle, checked } as RadioContextState<any>}>
      <div
        className={joinTrim([
          ns.b(),
          ns.m(direction),
          props.className
        ])}
        style={props.style}
        role="radiogroup"
      >
        {props.children}
      </div>
    </RadioContext.Provider>
  );
}

export default RadioGroup;
