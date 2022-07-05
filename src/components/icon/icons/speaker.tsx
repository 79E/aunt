
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
  className="aunt-icon aunt-icon-speaker"
  {...props}
>
  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
  <circle cx="12" cy="14" r="4" />
  <line x1="12" y1="6" x2="12.01" y2="6" />
</svg>

  );
  
  const Speaker = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Speaker" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Speaker.displayName = 'Speaker';
  
  export default Speaker;
  