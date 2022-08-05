import React,{ FunctionComponent, CSSProperties, useMemo, useContext } from "react";
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace } from '../../hooks';
import { GridItemProps } from './types';

const GridItem:FunctionComponent<Partial<GridItemProps>> = (props)=>{
    const { column, row, children, style } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('griditem',prefix);

    const varStyles = useMemo<CSSProperties | undefined>(() => {
        const styles: CSSProperties = {};
        if(column){
            styles.gridColumnEnd = `span ${column}`;
        }
        if(row){
            styles.gridRowEnd = `span ${row}`;
        }
        return {...style,...styles};
    }, [row,column]);

    return <div
        className={ns.b()}
        style={{...varStyles}}
    >
        {children}
    </div>;
};

export default GridItem;