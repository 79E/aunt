import React, { useMemo, FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace } from '../../hooks';
import { StepsItemProps } from './types';
import { joinTrim } from '../../utils';

export const StepsItem:FunctionComponent<StepsItemProps> = ((props) => {

    const { 
        parent: parentProps,
        index = 0
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('steps-item',prefix);

    const getStatus = () => {
        const active = +(parentProps?.active || 0);
        if (index < active) {
          return 'finish';
        }
        return index === active ? 'process' : 'waiting';
    };
    
    const isActive = () => getStatus() === 'process';

    const Dot = ()=>{
        return <div className={ns.e('dot')}></div>;
    };
    const icon = useMemo(()=>{
        const finishIcon = props.finishIcon || parentProps?.finishIcon;
        if(getStatus() === 'finish' && finishIcon){
            return finishIcon;
        }
        const activeIcon = props.activeIcon || parentProps?.activeIcon;
        if(isActive() && activeIcon){
            return activeIcon;
        }
        const inactiveIcon = props.inactiveIcon || parentProps?.inactiveIcon;
        if(getStatus() === 'waiting' && inactiveIcon){
            return inactiveIcon;
        }
        return <Dot />;
    },[props, parentProps]);

    const colors = useMemo(()=>{

        const activeColor = props.activeColor || parentProps?.activeColor;
        const inactiveColor = props.inactiveColor || parentProps?.inactiveColor;

        return {
            lineColor: getStatus() === 'finish' ? parentProps?.activeColor : parentProps?.inactiveColor,
            iconColor : getStatus() === 'process' || getStatus() === 'finish' ? activeColor : inactiveColor,
            titleColor: isActive() ? activeColor : getStatus() === 'finish' ? '#272e3b' : inactiveColor
        };
    },[parentProps,props]);

    const renderContent = useMemo(()=>{
        if(props.renderContent){
            return React.createElement('div',{
                className:ns.e('content')
            },props.renderContent);;
        }
        return <div className={ns.e('content')}>
            <div className={ns.em('content','title')} style={{
                color: colors.titleColor
            }}>{props.title}</div>
            {!!props.description && (
                <div className={ns.em('content','description')}>{props.description}</div>
            )}
        </div>;
    },[props]);

    return <div className={
        joinTrim([
            ns.b(),
            props.className
        ])
    }
    style={props.style}
    onClick={()=>{
        parentProps?.onClickStep?.(index);
    }}
    >   
        <div className={ns.e('indicator')} style={{
            color: colors.lineColor
        }}>
            <div className={ns.em('indicator', 'icon')} 
            style={{
                color: colors.iconColor
            }}
            >{icon}</div>
        </div>
        {renderContent}
    </div>;
});