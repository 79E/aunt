
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
  className="aunt-icon aunt-icon-corner-left-down"
    {...props}
>
  <polyline points="14 15 9 20 4 15" />
  <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
</svg>

  );
  
  const CornerLeftDown = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="CornerLeftDown" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  CornerLeftDown.displayName = 'CornerLeftDown';
  
  export default CornerLeftDown;
  