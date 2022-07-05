
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
  className="aunt-icon aunt-icon-corner-left-up"
    {...props}
>
  <polyline points="14 9 9 4 4 9" />
  <path d="M20 20h-7a4 4 0 0 1-4-4V4" />
</svg>

  );
  
  const CornerLeftUp = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="CornerLeftUp" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  CornerLeftUp.displayName = 'CornerLeftUp';
  
  export default CornerLeftUp;
  