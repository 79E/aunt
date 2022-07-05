
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
  className="aunt-icon aunt-icon-codepen"
  {...props}
>
  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
  <line x1="12" y1="22" x2="12" y2="15.5" />
  <polyline points="22 8.5 12 15.5 2 8.5" />
  <polyline points="2 15.5 12 8.5 22 15.5" />
  <line x1="12" y1="2" x2="12" y2="8.5" />
</svg>

  );
  
  const Codepen = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Codepen" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Codepen.displayName = 'Codepen';
  
  export default Codepen;
  