
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
  className="aunt-icon aunt-icon-zoom-in"
  {...props}
>
  <circle cx="11" cy="11" r="8" />
  <line x1="21" y1="21" x2="16.65" y2="16.65" />
  <line x1="11" y1="8" x2="11" y2="14" />
  <line x1="8" y1="11" x2="14" y2="11" />
</svg>

  );
  
  const ZoomIn = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="ZoomIn" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  ZoomIn.displayName = 'ZoomIn';
  
  export default ZoomIn;
  