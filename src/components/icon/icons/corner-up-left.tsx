
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
  className="aunt-icon aunt-icon-corner-up-left"
    {...props}
>
  <polyline points="9 14 4 9 9 4" />
  <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
</svg>

  );
  
  const CornerUpLeft = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="CornerUpLeft" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  CornerUpLeft.displayName = 'CornerUpLeft';
  
  export default CornerUpLeft;
  