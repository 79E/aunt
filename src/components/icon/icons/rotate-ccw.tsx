
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
  className="aunt-icon aunt-icon-rotate-ccw"
  {...props}
>
  <polyline points="1 4 1 10 7 10" />
  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
</svg>

  );
  
  const RotateCcw = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="RotateCcw" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  RotateCcw.displayName = 'RotateCcw';
  
  export default RotateCcw;
  