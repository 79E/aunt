
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
  className="aunt-icon aunt-icon-corner-up-right"
    {...props}
>
  <polyline points="15 14 20 9 15 4" />
  <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
</svg>

  );
  
  const CornerUpRight = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="CornerUpRight" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  CornerUpRight.displayName = 'CornerUpRight';
  
  export default CornerUpRight;
  