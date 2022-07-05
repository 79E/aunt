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
    className="aunt-icon aunt-icon-arrow-down-left"
    {...props}
  >
    <line x1="17" y1="7" x2="7" y2="17" />
    <polyline points="17 17 7 17 7 7" />
  </svg>
);

const ArrowDownLeft = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name="ArrowDownLeft" {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});

ArrowDownLeft.displayName = 'ArrowDownLeft';

export default ArrowDownLeft;
