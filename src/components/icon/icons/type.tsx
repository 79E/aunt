
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
  className="aunt-icon aunt-icon-type"
  {...props}
>
  <polyline points="4 7 4 4 20 4 20 7" />
  <line x1="9" y1="20" x2="15" y2="20" />
  <line x1="12" y1="4" x2="12" y2="20" />
</svg>

  );
  
  const Type = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Type" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Type.displayName = 'Type';
  
  export default Type;
  