import React, { useMemo, FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import Transition from '../transition';
import { joinTrim, addUnit } from '../../utils';
import { useNamespace } from '../../hooks';
import { BadgeProps } from './types';

const Badge:FunctionComponent<BadgeProps> = ((props) => {

    const {
        content,
        visible = true,
        timeout = 400,
        dot = false,
        maxCount = 99,
        bordered = false,
        color,
        offset = [0, 0]
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('badge',prefix);

    const varClasses = useMemo(()=>{
        return joinTrim([
            ns.e('content'),
            props.children ? ns.m('fixed') : '',
            bordered ? ns.m('bordered') : '',
            dot ? ns.m('dot') : '',
            props.className
        ]);
    },[]);

    const varStyles = useMemo(()=>{
        const styles:React.CSSProperties = {};
        if(color){
            styles.backgroundColor = color;
        }
        if(offset){
            const [x, y] = offset;
            if (props.children) {
                styles.top = addUnit(y);
                styles.right = addUnit(x);
            } else {
                styles.marginTop = addUnit(y);
                styles.marginLeft = addUnit(x);
            }
        }
        return {...styles,...props.style};
    },[props.style]);

    return (
        <div className={ ns.b() }>
            <Transition in={visible} timeout={timeout} type={ns.m(props.children?'scale-translate':'scale')}>
                <div
                    className={ varClasses }
                    style={ varStyles }
                >
                    {
                        !dot && <>
                            { Number(content) && Number(content) > maxCount ? `${maxCount}+` : content }
                        </>
                    }
                </div>
            </Transition>
            { props.children }
        </div>
    );
});

export default Badge;