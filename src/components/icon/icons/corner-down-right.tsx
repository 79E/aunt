
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
  className="aunt-icon aunt-icon-corner-down-right"
    {...props}
>
  <polyline points="15 10 20 15 15 20" />
  <path d="M4 4v7a4 4 0 0 0 4 4h12" />
</svg>

  );
  
  const CornerDownRight = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="CornerDownRight" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  CornerDownRight.displayName = 'CornerDownRight';
  
  export default CornerDownRight;
  