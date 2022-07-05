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
    className="aunt-icon aunt-icon-align-center"
    {...props}
  >
      <line x1="18" y1="10" x2="6" y2="10" />
      <line x1="21" y1="6" x2="3" y2="6" />
      <line x1="21" y1="14" x2="3" y2="14" />
      <line x1="18" y1="18" x2="6" y2="18" />
  </svg>
);

const AlignCenter = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name="AlignCenter" {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});

AlignCenter.displayName = 'AlignCenter';

export default AlignCenter;
