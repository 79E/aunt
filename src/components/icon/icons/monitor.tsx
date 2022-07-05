
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
  className="aunt-icon aunt-icon-monitor"
  {...props}
>
  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
  <line x1="8" y1="21" x2="16" y2="21" />
  <line x1="12" y1="17" x2="12" y2="21" />
</svg>

  );
  
  const Monitor = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Monitor" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Monitor.displayName = 'Monitor';
  
  export default Monitor;
  