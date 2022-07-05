
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
  className="aunt-icon aunt-icon-truck"
  {...props}
>
  <rect x="1" y="3" width="15" height="13" />
  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
  <circle cx="5.5" cy="18.5" r="2.5" />
  <circle cx="18.5" cy="18.5" r="2.5" />
</svg>

  );
  
  const Truck = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Truck" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Truck.displayName = 'Truck';
  
  export default Truck;
  