
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
  className="aunt-icon aunt-icon-chevrons-down"
  {...props}
>
  <polyline points="7 13 12 18 17 13" />
  <polyline points="7 6 12 11 17 6" />
</svg>

  );
  
  const ChevronsDown = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="ChevronsDown" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  ChevronsDown.displayName = 'ChevronsDown';
  
  export default ChevronsDown;
  