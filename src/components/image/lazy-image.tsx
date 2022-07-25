import React,{FunctionComponent, useContext} from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context'
import useNamespace, { UseNamespace } from '../../hooks/use-namespace';
import { joinTrim } from '../../utils'
import Lazyload from '../lazy-load'
import AuntIconAlertCircle from '../icon/icons/alert-circle'
import Loading from '../loading'
import { Image } from './image'
import { LazyImageProps } from './types'


const defaultProps:LazyImageProps = {
    lazyload: false,
    fit: 'fill',
    errorIcon: <AuntIconAlertCircle />,
    loadingIcon: <Loading type="oval" />,
    showError: true,
    showLoading: true,
    block: true,
}

export const getLazyImagePlaceholder = (ns: UseNamespace): React.ReactNode =>(
    <div className={ns.e('loading')}>
        <Loading type="oval" className={ns.em('loading','icon')} />
    </div>
)
    

export const LazyImage:FunctionComponent<Partial<LazyImageProps>> = (props) => {
    const { lazyload, ...imageProps  } = {
        ...defaultProps,
        ...props
    }

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('image',prefix)

    const renderPlaceholder = ()=>{
        if (typeof lazyload === 'boolean') return getLazyImagePlaceholder(ns);
        if (typeof lazyload !== 'boolean' && lazyload && lazyload.placeholder) {
            return lazyload.placeholder
        }
        return getLazyImagePlaceholder(ns);
    }

    if (lazyload) {
        const { className, style, height, width } = imageProps;
        const attrs = {
          className: joinTrim([
            imageProps.block ? ns.m('block') : '',
            className
          ]),
          style: { ...style, height, width },
        };
        return (
          <Lazyload {...attrs} placeholder={renderPlaceholder()}>
            <Image {...imageProps} />
          </Lazyload>
        );
      }
    return <Image {...imageProps} />;
}


LazyImage.defaultProps = defaultProps
LazyImage.displayName = 'AuntLazyImage'



export default LazyImage;

