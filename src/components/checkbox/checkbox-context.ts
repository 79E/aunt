import { createContext, Context } from 'react';
import { CheckboxGroupProps } from './types';

export interface CheckboxContextState {
  parent?: { props: CheckboxGroupProps };
  toggle?: (names: Array<string | number>) => void;
  checked?: (string | number)[];
}

const CheckboxContext: Context<CheckboxContextState> = createContext({});

export default CheckboxContext;
