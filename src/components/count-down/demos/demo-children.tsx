import React from "react";
import { CountDown } from 'aunt';

export default ()=>(
    <CountDown time={24 * 60 * 60 * 1000} millisecond format="DD:HH:mm:ss">
        {(timeData) => (
            <>
                <span className="demo-count-down__block">{timeData.hours}</span>
                <span>:</span>
                <span className="demo-count-down__block">{timeData.minutes}</span>
                <span>:</span>
                <span className="demo-count-down__block">{timeData.seconds}</span>
            </>
        )}
    </CountDown>
);