import React, { FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import Grid from '../grid';
import { CheckMark } from './check-mark';
import { useNamespace, useMergedState } from '../../hooks';
import { joinTrim } from '../../utils';
import { SelectorProps,FieldNames } from './types';

const defaultFieldNames:FieldNames = {
    description: 'description',
    label: 'label',
    value: 'value',
    disabled: 'disabled'
};

export const Selector:FunctionComponent<SelectorProps> = ((props) => {
    const { 
        fieldNames = defaultFieldNames,
        defaultValue = [],
        gap = 10,
        column = 3,
        checkMark = <CheckMark />,
        showCheckMark = true
     } = props;
    
    const [value, setValue] = useMergedState({
        value: props.value,
        defaultValue: defaultValue,
    });

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('selector',prefix);

    const items = props.options.map((item)=>{
        const itemValue = item[fieldNames.value];
        const active = (value || []).includes(item[fieldNames.value]);
        const disabled = item[fieldNames.disabled] || props.disabled;
        return <div className={joinTrim([
            ns.e('item'),
            disabled ? ns.em('item','disabled') : '',
            active ? ns.em('item','active') : '',
        ])} key={itemValue} 
            onClick={()=>{
                if (disabled) {
                    return;
                }
                let val: Array<string | number>;
                if (props.multiple) {
                    val = active ? value.filter(v => v !== itemValue) : [...value, itemValue];
                } else {
                    val = active ? [] : [itemValue];
                }
                setValue(val);
                const items = props.options.filter(option => val.includes(option.value));
                props.onChange?.(val, items);
            }}
        >
            <span>{item[fieldNames.label]}</span>
            {
                item[fieldNames.description] && <p className={ns.e('description')}>{item[fieldNames.description]}</p>
            }
            {
                (showCheckMark && active) &&  <div className={ns.e('mark')}>
                    { checkMark }
                </div>
            }
            
        </div>;
    });

    return <div className={joinTrim([
        ns.b(),
        props.className
    ])} style={props.style}>
        <Grid gap={gap} column={column}>
            {items}
        </Grid>
    </div>;
});