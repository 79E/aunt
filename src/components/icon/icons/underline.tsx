
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
  className="aunt-icon aunt-icon-underline"
  {...props}
>
  <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
  <line x1="4" y1="21" x2="20" y2="21" />
</svg>

  );
  
  const Underline = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Underline" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Underline.displayName = 'Underline';
  
  export default Underline;
  