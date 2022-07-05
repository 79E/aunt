
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
      className="aunt-icon aunt-icon-refresh-ccw"
    {...props}
>
  <polyline points="1 4 1 10 7 10" />
  <polyline points="23 20 23 14 17 14" />
  <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
</svg>

  );
  
  const RefreshCcw = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="RefreshCcw" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  RefreshCcw.displayName = 'RefreshCcw';
  
  export default RefreshCcw;
  