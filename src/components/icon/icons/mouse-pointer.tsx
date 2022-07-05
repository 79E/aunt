
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
  className="aunt-icon aunt-icon-mouse-pointer"
  {...props}
>
  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
  <path d="M13 13l6 6" />
</svg>

  );
  
  const MousePointer = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="MousePointer" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  MousePointer.displayName = 'MousePointer';
  
  export default MousePointer;
  