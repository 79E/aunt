
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
    className="aunt-icon aunt-icon-chevron-down"
    {...props}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ChevronDown = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name="ChevronDown" {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});

ChevronDown.displayName = 'ChevronDown';

export default ChevronDown;
