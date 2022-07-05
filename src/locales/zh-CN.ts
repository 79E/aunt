import { base } from './base';
import type { Locale } from './types';

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type PartialLocale = DeepPartial<Locale>;

const zhCN = Object.assign({...base}, {});

const mergeLocale = (baseLocal: Locale, mergeLocal: PartialLocale): Locale => {
  return Object.assign({...baseLocal}, {...mergeLocal}) as Locale;
};

export { mergeLocale };

export default zhCN;
