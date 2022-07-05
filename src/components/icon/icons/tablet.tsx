
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
  className="aunt-icon aunt-icon-tablet"
  {...props}
>
  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
  <line x1="12" y1="18" x2="12.01" y2="18" />
</svg>

  );
  
  const Tablet = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Tablet" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Tablet.displayName = 'Tablet';
  
  export default Tablet;
  