import React, { CSSProperties, FunctionComponent, useMemo } from 'react'
import { kebabCase } from '../../utils'
import ConfigProviderContext, { INITIAL_STATE } from './config-provider-context';
import { ConfigProviderProps } from './types'



const defaultProps: ConfigProviderProps = {
    tag : 'div',
}

function mapThemeVarsToCSSVars(themeVars: Record<string, string | number>, prefix: string) {
    const cssVars: Record<string, string | number> = {};
    Object.keys(themeVars).forEach((key) => {
      if (key.toString().startsWith(`--${prefix}-`)) {
        cssVars[key] = themeVars[key];
      } else {
        cssVars[`--${prefix}-${kebabCase(key)}`] = themeVars[key];
      }
    });
    return cssVars;
}

export const ConfigProvider:FunctionComponent<ConfigProviderProps> = ((props) => {
    const {
        className,
        style,
        theme,
        tag,
        children,
        ...rest
    } = {
        ...defaultProps,
        ...props,
    }

    const classPrefix = `${INITIAL_STATE.prefix}-config-rovider`

    const TagElement = tag as React.ElementType;


    const varStyles = useMemo<CSSProperties | undefined>(() => {
        if (theme) {
          return { ...style, ...mapThemeVarsToCSSVars(theme, INITIAL_STATE.prefix) };
        }
        return style;
    }, [style, theme]);
    
    return (
        <ConfigProviderContext.Provider value={{ ...INITIAL_STATE, ...props }} >
            <TagElement className={`${classPrefix} ${className}`} style={varStyles} {...rest}>
                {children}
            </TagElement>
        </ConfigProviderContext.Provider>
    )
})


ConfigProvider.defaultProps = defaultProps
ConfigProvider.displayName = 'AuntConfigProvider'