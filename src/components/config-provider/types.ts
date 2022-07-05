import React from "react"
import { BaseTypeProps } from '../../utils'
import type { Locale } from '../../locales/types';

export interface ConfigProviderProps extends BaseTypeProps {
    theme?: Record<string, string | number>;
    locale?: Locale;
    tag?: keyof HTMLElementTagNameMap;
}
  