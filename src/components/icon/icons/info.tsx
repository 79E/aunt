
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
  className="aunt-icon aunt-icon-info"
  {...props}
>
  <circle cx="12" cy="12" r="10" />
  <line x1="12" y1="16" x2="12" y2="12" />
  <line x1="12" y1="8" x2="12.01" y2="8" />
</svg>

  );
  
  const Info = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Info" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Info.displayName = 'Info';
  
  export default Info;
  