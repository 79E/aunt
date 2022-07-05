
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
  className="aunt-icon aunt-icon-cloud-lightning"
    {...props}
>
  <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
  <polyline points="13 11 9 17 15 17 11 23" />
</svg>

  );
  
  const CloudLightning = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="CloudLightning" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  CloudLightning.displayName = 'CloudLightning';
  
  export default CloudLightning;
  