
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
  className="aunt-icon aunt-icon-code"
  {...props}
>
  <polyline points="16 18 22 12 16 6" />
  <polyline points="8 6 2 12 8 18" />
</svg>

  );
  
  const Code = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Code" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Code.displayName = 'Code';
  
  export default Code;
  