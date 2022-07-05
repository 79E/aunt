import React from 'react';
import Icon,{ IconProps } from '../index';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="aunt-icon aunt-icon-arrow-up-left"
    {...props}
  >
      <line x1="17" y1="17" x2="7" y2="7" />
      <polyline points="7 17 7 7 17 7" />
  </svg>
);

const ArrowUpLeft = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name="ArrowUpLeft" {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});

ArrowUpLeft.displayName = 'ArrowUpLeft';

export default ArrowUpLeft;
