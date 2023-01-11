import React, { isValidElement, FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { getSizeStyle, joinTrim } from '../../utils';
import { useNamespace } from '../../hooks';
import { EmptyProps, StatusOptions } from './types';

const defaultStatus: StatusOptions = {
  default: 'https://p0.meituan.net/travelcube/0bc9958ed5c89df9e4e55f8518f46ab88661.png',
  search: 'https://p1.meituan.net/travelcube/75774dd6a2f0c76fd1b8ca8ba028f6e010943.png',
  error: 'https://p0.meituan.net/travelcube/7c88c8a27ccf44777865cd3baaadb0568931.png',
  network: 'https://p0.meituan.net/travelcube/696efbd749dbef2f525179de25f861918429.png',
};

export const Empty: FunctionComponent<Partial<EmptyProps>> = (props: EmptyProps) => {
  const { image = 'default', imageSize, description } = props;

  const { prefix } = useContext(ConfigProviderContext);
  const ns = useNamespace('empty', prefix);

  const renderImage = () => {
    if (isValidElement(image)) {
      return image;
    }
    let src = image;
    const status = Object.keys(defaultStatus);
    if (status.includes(image as string)) {
      src = defaultStatus[image as string];
    }
    return <img src={src as string} alt='empty' />;
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

  return (
    <div className={joinTrim([ns.b(), props.className])} style={props.style}>
      <div className={ns.e('image')} style={getSizeStyle(imageSize)}>
        {renderImage()}
      </div>
      {renderDescription()}
      {renderBottom()}
    </div>
  );
};
