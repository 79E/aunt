import { BaseTypeProps } from '../../utils';
import type { Locale } from '../../locales/types';

export interface ConfigProviderProps extends BaseTypeProps {
    /**
     * @name 主题配置
     * @default ''
     */
    theme?: Record<string, string | number>;
    /**
     * @name 语言
     * @default ''
     */
    locale?: Locale;
    /**
     * @name 标签
     * @default ''
     */
    tag?: keyof HTMLElementTagNameMap;
}
  