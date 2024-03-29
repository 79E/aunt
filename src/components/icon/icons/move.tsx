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
    className='aunt-icon aunt-icon-move'
    {...props}
  >
    <polyline points='5 9 2 12 5 15' />
    <polyline points='9 5 12 2 15 5' />
    <polyline points='15 19 12 22 9 19' />
    <polyline points='19 9 22 12 19 15' />
    <line x1='2' y1='12' x2='22' y2='12' />
    <line x1='12' y1='2' x2='12' y2='22' />
  </svg>
);

const Move = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name='Move' {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});

Move.displayName = 'Move';

export default Move;
