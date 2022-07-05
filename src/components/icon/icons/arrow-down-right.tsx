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
    className="aunt-icon aunt-icon-arrow-down-right"
    {...props}
  >
    <line x1="7" y1="7" x2="17" y2="17" />
    <polyline points="17 7 17 17 7 17" />
  </svg>
);

const ArrowDownRight = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name="ArrowDownRight" {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});


ArrowDownRight.displayName = 'ArrowDownRight';

export default ArrowDownRight;
