
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
  className="aunt-icon aunt-icon-crosshair"
    {...props}
>
  <circle cx="12" cy="12" r="10" />
  <line x1="22" y1="12" x2="18" y2="12" />
  <line x1="6" y1="12" x2="2" y2="12" />
  <line x1="12" y1="6" x2="12" y2="2" />
  <line x1="12" y1="22" x2="12" y2="18" />
</svg>

  );
  
  const Crosshair = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Crosshair" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Crosshair.displayName = 'Crosshair';
  
  export default Crosshair;
  