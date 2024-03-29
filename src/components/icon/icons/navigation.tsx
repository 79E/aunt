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
    className='aunt-icon aunt-icon-navigation'
    {...props}
  >
    <polygon points='3 11 22 2 13 21 11 13 3 11' />
  </svg>
);

const Navigation = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name='Navigation' {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
