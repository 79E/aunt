import React, { useMemo, FunctionComponent, useContext } from 'react';
import { AuntIconStar } from '../icon/icons';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace, useMergedState } from '../../hooks';
import { addUnit, joinTrim } from '../../utils';
import { RateProps } from './types';

export const Rate:FunctionComponent<RateProps> = ((props) => {
    
    const {
        count = 5,
        allowHalf = false,
        icon = <AuntIconStar fill='currentColor' />,
        voidIcon,
        defaultValue = 0,
        allowClear = true,
    } = props;

    const [value, setValue] = useMergedState({
        value: props.value,
        defaultValue: defaultValue,
    });

    const starList = Array(count).fill('aunt');


    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('rate',prefix);

    const renderIcon = (v: number, half: boolean) => {
        
        const selectIcon = value >= v;

        const iconStyles: React.CSSProperties = useMemo(()=>{
            return {
                color: selectIcon ? props.color : props.voidColor,
                paddingRight: addUnit(props.gutter)
            };
        },[props.gutter, props.color, props.voidColor, selectIcon, value]);

        const currentIcon = selectIcon ? icon : voidIcon ? voidIcon : icon;

        return <div 
            className={joinTrim([
                ns.e('icon'),
                half ? ns.em('icon','half') :'',
                selectIcon ? ns.em('icon','active') :''
            ])} 
            style={iconStyles}
            onClick={() => {
                if (props.readonly) return;
                if (props.disabled) return;
                if (allowClear && value === v) {
                    props.onChange?.(0);
                    setValue(0);
                } else {
                  setValue(v);
                  props.onChange?.(v);
                }
            }}
        >
          { currentIcon }
        </div>;
    };

    return <div className={ns.b()}>   
        {starList.map((_, i) => (
            <div key={i} className={
                joinTrim([
                    ns.e('item'),
                    props.disabled ? ns.m('disabled') : '',
                    props.readonly ? ns.m('readonly') : ''
                ])}>
                { allowHalf && renderIcon(i + 0.5, true) }
                { renderIcon(i + 1, false) }
            </div>
        ))}
    </div>;
});