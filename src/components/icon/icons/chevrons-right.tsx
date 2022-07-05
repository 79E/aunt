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
    className="aunt-icon aunt-icon-chevrons-right"
    {...props}
  >
      <polyline points="13 17 18 12 13 7" />
      <polyline points="6 17 11 12 6 7" />
  </svg>
);

const ChevronsRight = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name="ChevronsRight" {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});

ChevronsRight.displayName = 'ChevronsRight';

export default ChevronsRight;



