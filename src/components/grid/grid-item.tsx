import React,{ FunctionComponent, CSSProperties, useMemo, useContext } from "react";
import ConfigProviderContext from '../config-provider/config-provider-context'
import { GridItemProps } from './types'

const defaultProps:GridItemProps = {

}

const GridItem:FunctionComponent<Partial<GridItemProps>> = (props)=>{
    const { column, row, children, style } = {
        ...defaultProps,
        ...props
    }

    const { prefix } = useContext(ConfigProviderContext);
    const classPrefix = `${prefix}-griditem`

    const varStyles = useMemo<CSSProperties | undefined>(() => {
        const styles: CSSProperties = {}
        if(column){
            styles.gridColumnEnd = `span ${column}`;
        }
        if(row){
            styles.gridRowEnd = `span ${row}`
        }
        return {...style,...styles};
    }, [row,column]);

    return <div
        className={classPrefix}
        style={{...varStyles}}
    >
        {children}
    </div>
}

GridItem.defaultProps = defaultProps;
GridItem.displayName = 'AuntGridItem';


export default GridItem;