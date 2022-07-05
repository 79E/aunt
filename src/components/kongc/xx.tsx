import React, { CSSProperties, FunctionComponent, useContext } from 'react'
import ConfigProviderContext from '../config-provider/config-provider-context'
import { } from './types'

const defaultProps = {

}

export const xx:FunctionComponent = ((props) => {

    const { prefix } = useContext(ConfigProviderContext);
    const classPrefix = `${prefix}-typography`

    return <div 
        
    >   
        
    </div>
})


xx.defaultProps = defaultProps
xx.displayName = 'Auntxx'