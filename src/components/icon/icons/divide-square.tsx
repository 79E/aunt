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
    className='aunt-icon aunt-icon-divide-square'
    {...props}
  >
    <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
    <line x1='8' y1='12' x2='16' y2='12' />
    <line x1='12' y1='16' x2='12' y2='16' />
    <line x1='12' y1='8' x2='12' y2='8' />
  </svg>
);

const DivideSquare = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name='DivideSquare' {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});

DivideSquare.displayName = 'DivideSquare';

export default DivideSquare;
