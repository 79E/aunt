
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
  className="aunt-icon aunt-icon-map"
  {...props}
>
  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
  <line x1="8" y1="2" x2="8" y2="18" />
  <line x1="16" y1="6" x2="16" y2="22" />
</svg>

  );
  
  const Map = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Map" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Map.displayName = 'Map';
  
  export default Map;
  