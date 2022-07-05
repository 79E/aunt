
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
  className="aunt-icon aunt-icon-clock"
    {...props}
>
  <circle cx="12" cy="12" r="10" />
  <polyline points="12 6 12 12 16 14" />
</svg>

  );
  
  const Clock = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Clock" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Clock.displayName = 'Clock';
  
  export default Clock;
  