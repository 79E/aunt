import React, { useMemo, FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace } from '../../hooks';
import { joinTrim, addUnit } from '../../utils';
import { ProgressProps, PercentPosition } from './types';


export const Progress:FunctionComponent<ProgressProps> = ((props) => {

    const {
        showPercent = true,
        percentPosition = 'right',
        trackColor,
        progressColor,
        duration = 300
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('progress',prefix);
    
    const varClasses = useMemo(()=>{
        return joinTrim([
            ns.b(),
            props.className
        ]);
    },[]);
    
    const currentFilleted = useMemo(()=>{
        return addUnit(props.filleted);
    },[props.filleted]);

    const currentStroke = useMemo(()=>{
        const stroke = percentPosition === 'innerLeft' && !props.stroke ? 18 : addUnit(props.stroke);
        return stroke;
    },[props.stroke]);

    const currentDuration = useMemo(()=>{
        return `${(duration / 1000)}s`;
    },[duration]);

    const currentPercentage = useMemo(()=>{
        const percentage = Math.min(100, Math.max(props.percentage, 0));
        return percentage;
    },[props.percentage]);

    const renderText = (position: PercentPosition)=>{
        if(!showPercent) return null;
        
        if(position === percentPosition){
            if(props.renderPercent != void 0){
                return props.renderPercent(currentPercentage);
            }
            const textClasses = joinTrim([
                ns.e('text'),
                ns.em('text',percentPosition)
            ]);
            return <span 
                className={textClasses}
                style={{
                    color:progressColor
                }}
            >{currentPercentage}%</span>;
        }
        return null;
    };

    return <div className={varClasses}>   
        { renderText('left') }
        <div className={ns.e('track')} style={{
            backgroundColor:trackColor,
            height: currentStroke,
            borderRadius:currentFilleted
        }}>
            <div className={ns.e('bar')} style={{
                width:`${currentPercentage}%`,
                backgroundColor:progressColor,
                height: currentStroke,
                borderRadius:currentFilleted,
                transition:`width linear ${currentDuration}`
            }}>
                {percentPosition === 'follow' ? (
                    <div className={ns.m('wrapper')}> {renderText('follow')} </div>
                ) : null}
            </div>
        </div>
        { renderText('right') }
        { renderText('innerLeft') }
    </div>;
});