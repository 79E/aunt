
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
  className="aunt-icon aunt-icon-x-octagon"
  {...props}
>
  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
  <line x1="15" y1="9" x2="9" y2="15" />
  <line x1="9" y1="9" x2="15" y2="15" />
</svg>

  );
  
  const XOctagon = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="XOctagon" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  XOctagon.displayName = 'XOctagon';
  
  export default XOctagon;
  