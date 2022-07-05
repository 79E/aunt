
  import React from 'react';
  import Icon,{ IconProps } from '../index';
  
  const Svg = (props: React.SVGProps<SVGSVGElement>) => (
    
    <svg
  viewBox="0 0 24 24"
  width="24"
  height="24"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="aunt-icon aunt-icon-coffee"
    {...props}
>
  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
  <line x1="6" y1="1" x2="6" y2="4" />
  <line x1="10" y1="1" x2="10" y2="4" />
  <line x1="14" y1="1" x2="14" y2="4" />
</svg>

  );
  
  const Coffee = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Coffee" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Coffee.displayName = 'Coffee';
  
  export default Coffee;
  