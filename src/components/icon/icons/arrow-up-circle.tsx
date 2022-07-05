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
    className="aunt-icon aunt-icon-arrow-up-circle"
    {...props}
  >
      <circle cx="12" cy="12" r="10" />
      <polyline points="16 12 12 8 8 12" />
      <line x1="12" y1="16" x2="12" y2="8" />
  </svg>
);

const ArrowUpCircle = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name="ArrowUpCircle" {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});

ArrowUpCircle.displayName = 'ArrowUpCircle';

export default ArrowUpCircle;
