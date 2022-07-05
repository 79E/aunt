
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
  className="aunt-icon aunt-icon-zap-off"
  {...props}
>
  <polyline points="12.41 6.75 13 2 10.57 4.92" />
  <polyline points="18.57 12.91 21 10 15.66 10" />
  <polyline points="8 8 3 14 12 14 11 22 16 16" />
  <line x1="1" y1="1" x2="23" y2="23" />
</svg>

  );
  
  const ZapOff = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="ZapOff" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  ZapOff.displayName = 'ZapOff';
  
  export default ZapOff;
  