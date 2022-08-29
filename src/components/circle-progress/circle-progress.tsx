import React, { useMemo, FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace } from '../../hooks';
import { CircleProgressProps } from './types';
import { joinTrim, isObject, getSizeStyle } from '../../utils';

let uid = 79;

function getPath(clockwise: boolean, viewBoxSize: number) {
    const sweepFlag = clockwise ? 1 : 0;
    return `M ${viewBoxSize / 2} ${
      viewBoxSize / 2
    } m 0, -500 a 500, 500 0 1, ${sweepFlag} 0, 1000 a 500, 500 0 1, ${sweepFlag} 0, -1000`;
}

export const CircleProgress:FunctionComponent<CircleProgressProps> = ((props) => {

    const { 
        strokeWidth = 50,
        clockwise = false,
        strokeLinecap,
        fill = 'none',
        trackColor,
        progressColor,
        showPercent = true,
        duration = 300
    } = props;

    const id = `aunt-circle-progress-${uid++}`;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('circle-progress',prefix);

    const currentPercentage = useMemo(()=>{
        const percentage = Math.min(100, Math.max(props.percentage, 0));
        return percentage;
    },[props.percentage]);

    const viewBoxSize = useMemo(() => + strokeWidth + 1000, [strokeWidth]);

    const path = useMemo(() => getPath(clockwise, viewBoxSize), [clockwise, viewBoxSize]);

    const renderTrack = () => {
        
        const style = {
          fill: fill,
          stroke: trackColor,
          strokeWidth: `${strokeWidth}px`,
        };

        return <path className={ns.e('track')} style={style} d={path} />;
    };

    const renderProgress = () => {

        const PERIMETER = 3140;
        const offset = (PERIMETER * currentPercentage) / 100;
        const color = isObject(progressColor) ? `url(#${id})` : progressColor;

        const style: React.CSSProperties = {
            stroke: color,
            strokeWidth: `${+strokeWidth + 1}px`,
            strokeLinecap: strokeLinecap,
            strokeDasharray: `${offset}px ${PERIMETER}px`,
            transition: `stroke-dasharray ${+duration / 1000}s linear`
        };
    
        return <path d={path} style={style} className={ns.e('hover')} stroke={color} />;
    };

    const renderGradient = () => {
        
        if (!isObject(progressColor)) {
          return null;
        }
    
        const Stops = Object.keys(progressColor)
          .sort((a, b) => parseFloat(a) - parseFloat(b))
          .map((key, index) => <stop key={index} offset={key} stopColor={progressColor[key]} />);

        return (
            <defs>
                <linearGradient id={id} x1="100%" y1="0%" x2="0%" y2="0%">
                    {Stops}
                </linearGradient>
            </defs>
        );
      };

    const renderText = () => {
        if(!showPercent){
            return null; 
        }

        if (props.children) {
            return <div className={joinTrim([ns.m('middle')])}>
                {props.children}
            </div>;
        }

        return <div className={joinTrim([ns.e('text'),ns.m('middle')])}
            style={{
                color: isObject(progressColor) ? 'none' : progressColor
            }}
        >{currentPercentage}%</div>;
    };

    return <div 
        className={joinTrim([ns.b(), props.className])}
        style={{
            ...props.style,
            ...getSizeStyle(props.diameter)
        }}
    >
        <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} style={{}}>
            {renderGradient()}
            {renderTrack()}
            {renderProgress()}
        </svg>
        {renderText()}
    </div>;
});