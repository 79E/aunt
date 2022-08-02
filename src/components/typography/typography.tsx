import React, { FunctionComponent, useContext, useMemo } from 'react';
import { TypographyProps } from './types';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace } from '../../hooks';
import { joinTrim } from '../../utils';

const Typography:FunctionComponent<Partial<TypographyProps> & { renderType: string }> = ((props) => {

    const {
        type,
        size = 'md',
        level = 4,
        center,
        ellipsis,
        strong,
        underline,
        disabled,
        renderType,
        delete: del,
        ...rest
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('typography',prefix);

    const elli = ellipsis === true ? 1 : (ellipsis as number);

    const varClasses = useMemo(()=>{
        return joinTrim([
            ns.b(),
            renderType ? ns.m(renderType) : '',
            type ? ns.m(type) : '',
            size ? ns.m(size) : '',
            level && renderType === 'title' ? ns.m(`l${level}`) : '',
            disabled ? ns.m('disabled') : '',
            center ? ns.m('center') : '',
            strong ? ns.m('strong') : '',
            del ? ns.m('delete') : '',
            underline ? ns.m('underline') : '',
            elli === 1 ? 'aunt-ellipsis': '',
            elli && elli > 1 ? `aunt-multi-ellipsis--l${elli}`: '',
            props.className
        ]);
      },[size, type, renderType,level, disabled, center, strong, del, underline, elli, props.className]);

    return <div className={varClasses} onClick={props.onClick} {...rest}> 
        {props.children}
    </div>;
});

export default Typography;