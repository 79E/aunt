
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
  className="aunt-icon aunt-icon-corner-down-left"
    {...props}
>
  <polyline points="9 10 4 15 9 20" />
  <path d="M20 4v7a4 4 0 0 1-4 4H4" />
</svg>

  );
  
  const CornerDownLeft = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="CornerDownLeft" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  CornerDownLeft.displayName = 'CornerDownLeft';
  
  export default CornerDownLeft;
  