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
    className='aunt-icon aunt-icon-shopping-bag'
    {...props}
  >
    <path d='M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' />
    <line x1='3' y1='6' x2='21' y2='6' />
    <path d='M16 10a4 4 0 0 1-8 0' />
  </svg>
);

const ShoppingBag = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name='ShoppingBag' {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});

ShoppingBag.displayName = 'ShoppingBag';

export default ShoppingBag;