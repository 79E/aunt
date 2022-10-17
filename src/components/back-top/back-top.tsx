import React, { useMemo, FunctionComponent, useContext, useEffect, useState } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { AuntIconArrowUp } from '../icon/icons';
import { Transition } from '../transition';
import { addUnit, joinTrim, getScroll } from '../../utils';
import { useNamespace, useScrollTo } from '../../hooks';
import { BackTopProps } from './types';

export const BackTop:FunctionComponent<BackTopProps> = ((props) => {
    
    const { 
        duration = 400, 
        offset = [20,40], 
        visibilityHeight = 400,
        shape = 'square',
        icon = <AuntIconArrowUp />
    } = props;

    const [visible, setVisible] = useState(false);

    const ref = React.createRef<HTMLDivElement>();
    const scrollEvent = React.useRef<any>();
    const defaultTarget = ref.current && ref.current.ownerDocument ? ref.current.ownerDocument : window;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('back-top',prefix);

    const varStyle = useMemo(()=>{
        const styles:React.CSSProperties = {};
        if(Array.isArray(offset)){
            styles.right = addUnit(offset[0]);
            styles.bottom = addUnit(offset[1]);
        }else {
            styles.right = addUnit(offset);
            styles.bottom = addUnit(offset);
        }

        return {
            ...styles,
            ...props.style
        };
    },[offset, props.style]);

    const renderContent = ()=>{
        if(props.children) {
            return props.children;
        }
        return <div className={joinTrim([
            ns.e('content'),
            ns.m(shape)
        ])}>
            { icon }
        </div>;
    };

    const handleScroll = (e: React.UIEvent<HTMLElement> | { target: any }) => {
        const scrollTop = getScroll(e.target, true);
        setVisible(scrollTop > visibilityHeight);
    };

    const bindScrollEvent = () => {
        const container = props.target || defaultTarget;
        scrollEvent.current = container.addEventListener('scroll', (e) => {
          handleScroll(e);
        });
        handleScroll({ target: container });
    };

    useEffect(()=>{
        bindScrollEvent();
        return () => {
          if (scrollEvent.current) {
            scrollEvent.current.remove();
          }
        };
    },[props.target]);

    const scrollToTop = (e: React.MouseEvent<HTMLDivElement>) => {
        useScrollTo(0, {
          container: props.target || defaultTarget,
          duration,
        });
        if (typeof props.onClick === 'function') {
            props.onClick(e);
        }
    };

    return <Transition
        type={props.transitionType}
        in={visible} 
        timeout={duration}    
    >
        <div className={joinTrim([
            ns.b(),
            props.className
        ])} 
        style={varStyle}
        onClick={scrollToTop}
        >
            {renderContent()}
        </div>
    </Transition>;
});