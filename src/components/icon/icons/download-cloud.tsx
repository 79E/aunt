import React from 'react';
import Icon, { IconProps } from '../index';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='aunt-icon aunt-icon-download-cloud'
    {...props}
  >
    <polyline points='8 17 12 21 16 17' />
    <line x1='12' y1='12' x2='12' y2='21' />
    <path d='M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29' />
  </svg>
);

const DownloadCloud = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name='DownloadCloud' {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});

DownloadCloud.displayName = 'DownloadCloud';

export default DownloadCloud;
