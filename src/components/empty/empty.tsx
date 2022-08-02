import React, { isValidElement, FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { getSizeStyle,joinTrim } from '../../utils';
import { useNamespace } from '../../hooks';
import { EmptyProps,StatusOptions } from './types';

const defaultStatus: StatusOptions = {
    default: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/9cb89e7f-1d20-4337-9688-a94441d51730.png',
    search: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/9cf3b34d-dfb1-474c-9800-85057ed00e14.png',
    error: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/fda25f87-9406-44e9-8cd2-21596fad56df.png',
    network: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/50a3f24b-4821-426c-ae91-7d9a96b57b16.png'
};

export const Empty:FunctionComponent<Partial<EmptyProps>> = ((props: EmptyProps) => {

    const {
        image = 'default', imageSize, description
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('empty',prefix);

    const renderImage = ()=>{
        if(isValidElement(image)){
            return image;
        }
        let src = image;
        const status = Object.keys(defaultStatus);
        if(status.includes(image as string)){
            src = defaultStatus[image as string];
        }
        return <img src={src as string} alt="empty" />;
    };

    const renderDescription = () => {
        if (description) {
            return <div className={ns.e('description')}>{description}</div>;
        }
        return null;
    };

    const renderBottom = () => {
        if (props.children) {
          return <div className={ns.e('bottom')}>{props.children}</div>;
        }
        return null;
    };

    return <div className={joinTrim([ns.b(),props.className])} style={props.style}>
        <div className={ns.e('image')} style={getSizeStyle(imageSize)}>
            {renderImage()}
        </div>
        {renderDescription()}
        {renderBottom()}
    </div>;
});