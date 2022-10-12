import React, { useMemo, FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { AuntIconChevronLeft, AuntIconChevronRight } from '../icon/icons';
import { joinTrim } from '../../utils';
import { useNamespace } from '../../hooks';
import { PaginationProps } from './types';

export const Pagination:FunctionComponent<PaginationProps> = ((props) => {
    
    const {
        current = 1,
        pageSize = 10,
        total = 6,
        icon = false,
        justify = 'side',
        hideOnOnePage = false,
        prevFieldText = '上一页',
        nextFieldText = '下一页'
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('pagination',prefix);

    const pageNum = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);

    const renderIcon =(type:'prev' | 'next')=>{
        if (Object.prototype.toString.call(icon) === '[object Object]') {
            return icon;
        }
        if(type === 'prev'){
            if (Array.isArray(icon) && Boolean(icon.length)) {
                return icon[0];
            }
            return icon ? <AuntIconChevronLeft size={20} /> : null;
        }
        if (Array.isArray(icon) && Boolean(icon.length)) {
            return icon.length >= 2 ? icon[1] : icon[0];
        }
        return icon ? <AuntIconChevronRight size={20}/> : null;
    };

    const renderPrevField = ()=>{
        if(hideOnOnePage && pageNum === 1){
            return null;
        } 
        if(props.renderPrevField){
            return props.renderPrevField({ current,pageSize,pageNum });
        }
        return <div className={
            joinTrim([
                ns.e('prev'),
                current <= 1 ? ns.m('disabled') : ''
            ])
        } onClick={()=>{
            props.onChange?.({ 
                pageSize, 
                pageNum, 
                current: Math.max(1, current - 1) 
            });
        }}>
            {renderIcon('prev')}
            {prevFieldText}
        </div>;
    };
    const renderNextField = ()=>{
        if(hideOnOnePage && pageNum === 1){
            return null;
        } 
        if(props.renderNextField){
            return props.renderNextField({ current,pageSize,pageNum });
        }
        return <div className={joinTrim([
            ns.e('next'),
            current >= pageNum ? ns.m('disabled') : ''
        ])} onClick={()=>{
            props.onChange?.({
                pageSize,
                pageNum,
                current: Math.min(current + 1, pageNum),
            });
        }}>
            {nextFieldText}
            {renderIcon('next')}
        </div>;
    };

    const renderData = ()=>{
        return <div className={ns.e('data')}>
            {current} / {pageNum}
        </div>;
    };

    return <div className={
        joinTrim([ns.b()])
    }
    style={{
        ...props.style,
        justifyContent: justify === 'center' || hideOnOnePage ? 'center' : 'space-between' ,
    }}
    >   

    {renderPrevField()}
    {renderData()}
    {renderNextField()}
        
    </div>;
});