
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
  className="aunt-icon aunt-icon-smile"
  {...props}
>
  <circle cx="12" cy="12" r="10" />
  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
  <line x1="9" y1="9" x2="9.01" y2="9" />
  <line x1="15" y1="9" x2="15.01" y2="9" />
</svg>

  );
  
  const Smile = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Smile" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Smile.displayName = 'Smile';
  
  export default Smile;
  