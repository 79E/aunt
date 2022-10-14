import React, { useRef, FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace, useMergedState } from '../../hooks';
import { getRect, joinTrim, getZIndexStyle } from '../../utils';
import { TabbarProps } from './types';

export const Tabbar:FunctionComponent<TabbarProps> = ((props) => {

    const { 
        defaultValue = 0,
        fixed = true,
        border = true,
        activeColor = '#165DFF'
     } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('tabbar',prefix);

    const [current, setCurrent] = useMergedState({
        value: props.value,
        defaultValue: defaultValue,
    });
    const root = useRef<HTMLDivElement>();
    const { height } = getRect(root);

    const enableSafeArea = () => props.safeAreaInsetBottom ?? fixed;

    const setActive = (active: number | string) => {
        if (active !== props.value) {
            props.onChange?.(active);
            setCurrent(active);
        }
    };

    const renderPlaceholder = (renderContent: any) => {
        return (
            <div className={ns.e('placeholder')} style={{ height }}>
                {renderContent()}
            </div>
        );
    };

    const renderTabbar = ()=>{
        return (
            <div 
            className={joinTrim([
                ns.b(),
                fixed ? ns.m('fixed') : '',
                border ? 'aunt-hairline--top':'',
                enableSafeArea() ? 'aunt-safe-area-bottom':'',
                props.className
            ])}
            style={{...props.style,...getZIndexStyle(props.zIndex)}}
            >
                {
                    React.Children.map(
                        props.children, 
                        (child, index) => {
                            if (!React.isValidElement(child)) {
                                return child;
                            }
                            return React.cloneElement(child, {
                                index,
                                parent: {
                                    value:current,
                                    activeColor,
                                    ...props
                                },
                                setActive
                            } as Partial<{}>);
                        }
                    )
                }
            </div>
        );
    };

    if (fixed && props.placeholder) {
        return renderPlaceholder(renderTabbar);
    }

    return renderTabbar();
});