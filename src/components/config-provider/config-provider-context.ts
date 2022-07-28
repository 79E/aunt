import { createContext, Context } from 'react';
import { zhCN as locale } from '../../locales';
import { ConfigProviderProps } from './types';

export const defaultPrefix = 'aunt';

export type ConfigProviderContextState = {
    prefix: string;
} & Pick<ConfigProviderProps, 'locale'>;


export const INITIAL_STATE: ConfigProviderContextState = {
    prefix: defaultPrefix,
    locale,
};

const ConfigProviderContext: Context<ConfigProviderContextState> = createContext(INITIAL_STATE);

export default ConfigProviderContext;
