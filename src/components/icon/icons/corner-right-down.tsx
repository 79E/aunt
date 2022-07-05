
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
  className="aunt-icon aunt-icon-corner-right-down"
    {...props}
>
  <polyline points="10 15 15 20 20 15" />
  <path d="M4 4h7a4 4 0 0 1 4 4v12" />
</svg>

  );
  
  const CornerRightDown = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="CornerRightDown" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  CornerRightDown.displayName = 'CornerRightDown';
  
  export default CornerRightDown;
  