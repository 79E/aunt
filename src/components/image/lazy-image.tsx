import React,{FunctionComponent, useContext} from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import useNamespace, { UseNamespace } from '../../hooks/use-namespace';
import { joinTrim } from '../../utils';
import Lazyload from '../lazy-load';
import AuntIconAlertCircle from '../icon/icons/alert-circle';
import Loading from '../loading';
import { Image } from './image';
import { LazyImageProps } from './types';

export const getLazyImagePlaceholder = (ns: UseNamespace): React.ReactNode =>(
    <div className={ns.e('loading')}>
        <Loading type="oval" className={ns.em('loading','icon')} />
    </div>
);

export const LazyImage:FunctionComponent<Partial<LazyImageProps>> = (props:LazyImageProps) => {
    const { 
      lazyload = false,
      fit = 'fill',
      errorIcon = <AuntIconAlertCircle />,
      loadingIcon = <Loading type="oval" />,
      showError = true,
      showLoading = true,
      block = true,
      ...rest  
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('image',prefix);

    const renderPlaceholder = ()=>{
        if (typeof lazyload === 'boolean') return getLazyImagePlaceholder(ns);
        if (typeof lazyload !== 'boolean' && lazyload && lazyload.placeholder) {
            return lazyload.placeholder;
        }
        return getLazyImagePlaceholder(ns);
    };

    const renderImage = ()=> (
        <Image 
          fit={fit} 
          errorIcon={errorIcon} 
          loadingIcon={loadingIcon} 
          showError={showError} 
          showLoading={showLoading}
          {...rest} 
        />
    );

    if (lazyload) {
        const { height, width } = rest;
        const attrs = {
          className: joinTrim([
            block ? ns.m('block') : '',
            rest.className
          ]),
          style: { ...rest.style, height, width },
        };
        return (
          <Lazyload {...attrs} placeholder={renderPlaceholder()}>
            { renderImage() }
          </Lazyload>
        );
    }
    return (
      renderImage()
    );
};

export default LazyImage;