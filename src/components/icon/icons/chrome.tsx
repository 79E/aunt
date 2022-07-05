
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
  className="aunt-icon aunt-icon-chrome"
    {...props}
>
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="4" />
  <line x1="21.17" y1="8" x2="12" y2="8" />
  <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
  <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
</svg>

  );
  
  const Chrome = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Chrome" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Chrome.displayName = 'Chrome';
  
  export default Chrome;
  