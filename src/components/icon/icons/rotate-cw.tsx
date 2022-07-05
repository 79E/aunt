
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
  className="aunt-icon aunt-icon-rotate-cw"
  {...props}
>
  <polyline points="23 4 23 10 17 10" />
  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
</svg>

  );
  
  const RotateCw = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="RotateCw" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  RotateCw.displayName = 'RotateCw';
  
  export default RotateCw;
  