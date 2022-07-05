
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
  className="aunt-icon aunt-icon-refresh-cw"
  {...props}
>
  <polyline points="23 4 23 10 17 10" />
  <polyline points="1 20 1 14 7 14" />
  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
</svg>

  );
  
  const RefreshCw = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="RefreshCw" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  RefreshCw.displayName = 'RefreshCw';
  
  export default RefreshCw;
  