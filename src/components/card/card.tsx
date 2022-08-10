import React, { FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace } from '../../hooks';
import { joinTrim, BORDER_BOTTOM, BORDER_TOP } from '../../utils';
import { CardProps,CardBodyProps,CardCoverProps,CardFooterProps,CardHeaderProps } from './types';

export const CardHeader:FunctionComponent<CardHeaderProps> = ((props) => {
    
    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('card-header',prefix);

    return (
        <div
            className={joinTrim([ns.b(),props.border ? BORDER_BOTTOM: '', props.className])}
            style={props.style}
            onClick={props.onClick}
        >
            <div className={ns.e('content')}>{props.children}</div>
            {props.extra && <div className={ns.e('extra')}>{props.extra}</div>}
        </div>
    );
});

export const CardBody:FunctionComponent<CardBodyProps> = ((props) => {
    
    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('card-body',prefix);

    return (
        <div className={joinTrim([ns.b(),props.className])} style={props.style} onClick={props.onClick}>
            {props.children}
        </div>
    );
});

export const CardFooter:FunctionComponent<CardFooterProps> = ((props) => {
    
    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('card-footer',prefix);

    return (
        <div
            className={joinTrim([
                ns.b(),
                props.border ? BORDER_TOP : '',
                props.compact ? ns.m('compact') : '',
                props.className
            ])}
            style={props.style}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
});

export const CardCover:FunctionComponent<CardCoverProps> = ((props) => {
    
    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('card-cover',prefix);

    return (
        <div className={joinTrim([ns.b(),props.className])} style={props.style} onClick={props.onClick}>
            {props.children}
        </div>
    );
});
const Card:FunctionComponent<CardProps> = ((props) => {
    
    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('card',prefix);
    
    const { round, border } = props;

    return (
        <div className={joinTrim([
            ns.b(),
            round ? ns.m('round') : '',
            border ? ns.m('border') : '',
            props.className
        ])} style={props.style} onClick={props.onClick}>
            {props.children}
        </div>
    );
});

export default Card;