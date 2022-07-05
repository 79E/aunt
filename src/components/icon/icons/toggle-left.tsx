
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
  className="aunt-icon aunt-icon-toggle-left"
  {...props}
>
  <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
  <circle cx="8" cy="12" r="3" />
</svg>

  );
  
  const ToggleLeft = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="ToggleLeft" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  ToggleLeft.displayName = 'ToggleLeft';
  
  export default ToggleLeft;
  