
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
  className="aunt-icon aunt-icon-cloud-drizzle"
  {...props}
>
  <line x1="8" y1="19" x2="8" y2="21" />
  <line x1="8" y1="13" x2="8" y2="15" />
  <line x1="16" y1="19" x2="16" y2="21" />
  <line x1="16" y1="13" x2="16" y2="15" />
  <line x1="12" y1="21" x2="12" y2="23" />
  <line x1="12" y1="15" x2="12" y2="17" />
  <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
</svg>

  );
  
  const CloudDrizzle = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="CloudDrizzle" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  CloudDrizzle.displayName = 'CloudDrizzle';
  
  export default CloudDrizzle;
  