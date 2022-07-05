
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
  className="aunt-icon aunt-icon-life-buoy"
  {...props}
>
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="4" />
  <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
  <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
  <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
  <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
  <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
</svg>

  );
  
  const LifeBuoy = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="LifeBuoy" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  LifeBuoy.displayName = 'LifeBuoy';
  
  export default LifeBuoy;
  