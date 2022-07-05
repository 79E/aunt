
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
    className="aunt-icon aunt-icon-check"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Check = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name="Check" {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});

Check.displayName = 'Check';

export default Check;
