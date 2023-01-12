import React, { FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import Overlay from '../overlay'
import Transition from '../transition';
import { useNamespace } from '../../hooks';
import { joinTrim } from '../../utils';
import type { DialogProps, DialogAction } from './types';

export const Dialog: FunctionComponent<DialogProps> = props => {
    
    const {
        actions = [],
        direction = 'horizontal'
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('dialog', prefix);

    const renderHeader = ()=>{
        if(props.header) return props.header;
        if(props.headerImage) return <img className={ns.m('header-image')} src={props.headerImage} alt="" />
        return null;
    }

    const renderTitle = ()=>{
        if(!props.title) return null;
        let element = <p>{props.title}</p>
        if(React.isValidElement(props.title)){
            element = props.title;
        }
        return <div className={joinTrim([
            ns.e('title')
        ])}>
            {element}
        </div>
    }

    const renderContent = ()=>{
        let element = <p>{props.content}</p>
        if(React.isValidElement(props.content)){
            element = props.content;
        }
        return <div className={joinTrim([
            ns.e('content'),
            props.contentClass
        ])} style={props.contentStyle}>
            {element}
        </div>
    }

    const renderAction = (item: DialogAction, index:number)=>{
        return <div key={item.key} className={joinTrim([
            ns.e('action'),
            direction === 'horizontal' ? ns.em('action','horizontal') : ns.em('action','vertical'),
            item.bold ? ns.em('action','bold') : '',
            item.danger ? ns.em('action','danger') : '',
            item.disabled ? ns.em('action','disabled') : '',
        ])}
        onClick={(e)=>{
            props.onAction?.(item, index);
            if(item.disabled) return;
            item.onClick?.(e);
            if(props.closeOnAction) props.onClose?.();
        }}
        >
            {item.text}
        </div>
    }

    const renderFooter = ()=>{
        if(React.isValidElement(props.renderAction)) return props.renderAction;
        return <div className={joinTrim([
            ns.e('footer'),
            direction === 'horizontal' ? ns.em('footer','horizontal') : ns.em('footer','vertical'),
        ])}
        >
            {
                actions.map((item, index)=> renderAction(item, index))
            }
        </div>
    }

    const transitionStyles = {
        // 进入时
        entering: { 
            opacity: 1,
            transform: 'translate(-50%,-50%) scale3d(1, 1, 1) ',
        },
        // 已经进入
        entered:  { 
            opacity: 1,
            transform: 'translate(-50%,-50%) scale3d(1, 1, 1) ',
        },
        // 退出时
        exiting:  { 
            opacity: 0,
            transform: 'translate(-50%,-50%) scale3d(0.9, 0.9, 0.9) ',
        },
        // 已经退出
        exited:  { 
            opacity: 0,
            transform: 'translate(-50%,-50%) scale3d(0.9, 0.9, 0.9)', 
        },
        // 未安装进入时
        unmounted: {
            opacity: 0,
            transform: 'translate(-50%,-50%) scale3d(0.9, 0.9, 0.9)', 
            transition: 'all 500ms'
        },
    }

    return <>
        <Overlay
            visible={props.visible}
            onClick={()=>{
                if(!props.closeOnOverlay) return;
                props.onClose?.();
            }}
            className={props.overlayClass}
            style={props.overlayStyle}
        />
        <Transition 
            in={props.visible} 
            transitionStyles={transitionStyles}
            onEntered={props.afterShow}
            onExited={props.afterClose}
        >
            <div className={joinTrim([
                props.className,
                ns.b(),
                ns.m('absolute'),
                renderHeader() ? '' : ns.m('margin'),
            ])}
            style={props.style}
            >
                {renderHeader()}
                {renderTitle()}
                {renderContent()}
                {renderFooter()}
            </div>
        </Transition>
    </>
};
