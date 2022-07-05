import React, { CSSProperties, FunctionComponent, useMemo, useContext } from 'react'
import ConfigProviderContext from '../config-provider/config-provider-context'
import { GridProps } from './types'
import { addUnit } from '../../utils'

const defaultProps:GridProps = {
    column: 4,
    gap: 0,
}

const Grid:FunctionComponent<Partial<GridProps>> = ((props) => {
    
    const {
        gap, column, style,row
    } = {
        ...defaultProps,
        ...props
    }

    const { prefix } = useContext(ConfigProviderContext);
    const classPrefix = `${prefix}-grid`

    const varStyles = useMemo<CSSProperties | undefined>(() => {
        const styles: CSSProperties = {}
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

    return <div className={classPrefix} style={{...varStyles}}>
        {props.children}
    </div>
})


Grid.defaultProps = defaultProps;
Grid.displayName = 'AuntGrid';


export default Grid;