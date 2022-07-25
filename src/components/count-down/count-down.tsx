import React, { useImperativeHandle, forwardRef, useContext, useEffect, useMemo } from 'react'
import ConfigProviderContext from '../config-provider/config-provider-context'
import { CountDownInstance,CountDownProps } from './types'
import { useCountDown, useNamespace } from '../../hooks'
import { parseFormat } from '../../utils'


const defaultProps:CountDownProps = {
    autoStart: true,
    time: 0,
    format: 'HH:mm:ss',
    millisecond: false,
    onChange:()=>{},
    onFinish:()=>{},
}

export const CountDown = forwardRef<CountDownInstance, CountDownProps>((props:CountDownProps,ref) => {
    const {
        time, millisecond, format, autoStart
    } = {
        ...defaultProps,
        ...props
    }
    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('count-down', prefix)
    

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

    const timeText = useMemo(() => parseFormat(format as string, current), [current]);

    useEffect(()=>{
        resetTime();
        return ()=>{
            pause();
        }
    },[time])

    useImperativeHandle(ref, () => ({
        start,
        pause,
        reset: resetTime,
      }));

    return <div className={`${ns.b()}`} style={props.style}>   
        {props.children ? props.children(current) : timeText}
    </div>
})


CountDown.defaultProps = defaultProps
CountDown.displayName = 'AuntCountDown'