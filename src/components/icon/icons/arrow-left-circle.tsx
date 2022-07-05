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
    className="aunt-icon aunt-icon-arrow-left-circle"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 8 8 12 12 16" />
    <line x1="16" y1="12" x2="8" y2="12" />
  </svg>
);

const ArrowLeftCircle = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name="ArrowLeftCircle" {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});


ArrowLeftCircle.displayName = 'ArrowLeftCircle';

export default ArrowLeftCircle;
