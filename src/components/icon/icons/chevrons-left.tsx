
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
  className="aunt-icon aunt-icon-chevrons-left"
  {...props}
>
  <polyline points="11 17 6 12 11 7" />
  <polyline points="18 17 13 12 18 7" />
</svg>

  );
  
  const ChevronsLeft = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="ChevronsLeft" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  ChevronsLeft.displayName = 'ChevronsLeft';
  
  export default ChevronsLeft;
  