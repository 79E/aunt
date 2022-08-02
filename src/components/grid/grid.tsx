import React, { CSSProperties, FunctionComponent, useMemo, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace } from '../../hooks';
import { addUnit } from '../../utils';
import { GridProps } from './types';

const Grid:FunctionComponent<Partial<GridProps>> = ((props: GridProps) => {
    
    const {
        gap = 0, column = 4, style,row
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('grid',prefix);

    const varStyles = useMemo<CSSProperties | undefined>(() => {
        const styles: CSSProperties = {};
        if(column){
            styles.gridTemplateColumns = `repeat(${column},minmax(0,1fr))`;
        }
        if(row){
            styles.gridTemplateRows = `repeat(${row},minmax(0,1fr))`;
        }
        if(gap !== undefined){
            if(Array.isArray(gap)){
                styles.gap = `${addUnit(gap[0])} ${addUnit(gap[1])}` ;
                styles.rowGap = addUnit(gap[0]);
                styles.columnGap = addUnit(gap[1]);
            }else{
                styles.gap = addUnit(gap);
                styles.rowGap = addUnit(gap);
                styles.columnGap = addUnit(gap);
            }
        }
        return {...style,...styles};
    }, [style, gap, column]);

    return <div className={ns.b()} style={{...varStyles}}>
        {props.children}
    </div>;
});

export default Grid;