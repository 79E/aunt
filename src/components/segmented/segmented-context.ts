import { createContext, Context } from 'react';
import { SegmentedGroupProps } from './types';

export interface ToggleRef {
  e?: React.MouseEvent<HTMLDivElement>,
  width: number,
  height?: number,
  offsetLeft?: number,
  index: number
}

export interface SegmentedContextState {
  parent?: { props: SegmentedGroupProps };
  toggle?: (name: string, ref:ToggleRef) => void;
  checked?: string
}

const SegmentedContext: Context<SegmentedContextState> = createContext({});

export default SegmentedContext;
