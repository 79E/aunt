import React, { useRef, FunctionComponent, useContext, useMemo, useCallback, useEffect } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { AuntIconChevronLeft } from '../icon/icons';
import { useNamespace } from '../../hooks';
import { joinTrim, addUnit, getRect } from '../../utils';
import { NavBarProps } from './types';

export const NavBar:FunctionComponent<NavBarProps> = ((props) => {

    const { bottomLine = true,leftContent = <AuntIconChevronLeft viewBox="8 0 24 24" /> } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('nav-bar',prefix);

    const navBarRef = useRef(null);

    const navBarHeight = getRect(navBarRef).height;

    const renderLeft =()=>{
        return <div className={ns.e('left')}
            onClick={(e)=>{
                if(props.onClickLeft) props.onClickLeft(e);
            }}
        >
            {leftContent}
        </div>;
    };

    const renderTitle =()=>{
        return <div className={joinTrim([
            ns.e('title'),
            'aunt-ellipsis'
        ])}>
            {props.title}
        </div>;
    };

    const renderRight =()=>{
        return <div className={ns.e('right')} 
            onClick={(e)=>{
                if(props.onClickRight) props.onClickRight(e);
            }}
        >
            {props.rightContent}
        </div>;
    };

    const renderPlaceholder = ()=>{
        if (props.fixed && props.placeholder) {
            return (
            <div
                className={ns.e('placeholder')}
                style={{ height: navBarHeight ? `${navBarHeight}px` : undefined }}
            />
            );
        }
        return null;
    };

    return <>
        {renderPlaceholder()}
        <div 
            ref={navBarRef}
            className={
                joinTrim([
                    ns.b(),
                    props.safeAreaInsetTop ? ns.m('safe-area-inset-top'):'',
                    bottomLine ? ns.m('border') : '',
                    props.fixed ? ns.m('fixed') : '',
                    props.className
                ])
            } 
            style={{
                paddingTop: addUnit(props.statusBarHeight),
                ...props.style
            }}
        >   
            {renderLeft()}
            {renderTitle()}
            {renderRight()}
        </div>
    </>;
});