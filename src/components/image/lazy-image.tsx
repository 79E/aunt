import React,{FunctionComponent, useContext} from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context'
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

export const getLazyImagePlaceholder = (prefix:string): React.ReactNode =>(
    <div className={`${prefix}--loading`}>
        <Loading type="oval" className={`${prefix}--loading-icon`} />
    </div>
)
    

export const LazyImage:FunctionComponent<Partial<LazyImageProps>> = (props) => {
    const { lazyload, ...imageProps  } = {
        ...defaultProps,
        ...props
    }

    const { prefix } = useContext(ConfigProviderContext);
    const classPrefix = `${prefix}-image`

    const renderPlaceholder = ()=>{
        if (typeof lazyload === 'boolean') return getLazyImagePlaceholder(classPrefix);
        if (typeof lazyload !== 'boolean' && lazyload && lazyload.placeholder) {
            return lazyload.placeholder
        }
        return getLazyImagePlaceholder(classPrefix);
    }

    if (lazyload) {
        const { className, style, height, width } = imageProps;
        const attrs = {
          className: `${className} ${ imageProps.block ? classPrefix + '--block' : '' }`,
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

