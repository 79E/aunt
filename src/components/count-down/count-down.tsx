import React, { useImperativeHandle, forwardRef, useContext, useEffect, useMemo } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { CountDownInstance,CountDownProps } from './types';
import { useCountDown, useNamespace } from '../../hooks';
import { parseFormat } from '../../utils';


export const CountDown = forwardRef<CountDownInstance, CountDownProps>((props, ref) => {
    
    const {
        time = 0, millisecond = false, format = 'HH:mm:ss', autoStart = true
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('count-down', prefix);
    

    const { start, pause, reset, current } = useCountDown({
        time:+time,
        millisecond,
        onChange: props.onChange,
        onFinish: props.onFinish,
    });

    const resetTime = () => {
        reset(+time);
        if (autoStart) {
          start();
        }
    };

    useEffect(()=>{
        resetTime();
        return ()=>{
            pause();
        };
    },[time]);

    const timeText = useMemo(() => parseFormat(format as string, current), [current]);

    useImperativeHandle(ref, () => ({
        start,
        pause,
        reset: resetTime,
    }));

    return <div className={`${ns.b()}`} style={props.style}>   
        {props.children ? props.children(current) : timeText}
    </div>;
});